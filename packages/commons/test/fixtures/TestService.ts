import { type HttpHandlerOptions, Service } from "@effect-aws/commons";
import { createPaginator } from "@smithy/core";
import { Command } from "@smithy/smithy-client";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as Instance from "./TestClientInstance.js";
import * as TestServiceConfig from "./TestServiceConfig.js";

const commands = {
  TestCommand: Command.classBuilder().build(),
  // this could happen when effect-aws is used with updated aws-sdk version which has previously existed commands removed
  UndefinedCommand: undefined,
} as unknown as Record<string, Service.CommandCtor<any>>;

const paginators: Record<string, Service.PaginatorCtor<any>> = {
  paginateTestCommand: createPaginator(Instance.TestClient, commands.TestCommand, "inputToken", "outputToken"),
};

export interface TestService$ {
  test(args: any, options?: HttpHandlerOptions): Effect.Effect<any>;
}

export const makeTestService = Effect.gen(function*() {
  const client = yield* Instance.TestClientInstance;

  return yield* Service.fromClientAndCommands<TestService$>(
    client,
    commands,
    { resolveClientConfig: TestServiceConfig.toTestClientConfig },
    paginators,
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
