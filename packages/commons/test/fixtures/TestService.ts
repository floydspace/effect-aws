import { type HttpHandlerOptions, Service } from "@effect-aws/commons";
import { Command } from "@smithy/smithy-client";
import { Effect, Layer } from "effect";
import * as Instance from "./TestClientInstance.js";
import * as TestServiceConfig from "./TestServiceConfig.js";

const commands = {
  TestCommand: Command.classBuilder().build(),
};

export interface TestService$ {
  readonly _: unique symbol;

  test(args: any, options?: HttpHandlerOptions): Effect.Effect<any>;
}

export const makeTestService = Effect.gen(function*() {
  const client = yield* Instance.TestClientInstance;

  return Service.fromClientAndCommands<TestService$>(
    client,
    commands,
    { resolveClientConfig: TestServiceConfig.toTestClientConfig },
  );
});

export class TestService extends Effect.Tag("@effect-aws/commons/test/TestService")<
  TestService,
  TestService$
>() {
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
