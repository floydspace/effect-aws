import { exec } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";

import { Array, Option, Predicate, Record, String, Struct, Tuple } from "effect";
import { flow, pipe } from "effect/Function";

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
    errors: Array<{ target: string }>;
  }
  | {
    type: "service";
    operations: Array<{ target: string }>;
    traits: {
      "aws.api#service": {
        sdkId: string;
        cloudFormationName: string;
      };
    };
  }
  | { type: "structure" };

export interface Manifest {
  shapes: Record<string, Shape>;
}

const getNameFromTarget = flow(
  String.split("#"),
  Array.get(1),
  Option.getOrThrow,
);

const lowerFirst = flow(Array.modify(0, String.toLowerCase), Array.join(""));

const upperFirst = flow(Array.modify(0, String.toUpperCase), Array.join(""));

export async function generateClient([
  serviceName,
  originalServiceName,
  manifest,
  commandToTest,
  inputToTest,
]: readonly [string, string, Manifest, string, string]) {
  const serviceShape = pipe(
    manifest.shapes,
    Record.values,
    Array.findFirst(
      (shape): shape is Extract<Shape, { type: "service" }> => shape.type === "service",
    ),
    Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
  );

  const { sdkId } = serviceShape.traits["aws.api#service"];
  const sdkName = upperFirst(String.replaceAll(" ", "")(sdkId));

  const awsClient = await import(
    `../packages/client-${serviceName}/node_modules/@aws-sdk/client-${originalServiceName}/dist-cjs/index.js`
  );

  await rm(`./packages/client-${serviceName}/src`, { recursive: true });
  await mkdir(`./packages/client-${serviceName}/src`, { recursive: true });

  const exportedErrors = pipe(
    awsClient,
    Record.filter(
      (value) =>
        typeof value === "function" &&
        value.prototype &&
        value.prototype instanceof awsClient[`${sdkName}ServiceException`],
    ),
    Record.keys,
  );

  await generateErrorsFile(`./packages/client-${serviceName}/src/Errors.ts`, exportedErrors, originalServiceName);

  await generateClientInstanceFile(
    `./packages/client-${serviceName}/src/${sdkName}ClientInstance.ts`,
    serviceName,
    sdkName,
    originalServiceName,
  );

  await generateServiceConfigFile(
    `./packages/client-${serviceName}/src/${sdkName}ServiceConfig.ts`,
    serviceName,
    sdkName,
    originalServiceName,
  );

  await generateIndexFile(`./packages/client-${serviceName}/src/index.ts`, sdkName);

  await generateServiceFile(
    `./packages/client-${serviceName}/src/${sdkName}Service.ts`,
    serviceName,
    sdkName,
    exportedErrors,
    originalServiceName,
    manifest,
  );

  await mkdir(`./packages/client-${serviceName}/test`, { recursive: true });

  await generateTestFile(
    `./packages/client-${serviceName}/test/${sdkName}.test.ts`,
    serviceName,
    sdkName,
    commandToTest,
    originalServiceName,
    inputToTest,
  );

  await generateReadmeFile(`./packages/client-${serviceName}/README.md`, serviceName, sdkName, commandToTest);

  exec(`pnpm --filter @effect-aws/client-${serviceName} run eslint --fix`);
}

async function generateErrorsFile(filePath: string, exportedErrors: Array<string>, originalServiceName: string) {
  await writeFile(
    filePath,
    `import type { ${
      exportedErrors.map((e) => (e.endsWith("Error") ? `${e} as ${String.replace(/Error$/, "")(e)}Exception` : e)).join(
        ", ",
      )
    } } from "@aws-sdk/client-${originalServiceName}";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [${exportedErrors.map((e) => `"${e}"`).join(", ")}] as const;

${
      pipe(
        exportedErrors,
        Array.map(
          (taggedError) =>
            `export type ${
              pipe(taggedError, String.replace(/(Failure|Exception|Error|ErrorException)$/, ""))
            }Error = TaggedException<${
              taggedError.endsWith("Error") ? `${String.replace(/Error$/, "")(taggedError)}Exception` : taggedError
            }>;`,
        ),
        Array.join("\n"),
      )
    }

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
`,
  );
}

async function generateClientInstanceFile(
  filePath: string,
  serviceName: string,
  sdkName: string,
  originalServiceName: string,
) {
  await writeFile(
    filePath,
    `/**
 * @since 1.0.0
 */
import { ${sdkName}Client } from "@aws-sdk/client-${originalServiceName}";
import { Context, Effect, Layer } from "effect";
import * as ${sdkName}ServiceConfig from "./${sdkName}ServiceConfig.js";

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
export const make = Effect.flatMap(
	${sdkName}ServiceConfig.to${sdkName}ClientConfig,
	(config) =>
		Effect.acquireRelease(
			Effect.sync(() => new ${sdkName}Client(config)),
			(client) => Effect.sync(() => client.destroy()),
		),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(${sdkName}ClientInstance, make);
`,
  );
}

async function generateServiceConfigFile(
  filePath: string,
  serviceName: string,
  sdkName: string,
  originalServiceName: string,
) {
  await writeFile(
    filePath,
    `/**
 * @since 1.0.0
 */
import type { ${sdkName}ClientConfig } from "@aws-sdk/client-${originalServiceName}";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { ${sdkName}Service } from "./${sdkName}Service.js";

/**
 * @since 1.0.0
 * @category ${serviceName} service config
 */
const current${sdkName}ServiceConfig = globalValue(
  "@effect-aws/client-${serviceName}/current${sdkName}ServiceConfig",
  () => FiberRef.unsafeMake<${sdkName}Service.Config>({}),
);

/**
 * @since 1.0.0
 * @category ${serviceName} service config
 */
export const with${sdkName}ServiceConfig: {
  (config: ${sdkName}Service.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ${sdkName}Service.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ${sdkName}Service.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, current${sdkName}ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ${serviceName} service config
 */
export const set${sdkName}ServiceConfig = (config: ${sdkName}Service.Config) =>
  Layer.locallyScoped(current${sdkName}ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const to${sdkName}ClientConfig: Effect.Effect<${sdkName}ClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(current${sdkName}ServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
`,
  );
}

async function generateIndexFile(filePath: string, sdkName: string) {
  await writeFile(
    filePath,
    `/**
 * @since 1.0.0
 */
import { ${sdkName}Service } from "./${sdkName}Service.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as ${sdkName}ClientInstance from "./${sdkName}ClientInstance.js";

/**
 * @since 1.0.0
 */
export * as ${sdkName}ServiceConfig from "./${sdkName}ServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./${sdkName}Service.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias ${sdkName}Service
 */
export declare namespace ${sdkName} {
  /**
   * @since 1.0.0
   * @alias ${sdkName}Service.Config
   */
  export type Config = ${sdkName}Service.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias ${sdkName}Service
 */
export const ${sdkName} = ${sdkName}Service;
`,
  );
}

async function generateServiceFile(
  filePath: string,
  serviceName: string,
  sdkName: string,
  exportedErrors: Array<string>,
  originalServiceName: string,
  manifest: Manifest,
) {
  const operationTargets = pipe(
    manifest.shapes,
    Record.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
    ),
    Record.keys,
  );
  const operationShapes = pipe(
    manifest.shapes,
    Record.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
    ),
    Struct.pick(...operationTargets),
    Record.filter(Predicate.isNotUndefined),
    Record.mapKeys(getNameFromTarget),
    Record.toEntries,
  ) as Array<[
    string,
    {
      type: "operation";
      errors: Array<{ target: string }>;
    },
  ]>;

  const operationNames = pipe(operationTargets, Array.map(getNameFromTarget));

  const importedErrors = pipe(
    operationShapes,
    Array.map(Tuple.getSecond),
    Array.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
    ),
    Array.flatMap(({ errors }) => errors ?? []),
    Array.map(flow(({ target }) => target, getNameFromTarget)),
    Array.dedupe,
    Array.sort(String.Order),
    Array.intersection(exportedErrors),
  );

  await writeFile(
    filePath,
    `/**
 * @since 1.0.0
 */
import {
  type ${sdkName}Client,
  type ${sdkName}ClientConfig,
  ${
      pipe(
        operationNames,
        Array.map(
          (name) =>
            `${name}Command,
  type ${name}CommandInput,
  type ${name}CommandOutput,`,
        ),
        Array.join("\n  "),
      )
    }
} from "@aws-sdk/client-${originalServiceName}";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import * as Instance from "./${sdkName}ClientInstance.js";
import * as ${sdkName}ServiceConfig from "./${sdkName}ServiceConfig.js";
import type {
  ${
      pipe(
        importedErrors.map(
          String.replace(/(Failure|Exception|Error|ErrorException)$/, ""),
        ),
        Array.map((error) => `${error}Error`),
        Array.join(","),
      )
    },
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  ${
      pipe(
        operationNames,
        Array.map((name) => `${name}Command`),
      )
    }
};

interface ${sdkName}Service$ {
  readonly _: unique symbol;

${
      pipe(
        operationShapes,
        Array.map(([operationName, operationShape]) => {
          const errors = pipe(
            operationShape.errors || [],
            Array.map(flow(Struct.get("target"), getNameFromTarget)),
            Array.intersection(importedErrors),
            Array.map(
              String.replace(/(Failure|Exception|Error|ErrorException)$/, ""),
            ),
            Array.map((error) => `${error}Error`),
          );
          return `  /**
   * @see {@link ${operationName}Command}
   */
  ${pipe(operationName, lowerFirst)}(
    args: ${operationName}CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ${operationName}CommandOutput,
    ${pipe(["SdkError", ...errors], Array.join(" | "))}
  >`;
        }),
        Array.join("\n\n"),
      )
    }
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkName}Service = Effect.gen(function* () {
  const client = yield* Instance.${sdkName}ClientInstance;

  return Service.fromClientAndCommands<${sdkName}Service$>(client, commands, AllServiceErrors);
});

/**
 * @since 1.0.0
 * @category models
 */
export class ${sdkName}Service extends Effect.Tag("@effect-aws/client-${serviceName}/${sdkName}Service")<
  ${sdkName}Service,
  ${sdkName}Service$
>() {
  static readonly defaultLayer = Layer.effect(this, make${sdkName}Service).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: ${sdkName}Service.Config) =>
    Layer.effect(this, make${sdkName}Service).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(${sdkName}ServiceConfig.set${sdkName}ServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ${sdkName}ClientConfig) => ${sdkName}Client,
  ) =>
    Layer.effect(this, make${sdkName}Service).pipe(
      Layer.provide(
        Layer.effect(
          Instance.${sdkName}ClientInstance,
          Effect.map(${sdkName}ServiceConfig.to${sdkName}ClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ${sdkName}Service {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<${sdkName}ClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
`,
  );
}

async function generateTestFile(
  filePath: string,
  serviceName: string,
  sdkName: string,
  commandToTest: string,
  originalServiceName: string,
  inputToTest: string,
) {
  await writeFile(
    filePath,
    `import {
  type ${commandToTest}CommandInput,
  ${commandToTest}Command,
  ${sdkName}Client,
  ${sdkName}ServiceException,
} from "@aws-sdk/client-${originalServiceName}";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-${originalServiceName}/dist-cjs/runtimeConfig";
import { ${sdkName}, ${sdkName}ServiceConfig, SdkError } from "@effect-aws/client-${serviceName}";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(${sdkName}Client);

describe("${sdkName}ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
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

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
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

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(
        ${sdkName}.baseLayer(() => new ${sdkName}Client({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
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

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(
        ${sdkName}.baseLayer(
          (config) => new ${sdkName}Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      ${sdkName}ServiceConfig.with${sdkName}ServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
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

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.defaultLayer),
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

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(${commandToTest}Command)
      .rejects(
        new ${sdkName}ServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.defaultLayer),
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

async function generateReadmeFile(filePath: string, serviceName: string, sdkName: string, commandToTest: string) {
  await writeFile(
    filePath,
    `# @effect-aws/client-${serviceName}

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-${serviceName}?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-${serviceName})
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-${serviceName})](https://www.npmjs.com/package/@effect-aws/client-${serviceName})

## Installation

\`\`\`bash
npm install --save @effect-aws/client-${serviceName}
\`\`\`

## Usage

With default ${sdkName}Client instance:

\`\`\`typescript
import { ${sdkName} } from "@effect-aws/client-${serviceName}";

const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

const result = pipe(
  program,
  Effect.provide(${sdkName}.defaultLayer),
  Effect.runPromise,
);
\`\`\`

With custom ${sdkName}Client instance:

\`\`\`typescript
import { ${sdkName} } from "@effect-aws/client-${serviceName}";

const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

const result = await pipe(
  program,
  Effect.provide(
    ${sdkName}.baseLayer(() => new ${sdkName}Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
\`\`\`

With custom ${sdkName}Client configuration:

\`\`\`typescript
import { ${sdkName} } from "@effect-aws/client-${serviceName}";

const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

const result = await pipe(
  program,
  Effect.provide(${sdkName}.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
\`\`\`

or use \`${sdkName}.baseLayer((default) => new ${sdkName}Client({ ...default, region: "eu-central-1" }))\`
`,
  );
}
