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
      errors: { target: string }[];
    }
  | {
      type: "service";
      operations: { target: string }[];
      traits: {
        "aws.api#service": {
          sdkId: string;
        };
      };
    }
  | { type: "structure" };

interface Manifest {
  shapes: Record<string, Shape>;
}

main().catch(console.error);

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

      const manifest = (await (
        await fetch(
          `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${serviceName}.json`,
        )
      ).json()) as Manifest;

      const serviceShape = pipe(
        manifest.shapes,
        Record.values,
        Array.findFirst(
          (shape): shape is Extract<Shape, { type: "service" }> =>
            shape.type === "service",
        ),
        Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
      );

      const operationTargets = pipe(
        serviceShape.operations,
        Array.map(({ target }) => target),
      );

      const operationNames = pipe(
        operationTargets,
        Array.map(getNameFromTarget),
      );

      const { commandToTest } = await enquirer.prompt({
        type: "autocomplete",
        name: "commandToTest",
        message: `Which command do you want to test in ${packageName} ?`,
        multiple: false,
        choices: operationNames,
      });

      const { inputToTest } = await enquirer.prompt({
        type: "input",
        name: "inputToTest",
        message: `Which input do you want to test of ${commandToTest} ? (optional)`,
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

const getNameFromTarget = flow(
  String.split("#"),
  Array.get(1),
  Option.getOrThrow,
);

const lowerFirst = flow(Array.modify(0, String.toLowerCase), Array.join(""));

const upperFirst = flow(Array.modify(0, String.toUpperCase), Array.join(""));

async function generateClient([
  packageName,
  commandToTest,
  inputToTest,
]: readonly [string, string, string]) {
  const serviceName = pipe(packageName, String.replace(/^client-/, ""));

  const manifest = (await (
    await fetch(
      `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${serviceName}.json`,
    )
  ).json()) as Manifest;

  const serviceShape = pipe(
    manifest.shapes,
    Record.values,
    Array.findFirst(
      (shape): shape is Extract<Shape, { type: "service" }> =>
        shape.type === "service",
    ),
    Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
  );

  const { sdkId } = serviceShape.traits["aws.api#service"];
  const sdkName = upperFirst(sdkId);

  const awsClient = await import(
    `../packages/client-${serviceName}/node_modules/@aws-sdk/client-${serviceName}/dist-cjs/index.js`
  );

  const serviceException = `${sdkName}ServiceException`;

  const exportedErrors = pipe(
    awsClient,
    Record.filter(
      (value) =>
        typeof value === "function" &&
        value.prototype instanceof awsClient[serviceException],
    ),
    Record.keys,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/Errors.ts`,
    `import type { ${exportedErrors.map((e) => (e.endsWith("Error") ? `${e} as ${String.replace(/Error$/, "")(e)}Exception` : e)).join(", ")} } from "@aws-sdk/client-${serviceName}";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

${pipe(
  exportedErrors,
  Array.map(
    (taggedError) =>
      `export type ${pipe(taggedError, String.replace(/(Exception|Error)$/, ""))}Error = TaggedException<${taggedError.endsWith("Error") ? `${String.replace(/Error$/, "")(taggedError)}Exception` : taggedError}>;`,
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
  const operationTargets = pipe(
    serviceShape.operations,
    Array.map(({ target }) => target),
  );
  const operationShapes = pipe(
    manifest.shapes,
    Record.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> =>
        shape.type === "operation",
    ),
    Struct.pick(...operationTargets),
    Record.filter(Predicate.isNotUndefined),
    Record.mapKeys(getNameFromTarget),
    Record.toEntries,
  ) as [
    string,
    {
      type: "operation";
      errors: { target: string }[];
    },
  ][];

  const operationNames = pipe(operationTargets, Array.map(getNameFromTarget));

  const importedErrors = pipe(
    operationShapes,
    Array.map(Tuple.getSecond),
    Array.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> =>
        shape.type === "operation",
    ),
    Array.flatMap(({ errors }) => errors ?? []),
    Array.map(flow(({ target }) => target, getNameFromTarget)),
    Array.dedupe,
    Array.sort(String.Order),
    Array.intersection(exportedErrors),
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}Service.ts`,
    `/**
 * @since 1.0.0
 */
import {
  ${sdkName}ServiceException,
  ${pipe(
    operationNames,
    Array.map(
      (name) => `${name}Command,
  type ${name}CommandInput,
  type ${name}CommandOutput,`,
    ),
    Array.join("\n  "),
  )}
} from "@aws-sdk/client-${serviceName}";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  ${sdkName}ClientInstance,
  ${sdkName}ClientInstanceLayer,
} from "./${sdkName}ClientInstance";
import { Default${sdkName}ClientConfigLayer } from "./${sdkName}ClientInstanceConfig";
import {
  ${pipe(
    importedErrors.map(String.replace(/(Exception|Error)$/, "")),
    Array.map((error) => `${error}Error`),
    Array.join(","),
  )},
  SdkError,
  TaggedException,
} from "./Errors";

const commands = {
  ${pipe(
    operationNames,
    Array.map((name) => `${name}Command`),
  )}
};

/**
 * @since 1.0.0
 * @category models
 */
export interface ${sdkName}Service {
  readonly _: unique symbol;

${pipe(
  operationShapes,
  Array.map(([operationName, operationShape]) => {
    const errors = pipe(
      operationShape.errors || [],
      Array.map(flow(Struct.get("target"), getNameFromTarget)),
      Array.intersection(importedErrors),
      Array.map(String.replace(/(Exception|Error)$/, "")),
      Array.map((error) => `${error}Error`),
    );
    return `  /**
   * @see {@link ${operationName}Command}
   */
  ${pipe(operationName, lowerFirst)}(
    args: ${operationName}CommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ${operationName}CommandOutput,
    ${pipe(["SdkError", ...errors], Array.join(" | "))}
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
          if (e instanceof ${sdkName}ServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<${sdkName}ServiceException>
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
