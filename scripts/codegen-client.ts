/**
 * How to use:
 *
 * 1. Define a new package in `.projenrc.ts` (the package must have the same name as the AWS client) and run `pnpm run synth-workspace`.
 * 2. Run `pnpm run codegen-client`, select the package to generate.
 * 3. Run `Run pnpm run eslint --fix` to fix the formatting.
 * 4. Commit the changes and enjoy.
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";

import {
  Effect,
  Option,
  Array,
  Record,
  String,
  Struct,
  Tuple,
  Exit,
  Predicate,
} from "effect";
import { constVoid, flow, pipe } from "effect/Function";
import Enquirer from "enquirer";
import { config } from "./codegen.config";

type Shape =
  | { type: "boolean" }
  | { type: "integer" }
  | { type: "double" }
  | { type: "string" }
  | { type: "timestamp" }
  | { type: "enum" }
  | { type: "list" }
  | {
      type: "operation";
      input: { target: string };
      output: { target: string };
      errors?: { target: string }[];
    }
  | {
      type: "service";
      traits: {
        "aws.api#service": {
          sdkId: string;
          cloudFormationName: string;
        };
      };
    }
  | {
      type: "structure";
      traits?: {
        "smithy.api#error"?: string;
      };
    };

type OperationType = Extract<Shape, { type: "operation" }>;

interface SmithyModel {
  shapes: Record<string, Shape>;
}

main().catch(console.error);

function getOperations(smithyModel: SmithyModel): [string, OperationType][] {
  return pipe(
    smithyModel.shapes,
    Record.toEntries,
    Array.filter(([_, shape]) => shape.type === "operation"),
  ) as unknown as [string, OperationType][];
}

function getOperationNames(smithyModel: SmithyModel) {
  return pipe(
    getOperations(smithyModel),
    Array.map(([name, _]) => name),
    Array.map(getLocalNameFromNamespace),
  );
}

async function main() {
  const enquirer = new Enquirer<{
    services: string[];
    commandToTest: string;
    inputToTest: string;
  }>();

  const { services } = await enquirer.prompt({
    type: "autocomplete",
    name: "services",
    message: "Which clients do you want to generate ?",
    multiple: true,
    choices: (await readdir("./packages")).filter((s) =>
      s.startsWith("client-"),
    ),
  });

  const each = services.map((packageName) =>
    Effect.promise(async () => {
      const serviceName = pipe(packageName, String.replace(/^client-/, ""));

      const smithyModel = (await (
        await fetch(
          `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${serviceName}.json`,
        )
      ).json()) as SmithyModel;

      const operations = pipe(
        smithyModel.shapes,
        Record.filter(({ type }) => type === "operation"),
      );

      const operationNames = pipe(
        operations,
        Record.keys,
        Array.map(getLocalNameFromNamespace),
      );

      console.log(packageName, config[packageName]?.command);

      const { commandToTest } = await enquirer.prompt({
        type: "autocomplete",
        name: "commandToTest",
        message: `Which command do you want to test in ${packageName} ?`,
        initial: operationNames.indexOf(config[packageName]?.command),
        multiple: false,
        choices: operationNames,
      });

      const { inputToTest } = await enquirer.prompt({
        type: "input",
        name: "inputToTest",
        message: `Which input do you want to test of ${commandToTest} ? (optional)`,
        initial: config[packageName]?.input,
        validate: Predicate.or(String.isEmpty)(
          flow(
            Effect.succeed,
            Effect.tryMap({
              try: JSON.parse,
              catch: constVoid,
            }),
            Effect.runSyncExit,
            Exit.isSuccess,
          ),
        ),
      });

      return [packageName, commandToTest, inputToTest] as const;
    }),
  );

  const results = await Effect.runPromise(Effect.all(each, { concurrency: 1 }));

  return Promise.all(results.map(generateClient));
}

const getLocalNameFromNamespace = flow(
  String.split("#"),
  Array.get(1),
  Option.getOrThrow,
);

const lowerFirst = flow(Array.modify(0, String.toLowerCase), Array.join(""));

const pascalCase = (s: string) =>
  pipe(
    s.split(" "),
    Array.flatMap(flow(Array.modify(0, String.toUpperCase))),
    Array.join(""),
  );

const SMITHY_API_UNIT = "smithy.api#Unit";

async function generateClient([
  packageName,
  commandToTest,
  inputToTest,
]: readonly [string, string, string]) {
  const serviceName = pipe(packageName, String.replace(/^client-/, ""));

  const smithyModel = (await (
    await fetch(
      `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${serviceName}.json`,
    )
  ).json()) as SmithyModel;

  const serviceShape = pipe(
    smithyModel.shapes,
    Record.values,
    Array.findFirst(
      (shape): shape is Extract<Shape, { type: "service" }> =>
        shape.type === "service",
    ),
    Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
  );

  const { sdkId } = serviceShape.traits["aws.api#service"];
  const sdkName = pascalCase(sdkId);

  const exportedErrors = pipe(
    smithyModel.shapes,
    Record.toEntries,
    Array.filter(
      ([_, shape]) =>
        shape.type === "structure" &&
        shape.traits?.["smithy.api#error"] !== undefined,
    ),
    Array.map(([name, _]) => name),
    Array.map(getLocalNameFromNamespace),
  );

  const operations = getOperations(smithyModel);
  const importedErrors = pipe(
    operations,
    Array.flatMap(([_, { errors }]) => errors ?? []),
    Array.map((error) => getLocalNameFromNamespace(error.target)),
    Array.dedupe,
  );

  await mkdir(`./packages/client-${serviceName}/src/`, {
    recursive: true,
  });
  await writeFile(
    `./packages/client-${serviceName}/src/Errors.ts`,
    `import type { 
  ${exportedErrors.map((e) => `${e} as Sdk${e}`).join(",\n  ")}
} from "@aws-sdk/client-${serviceName}";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

${pipe(
  exportedErrors,
  Array.map(
    (e) =>
      `export type ${e} = TaggedException<Sdk${e}>;`,
  ),
  Array.join("\n"),
)}

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}ClientInstance.ts`,
    `/**
 * @since 1.0.0
 */
import { ${sdkName}Client } from "@aws-sdk/client-${serviceName}";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  Default${sdkName}ClientConfigLayer,
  ${sdkName}ClientInstanceConfig,
} from "./${sdkName}ClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class ${sdkName}ClientInstance extends Context.Tag(
  "@effect-aws/client-${serviceName}/${sdkName}ClientInstance",
)<${sdkName}ClientInstance, ${sdkName}Client>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkName}ClientInstance = Effect.map(
  ${sdkName}ClientInstanceConfig,
  (config) => new ${sdkName}Client(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ${sdkName}ClientInstanceLayer = Layer.effect(
  ${sdkName}ClientInstance,
  make${sdkName}ClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkName}ClientInstanceLayer = ${sdkName}ClientInstanceLayer.pipe(
  Layer.provide(Default${sdkName}ClientConfigLayer),
);
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}ClientInstanceConfig.ts`,
    `/**
 * @since 1.0.0
 */
import type { ${sdkName}ClientConfig } from "@aws-sdk/client-${serviceName}";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export class ${sdkName}ClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-${serviceName}/${sdkName}ClientInstanceConfig",
)<${sdkName}ClientInstanceConfig, ${sdkName}ClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefault${sdkName}ClientInstanceConfig: Effect.Effect<${sdkName}ClientConfig> =
  Effect.gen(function* (_) {
    const runtime = yield* _(Effect.runtime<never>());
    const runSync = Runtime.runSync(runtime);

    return {
      logger: {
        info(m) {
          Effect.logInfo(m).pipe(runSync);
        },
        warn(m) {
          Effect.logWarning(m).pipe(runSync);
        },
        error(m) {
          Effect.logError(m).pipe(runSync);
        },
        debug(m) {
          Effect.logDebug(m).pipe(runSync);
        },
        trace(m) {
          Effect.logTrace(m).pipe(runSync);
        },
      },
    };
  });

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkName}ClientConfigLayer = Layer.effect(
  ${sdkName}ClientInstanceConfig,
  makeDefault${sdkName}ClientInstanceConfig,
);
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/index.ts`,
    `export * from "./Errors";
export * from "./${sdkName}ClientInstance";
export * from "./${sdkName}ClientInstanceConfig";
export * from "./${sdkName}Service";
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}Service.ts`,
    `/**
 * @since 1.0.0
 */
import {
  ${sdkName}ServiceException as Sdk${sdkName}ServiceException,
  ${pipe(
    operations,
    Array.map(([name]) => `${getLocalNameFromNamespace(name)}Command,`),
    Array.join("\n  "),
  )}
  ${pipe(
    operations,
    Array.flatMap(([_, { input, output }]) => [input.target, output.target]),
    Array.filter((target) => target !== SMITHY_API_UNIT),
    Array.map((target) => `type ${getLocalNameFromNamespace(target)},`),
    Array.dedupe,
    Array.join("\n  "),
  )}
} from "@aws-sdk/client-${serviceName}";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  ${sdkName}ClientInstance,
  ${sdkName}ClientInstanceLayer,
} from "./${sdkName}ClientInstance";
import { Default${sdkName}ClientConfigLayer } from "./${sdkName}ClientInstanceConfig";
import {
  ${pipe(
    [...importedErrors, 'TaggedException'],
    Array.map(error => `type ${error}`),
    Array.join(",\n "),
  )},
  SdkError,
} from "./Errors";

const commands = {
  ${pipe(
    getOperationNames(smithyModel),
    Array.map((name) => `${name}Command`),
    Array.join(",\n "),
  )}
};

/**
 * @since 1.0.0
 * @category models
 */
export interface ${sdkName}Service {
  readonly _: unique symbol;

${pipe(
  operations,
  Array.map(([operationName, operationShape]) => {
    const errors = pipe(
      operationShape.errors || [],
      Array.map(flow(Struct.get("target"), getLocalNameFromNamespace)),
      Array.intersection(importedErrors),
    );
    return `  /**
   * @see {@link ${getLocalNameFromNamespace(operationName)}Command}
   */
  ${pipe(getLocalNameFromNamespace(operationName), lowerFirst)}(
    args: ${operationShape.input.target === SMITHY_API_UNIT ? "{}" : getLocalNameFromNamespace(operationShape.input.target)},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  ${operationShape.output.target === SMITHY_API_UNIT ? 'void' : getLocalNameFromNamespace(operationShape.output.target)},
    ${pipe(["| SdkError", ...errors], Array.join("\n| "))}
  >`;
  }),
  Array.join("\n\n"),
)}
}

/**
 * @since 1.0.0
 * @category tags
 */
export const ${sdkName}Service = Context.GenericTag<${sdkName}Service>(
  "@effect-aws/client-${serviceName}/${sdkName}Service",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkName}Service = Effect.gen(function* (_) {
  const client = yield* _(${sdkName}ClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof Sdk${sdkName}ServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<Sdk${sdkName}ServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as ${sdkName}Service;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const Base${sdkName}ServiceLayer = Layer.effect(
  ${sdkName}Service,
  make${sdkName}Service,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ${sdkName}ServiceLayer = Base${sdkName}ServiceLayer.pipe(
  Layer.provide(${sdkName}ClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkName}ServiceLayer = ${sdkName}ServiceLayer.pipe(
  Layer.provide(Default${sdkName}ClientConfigLayer),
);
`,
  );

  await mkdir(`./packages/client-${serviceName}/test`, { recursive: true });
  await writeFile(
    `./packages/client-${serviceName}/test/${sdkName}.test.ts`,
    `import {
  type ${commandToTest}CommandInput,
  ${commandToTest}Command,
  ${sdkName}Client,
} from "@aws-sdk/client-${serviceName}";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  Base${sdkName}ServiceLayer,
  Default${sdkName}ClientConfigLayer,
  Default${sdkName}ServiceLayer,
  ${sdkName}ClientInstance,
  ${sdkName}ClientInstanceConfig,
  ${sdkName}Service,
  ${sdkName}ServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(${sdkName}Client);

describe("${sdkName}ClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = Effect.flatMap(${sdkName}Service, (service) => service.${pipe(commandToTest, lowerFirst)}(args));

    const result = await pipe(
      program,
      Effect.provide(Default${sdkName}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = Effect.flatMap(${sdkName}Service, (service) => service.${pipe(commandToTest, lowerFirst)}(args));

    const ${sdkName}ClientConfigLayer = Layer.succeed(${sdkName}ClientInstanceConfig, {
      region: "eu-central-1",
    });
    const Custom${sdkName}ServiceLayer = ${sdkName}ServiceLayer.pipe(
      Layer.provide(${sdkName}ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(Custom${sdkName}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("base", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = Effect.flatMap(${sdkName}Service, (service) => service.${pipe(commandToTest, lowerFirst)}(args));

    const ${sdkName}ClientInstanceLayer = Layer.succeed(
      ${sdkName}ClientInstance,
      new ${sdkName}Client({ region: "eu-central-1" }),
    );
    const Custom${sdkName}ServiceLayer = Base${sdkName}ServiceLayer.pipe(
      Layer.provide(${sdkName}ClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(Custom${sdkName}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("extended", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = Effect.flatMap(${sdkName}Service, (service) => service.${pipe(commandToTest, lowerFirst)}(args));

    const ${sdkName}ClientInstanceLayer = Layer.effect(
      ${sdkName}ClientInstance,
      Effect.map(
        ${sdkName}ClientInstanceConfig,
        (config) => new ${sdkName}Client({ ...config, region: "eu-central-1" }),
      ),
    );
    const Custom${sdkName}ServiceLayer = Base${sdkName}ServiceLayer.pipe(
      Layer.provide(${sdkName}ClientInstanceLayer),
      Layer.provide(Default${sdkName}ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(Custom${sdkName}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("fail", async () => {
    clientMock.reset().on(${commandToTest}Command).rejects(new Error("test"));

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = Effect.flatMap(${sdkName}Service, (service) => service.${pipe(commandToTest, lowerFirst)}(args));

    const result = await pipe(
      program,
      Effect.provide(Default${sdkName}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });
});
`,
  );
}
