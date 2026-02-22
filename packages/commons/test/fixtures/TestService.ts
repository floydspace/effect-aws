import { type HttpHandlerOptions, Service } from "@effect-aws/commons";
import { Command } from "@smithy/smithy-client";
import { Effect, Layer, ServiceMap } from "effect";
import * as Instance from "./TestClientInstance.js";
import * as TestServiceConfig from "./TestServiceConfig.js";

const commands = {
  TestCommand: Command.classBuilder().build(),
  // this could happen when effect-aws is used with updated aws-sdk version which has previously existed commands removed
  UndefinedCommand: undefined,
} as unknown as Record<string, Service.CommandCtor<any>>;

export interface TestService$ {
  readonly _: unique symbol;

  test(args: any, options?: HttpHandlerOptions): Effect.Effect<any>;
}

export const makeTestService = Effect.gen(function*() {
  const client = yield* Instance.TestClientInstance;

  return yield* Service.fromClientAndCommands<TestService$>(
    client,
    commands,
    { resolveClientConfig: TestServiceConfig.toTestClientConfig },
  );
});

export class TestService extends ServiceMap.Service<
  TestService,
  TestService$
>()("@effect-aws/commons/test/TestService") {
  static readonly layer = (config: TestService.Config) =>
    Layer.effect(this, makeTestService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(TestServiceConfig.setTestServiceConfig(config)),
    );
}

export declare namespace TestService {
  export interface Config extends Omit<TestServiceConfig.TestClientConfig, "logger"> {
    readonly logger?: true;
  }
}
