/**
 * How to use:
 * 1. Run `pnpm -- codegen-clients`
 * 2. Run `pnpm install`
 * 3. Run `pnpm -- nx run-many --target check --all --parallel`
 */
import { mkdir, writeFile } from "node:fs/promises";

import {
  Effect,
  Option,
  ReadonlyArray,
  ReadonlyRecord,
  String,
  Struct,
} from "effect";
import { flow, pipe } from "effect/Function";

type Shape =
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

interface Lerna {
  version: string;
}

interface Tags {
  object: {
    sha: string;
  };
}

interface Tree {
  tree: {
    path: string;
    type: "tree" | "blob";
  }[];
}

main().catch(console.error);

function getOperations(smithyModel: SmithyModel): [string, OperationType][] {
  return pipe(
    smithyModel.shapes,
    ReadonlyRecord.toEntries,
    ReadonlyArray.filter(([_, shape]) => shape.type === "operation"),
  ) as unknown as [string, OperationType][];
}

function getOperationNames(smithyModel: SmithyModel) {
  return pipe(
    getOperations(smithyModel),
    ReadonlyArray.map(([name, _]) => name),
    ReadonlyArray.map(getLocalNameFromNamespace),
  );
}

async function main() {
  const version = "v3.535.0";
  const currentVersion = (
    (await (
      await fetch(
        `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/lerna.json`,
      )
    ).json()) as Lerna
  ).version;

  const sha = (
    (await (
      await fetch(
        `https://api.github.com/repos/aws/aws-sdk-js-v3/git/ref/tags/${version}`,
      )
    ).json()) as Tags
  ).object.sha;

  const tree = (
    (await (
      await fetch(
        `https://api.github.com/repos/aws/aws-sdk-js-v3/git/trees/${sha}?recursive=1`,
      )
    ).json()) as Tree
  ).tree;

  const servicesRegexp = /^clients\/(client-[^\/]*?)$/;
  const services = pipe(
    tree,
    ReadonlyArray.filter((t) => servicesRegexp.test(t.path)),
    ReadonlyArray.map((t) => t.path.match(servicesRegexp)![1]),
  );

  const each = services.map((packageName) =>
    Effect.promise(async () => {
      const serviceName = pipe(packageName, String.replace(/^client-/, ""));

      console.log(
        `Smithy model: https://raw.githubusercontent.com/aws/aws-sdk-js-v3/${version}/codegen/sdk-codegen/aws-models/${serviceName}.json`,
      );

      const smithyModel = (await (
        await fetch(
          `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/${version}/codegen/sdk-codegen/aws-models/${serviceName}.json`,
        )
      ).json()) as SmithyModel;

      return [serviceName, smithyModel] as const;
    }),
  );

  const results = await Effect.runPromise(Effect.all(each, { concurrency: 1 }));
  return Promise.all(results.map((item) => generateClient(version, item)));
}

const getLocalNameFromNamespace = flow(
  String.split("#"),
  ReadonlyArray.get(1),
  Option.getOrThrow,
);

const lowerFirst = flow(
  ReadonlyArray.modify(0, String.toLowerCase),
  ReadonlyArray.join(""),
);

const pascalCase = (s: string) => pipe(
  s.split(" "),
  ReadonlyArray.flatMap(flow(ReadonlyArray.modify(0, String.toUpperCase))),
  ReadonlyArray.join(""),
);

const SMITHY_API_UNIT = 'smithy.api#Unit';

async function generateClient(
  version: string,
  [packageName, smithyModel]: readonly [string, SmithyModel],
) {

  console.log(`Generating ${packageName}...`);

  const serviceName = pipe(packageName, String.replace(/^client-/, ""));

  const serviceShape = pipe(
    smithyModel.shapes,
    ReadonlyRecord.values,
    ReadonlyArray.findFirst(
      (shape): shape is Extract<Shape, { type: "service" }> =>
        shape.type === "service",
    ),
    Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
  );

  const { cloudFormationName, sdkId } = serviceShape.traits["aws.api#service"];
  if (cloudFormationName === undefined && sdkId === undefined) {
    throw new TypeError("cloudFormationName is not found");
  }
  const sdkName = pascalCase(sdkId);

  const exportedErrors = pipe(
    smithyModel.shapes,
    ReadonlyRecord.toEntries,
    ReadonlyArray.filter(
      ([_, shape]) =>
        shape.type === "structure" &&
        shape.traits?.["smithy.api#error"] !== undefined,
    ),
    ReadonlyArray.map(([name, _]) => name),
    ReadonlyArray.map(getLocalNameFromNamespace)
  );

  const operations = getOperations(smithyModel);
  const importedErrors = pipe(
    operations,
    ReadonlyArray.flatMap(([_, { errors }]) => errors ?? []),
    ReadonlyArray.map(error => getLocalNameFromNamespace(error.target)),
    ReadonlyArray.map(String.replace(/(Exception|Error)$/, "")),
    ReadonlyArray.map((error) => `${error}Error`),
    ReadonlyArray.dedupe
  );

  const commandToTest = getLocalNameFromNamespace(operations[0][0]);
  const inputToTest = "";

  await mkdir(`./generated/packages/client-${serviceName}/src/`, { recursive: true });
  await writeFile(
    `./generated/packages/client-${serviceName}/src/Errors.ts`,
    `import type { 
  ${exportedErrors.map((e) => (e.endsWith("Error") ? `${e} as ${String.replace(/Error$/, "")(e)}Exception` : e)).join(",\n  ")}
} from "@aws-sdk/client-${serviceName}";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

${pipe(
  exportedErrors,
  ReadonlyArray.map(
    (taggedError) =>
      `export type ${pipe(taggedError, String.replace(/(Exception|Error)$/, ""))}Error = TaggedException<${taggedError.endsWith("Error") ? `${String.replace(/Error$/, "")(taggedError)}Exception` : taggedError}>;`,
  ),
  ReadonlyArray.join("\n"),
)}

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
`,
  );

  await writeFile(
    `./generated/packages/client-${serviceName}/src/${sdkName}ClientInstance.ts`,
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
    `./generated/packages/client-${serviceName}/src/${sdkName}ClientInstanceConfig.ts`,
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
    `./generated/packages/client-${serviceName}/src/index.ts`,
    `export * from "./Errors";
export * from "./${sdkName}ClientInstance";
export * from "./${sdkName}ClientInstanceConfig";
export * from "./${sdkName}Service";
`,
  );

  await writeFile(
    `./generated/packages/client-${serviceName}/src/${sdkName}Service.ts`,
    `/**
 * @since 1.0.0
 */
import {
  ${sdkName}ServiceException,
  ${pipe(
    operations,
    ReadonlyArray.map(
      ([name]) => `${getLocalNameFromNamespace(name)}Command,`
    ),
    ReadonlyArray.join("\n  "),
  )}
  ${pipe(
    operations,
    ReadonlyArray.flatMap(([_, { input, output }]) => [input.target, output.target]),
    ReadonlyArray.filter(target => target !== SMITHY_API_UNIT),
    ReadonlyArray.map(target => `type ${getLocalNameFromNamespace(target)},`),
    ReadonlyArray.dedupe,
    ReadonlyArray.join("\n  "),
  )}
} from "@aws-sdk/client-${serviceName}";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import {
  ${sdkName}ClientInstance,
  ${sdkName}ClientInstanceLayer,
} from "./${sdkName}ClientInstance";
import { Default${sdkName}ClientConfigLayer } from "./${sdkName}ClientInstanceConfig";
import {
  ${pipe(
    [...importedErrors, 'SdkError', 'TaggedException'],
    ReadonlyArray.join(",\n  "),
  )}
} from "./Errors";

const commands = {
  ${pipe(
    getOperationNames(smithyModel),
    ReadonlyArray.map((name) => `${name}Command`),
    ReadonlyArray.join(",\n  "),
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
  ReadonlyArray.map(([operationName, operationShape]) => {
    const errors = pipe(
      operationShape.errors || [],
      ReadonlyArray.map(flow(Struct.get("target"), getLocalNameFromNamespace)),
      ReadonlyArray.map(String.replace(/(Exception|Error)$/, "")),
      ReadonlyArray.map((error) => `${error}Error`),
      ReadonlyArray.intersection(importedErrors),
    );
    return `  /**
   * @see {@link ${getLocalNameFromNamespace(operationName)}Command}
   */
  ${pipe(getLocalNameFromNamespace(operationName), lowerFirst)}(
    args: ${operationShape.input.target === SMITHY_API_UNIT ? '{}' : getLocalNameFromNamespace(operationShape.input.target)},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ${operationShape.output.target === SMITHY_API_UNIT ? 'void' : getLocalNameFromNamespace(operationShape.output.target)},
    ${pipe(["| SdkError", ...errors], ReadonlyArray.join("\n    | "))}
  >`;
  }),
  ReadonlyArray.join("\n\n"),
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

  await mkdir(`./generated/packages/client-${serviceName}/test`, {
    recursive: true,
  });
  await writeFile(
    `./generated/packages/client-${serviceName}/test/${sdkName}.test.ts`,
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

  await writeFile(
    `./generated/packages/client-${serviceName}/package.json`,
    `{
  "name": "@effect-aws/client-${serviceName}",
  "version": "${version}",
  "type": "module",
  "sideEffects": false,
  "scripts": {
    "check": "tsc -noEmit"
  },
  "devDependencies": {
    "aws-sdk-client-mock": "^3.0.0",
    "typescript": "^5.0.0"
  },
  "peerDependencies": {
    "@aws-sdk/types": "^3.0.0",
    "@aws-sdk/client-${serviceName}": "${version}",
    "effect": ">=2.3.1 <2.5.0"
  }
}`,
  );

  await writeFile(
    `./generated/packages/client-${serviceName}/tsconfig.json`,
    `{
    "compilerOptions": {
        "moduleResolution": "Node",
        "target": "ES2020",
        "module": "ES2020",
    },
    "include": ["./src/**/*.ts"],
}`,
  );
}


//{ "name": "@effect-aws/client-s3",