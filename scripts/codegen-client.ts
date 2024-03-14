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
  ReadonlyArray,
  ReadonlyRecord,
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
        ReadonlyRecord.values,
        ReadonlyArray.findFirst(
          (shape): shape is Extract<Shape, { type: "service" }> =>
            shape.type === "service",
        ),
        Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
      );

      const operationTargets = pipe(
        serviceShape.operations,
        ReadonlyArray.map(({ target }) => target),
      );

      const operationNames = pipe(
        operationTargets,
        ReadonlyArray.map(getNameFromTarget),
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
  ReadonlyArray.get(1),
  Option.getOrThrow,
);

const lowerFirst = flow(
  ReadonlyArray.modify(0, String.toLowerCase),
  ReadonlyArray.join(""),
);

const upperFirst = flow(
  ReadonlyArray.modify(0, String.toUpperCase),
  ReadonlyArray.join(""),
);

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
    ReadonlyRecord.values,
    ReadonlyArray.findFirst(
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

  const exceptions = pipe(
    awsClient,
    ReadonlyRecord.keys,
    ReadonlyArray.filter((s) => s.endsWith("Exception")),
  );

  const exportedErrors = pipe(
    awsClient,
    ReadonlyRecord.keys,
    ReadonlyArray.filter(String.endsWith("Exception")),
    ReadonlyArray.map(String.replace(/Exception$/, "")),
  );
  const serviceException = `${sdkId}Service`;
  const taggedErrors = pipe(
    exportedErrors,
    ReadonlyArray.filter((s) => s !== serviceException),
  );

  await writeFile(
    `./packages/client-${serviceName}/src/Errors.ts`,
    `import type { ${exceptions.join(", ")} } from "@aws-sdk/client-${serviceName}";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

${pipe(
  taggedErrors,
  ReadonlyArray.map(
    (taggedError) =>
      `export type ${taggedError}Error = TaggedException<${taggedError}Exception>;`,
  ),
  ReadonlyArray.join("\n"),
)}

export type ${serviceException}Error = TaggedException<
  ${serviceException}Exception & { name: "${serviceException}Error" }
>;
export const ${serviceException}Error = Data.tagged<${serviceException}Error>("${serviceException}Error");
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
    ReadonlyArray.map(({ target }) => target),
  );
  const operationShapes = pipe(
    manifest.shapes,
    ReadonlyRecord.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> =>
        shape.type === "operation",
    ),
    Struct.pick(...operationTargets),
    ReadonlyRecord.filter(Predicate.isNotUndefined),
    ReadonlyRecord.mapKeys(getNameFromTarget),
    ReadonlyRecord.toEntries,
  );

  const operationNames = pipe(
    operationTargets,
    ReadonlyArray.map(getNameFromTarget),
  );

  const importedErrors = pipe(
    operationShapes,
    ReadonlyArray.map(Tuple.getSecond),
    ReadonlyArray.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> =>
        shape.type === "operation",
    ),
    ReadonlyArray.flatMap(({ errors }) => errors ?? []),
    ReadonlyArray.map(
      flow(
        ({ target }) => target,
        getNameFromTarget,
        String.replace(/Exception$/, ""),
      ),
    ),
    ReadonlyArray.dedupe,
    ReadonlyArray.sort(String.Order),
    ReadonlyArray.intersection(exportedErrors),
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
    ReadonlyArray.map(
      (name) => `${name}Command,
  type ${name}CommandInput,
  type ${name}CommandOutput,`,
    ),
    ReadonlyArray.join("\n  "),
  )}
} from "@aws-sdk/client-${serviceName}";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Effect, Layer, ReadonlyRecord, Data } from "effect";
import {
  ${sdkName}ClientInstance,
  ${sdkName}ClientInstanceLayer,
} from "./${sdkName}ClientInstance";
import { Default${sdkName}ClientConfigLayer } from "./${sdkName}ClientInstanceConfig";
import {
  ${pipe(
    importedErrors,
    ReadonlyArray.map((error) => `${error}Error`),
    ReadonlyArray.prepend(`${sdkName}ServiceError`),
    ReadonlyArray.join(","),
  )},
  SdkError,
  TaggedException,
} from "./Errors";

const commands = {
  ${pipe(
    operationNames,
    ReadonlyArray.map((name) => `${name}Command`),
  )}
};

/**
 * @since 1.0.0
 * @category models
 */
export type ${sdkName}Service = {
  readonly _: unique symbol;

${pipe(
  operationShapes,
  ReadonlyArray.map(([operationName, operationShape]) => {
    const errors = pipe(
      operationShape.errors || [],
      ReadonlyArray.map(
        flow(
          Struct.get("target"),
          getNameFromTarget,
          String.replace(/Exception$/, ""),
        ),
      ),
      ReadonlyArray.intersection(importedErrors),
      ReadonlyArray.map((error) => `${error}Error`),
    );
    return `  /**
   * @see {@link ${operationName}Command}
   */
  readonly ${pipe(operationName, lowerFirst)}: (
    args: ${operationName}CommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ${operationName}CommandOutput,
    ${pipe(["SdkError", `${sdkName}ServiceError`, ...errors], ReadonlyArray.join(" | "))}
  >`;
  }),
  ReadonlyArray.join("\n\n"),
)}
};

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

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
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
