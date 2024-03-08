import { mkdir, readdir, writeFile } from "node:fs/promises";
import { flow, pipe } from "effect/Function";
import * as Option from "effect/Option";
import { isNotUndefined } from "effect/Predicate";
import * as ReadonlyArray from "effect/ReadonlyArray";
import * as ReadonlyRecord from "effect/ReadonlyRecord";
import * as String from "effect/String";
import * as Struct from "effect/Struct";
import * as Tuple from "effect/Tuple";
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
  const { services } = await new Enquirer<{ services: string[] }>().prompt({
    type: "autocomplete",
    name: "services",
    message: "Which clients do you want to generate ?",
    multiple: true,
    choices: (await readdir("./packages")).filter((s) =>
      s.startsWith("client-"),
    ),
  });

  return Promise.all(services.map(generateClient));
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

async function generateClient(packageName: string) {
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
  const serviceException = `${await sdkId}Service`;
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
    `./packages/client-${serviceName}/src/${sdkId}ClientInstance.ts`,
    `/**
 * @since 1.0.0
 */
import { ${sdkId}Client } from "@aws-sdk/client-${serviceName}";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  Default${sdkId}ClientConfigLayer,
  ${sdkId}ClientInstanceConfig,
} from "./${sdkId}ClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class ${sdkId}ClientInstance extends Context.Tag(
  "@effect-aws/client-${serviceName}/${sdkId}ClientInstance",
)<${sdkId}ClientInstance, ${sdkId}Client>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkId}ClientInstance = Effect.map(
  ${sdkId}ClientInstanceConfig,
  (config) => new ${sdkId}Client(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ${sdkId}ClientInstanceLayer = Layer.effect(
  ${sdkId}ClientInstance,
  make${sdkId}ClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkId}ClientInstanceLayer = ${sdkId}ClientInstanceLayer.pipe(
  Layer.provide(Default${sdkId}ClientConfigLayer),
);
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkId}ClientInstanceConfig.ts`,
    `/**
 * @since 1.0.0
 */
import type { ${sdkId}ClientConfig } from "@aws-sdk/client-${serviceName}";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export class ${sdkId}ClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-${serviceName}/${sdkId}ClientInstanceConfig",
)<${sdkId}ClientInstanceConfig, ${sdkId}ClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefault${sdkId}ClientInstanceConfig: Effect.Effect<${sdkId}ClientConfig> =
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
export const Default${sdkId}ClientConfigLayer = Layer.effect(
  ${sdkId}ClientInstanceConfig,
  makeDefault${sdkId}ClientInstanceConfig,
);
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/index.ts`,
    `export * from "./Errors";
export * from "./${sdkId}ClientInstance";
export * from "./${sdkId}ClientInstanceConfig";
export * from "./${sdkId}Service";
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
    ReadonlyRecord.filter(isNotUndefined),
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
    `./packages/client-${serviceName}/src/${sdkId}Service.ts`,
    `/**
 * @since 1.0.0
 */
import {
  ${sdkId}ServiceException,
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
  ${sdkId}ClientInstance,
  ${sdkId}ClientInstanceLayer,
} from "./${sdkId}ClientInstance";
import { Default${sdkId}ClientConfigLayer } from "./${sdkId}ClientInstanceConfig";
import {
  ${pipe(
    importedErrors,
    ReadonlyArray.map((error) => `${error}Error`),
    ReadonlyArray.prepend(`${sdkId}ServiceError`),
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
export type ${sdkId}Service = {
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
    ${pipe(["SdkError", `${sdkId}ServiceError`, ...errors], ReadonlyArray.join(" | "))}
  >`;
  }),
  ReadonlyArray.join("\n\n"),
)}
};

/**
 * @since 1.0.0
 * @category tags
 */
export const ${sdkId}Service = Context.GenericTag<${sdkId}Service>(
  "@effect-aws/client-${serviceName}/${sdkId}Service",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkId}Service = Effect.gen(function* (_) {
  const client = yield* _(${sdkId}ClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof ${sdkId}ServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<${sdkId}ServiceException>
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
  }, {}) as ${sdkId}Service;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const Base${sdkId}ServiceLayer = Layer.effect(
  ${sdkId}Service,
  make${sdkId}Service,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ${sdkId}ServiceLayer = Base${sdkId}ServiceLayer.pipe(
  Layer.provide(${sdkId}ClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkId}ServiceLayer = ${sdkId}ServiceLayer.pipe(
  Layer.provide(Default${sdkId}ClientConfigLayer),
);
`,
  );

  const firstCommand = pipe(
    operationNames,
    ReadonlyArray.head,
    Option.getOrThrow,
  );

  await mkdir(`./packages/client-${serviceName}/test`, { recursive: true });
  await writeFile(
    `./packages/client-${serviceName}/test/${sdkId}.test.ts`,
    `import {
  type ${firstCommand}CommandInput,
  ${firstCommand}Command,
  ${sdkId}Client,
} from "@aws-sdk/client-${serviceName}";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  Base${sdkId}ServiceLayer,
  Default${sdkId}ClientConfigLayer,
  Default${sdkId}ServiceLayer,
  ${sdkId}ClientInstance,
  ${sdkId}ClientInstanceConfig,
  ${sdkId}Service,
  ${sdkId}ServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(${sdkId}Client);

describe("${sdkId}ClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(${firstCommand}Command).resolves({});

    const args = {} as unknown as ${firstCommand}CommandInput;

    const program = Effect.flatMap(${sdkId}Service, (service) => service.${pipe(firstCommand, lowerFirst)}(args));

    const result = await pipe(
      program,
      Effect.provide(Default${sdkId}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${firstCommand}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${firstCommand}Command, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(${firstCommand}Command).resolves({});

    const args = {} as unknown as ${firstCommand}CommandInput;

    const program = Effect.flatMap(${sdkId}Service, (service) => service.${pipe(firstCommand, lowerFirst)}(args));

    const ${sdkId}ClientConfigLayer = Layer.succeed(${sdkId}ClientInstanceConfig, {
      region: "eu-central-1",
    });
    const Custom${sdkId}ServiceLayer = ${sdkId}ServiceLayer.pipe(
      Layer.provide(${sdkId}ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(Custom${sdkId}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${firstCommand}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${firstCommand}Command, args);
  });

  it("base", async () => {
    clientMock.reset().on(${firstCommand}Command).resolves({});

    const args = {} as unknown as ${firstCommand}CommandInput;

    const program = Effect.flatMap(${sdkId}Service, (service) => service.${pipe(firstCommand, lowerFirst)}(args));

    const ${sdkId}ClientInstanceLayer = Layer.succeed(
      ${sdkId}ClientInstance,
      new ${sdkId}Client({ region: "eu-central-1" }),
    );
    const Custom${sdkId}ServiceLayer = Base${sdkId}ServiceLayer.pipe(
      Layer.provide(${sdkId}ClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(Custom${sdkId}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${firstCommand}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${firstCommand}Command, args);
  });

  it("extended", async () => {
    clientMock.reset().on(${firstCommand}Command).resolves({});

    const args = {} as unknown as ${firstCommand}CommandInput;

    const program = Effect.flatMap(${sdkId}Service, (service) => service.${pipe(firstCommand, lowerFirst)}(args));

    const ${sdkId}ClientInstanceLayer = Layer.effect(
      ${sdkId}ClientInstance,
      Effect.map(
        ${sdkId}ClientInstanceConfig,
        (config) => new ${sdkId}Client({ ...config, region: "eu-central-1" }),
      ),
    );
    const Custom${sdkId}ServiceLayer = Base${sdkId}ServiceLayer.pipe(
      Layer.provide(${sdkId}ClientInstanceLayer),
      Layer.provide(Default${sdkId}ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(Custom${sdkId}ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(${firstCommand}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${firstCommand}Command, args);
  });

  it("fail", async () => {
    clientMock.reset().on(${firstCommand}Command).rejects(new Error("test"));

    const args = {} as unknown as ${firstCommand}CommandInput;

    const program = Effect.flatMap(${sdkId}Service, (service) => service.${pipe(firstCommand, lowerFirst)}(args));

    const result = await pipe(
      program,
      Effect.provide(Default${sdkId}ServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(${firstCommand}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${firstCommand}Command, args);
  });
});
`,
  );
}
