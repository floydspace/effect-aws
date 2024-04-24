import {
  type ListGroupsCommandInput,
  ListGroupsCommand,
  IAMClient,
} from "@aws-sdk/client-iam";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseIAMServiceLayer,
  DefaultIAMClientConfigLayer,
  DefaultIAMServiceLayer,
  IAMClientInstance,
  IAMClientInstanceConfig,
  IAMService,
  IAMServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(IAMClient);

describe("IAMClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListGroupsCommand).resolves({});

    const args: ListGroupsCommandInput = { PathPrefix: "admin/" };

    const program = Effect.flatMap(IAMService, (service) =>
      service.listGroups(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListGroupsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListGroupsCommand).resolves({});

    const args: ListGroupsCommandInput = { PathPrefix: "admin/" };

    const program = Effect.flatMap(IAMService, (service) =>
      service.listGroups(args),
    );

    const IAMClientConfigLayer = Layer.succeed(IAMClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomIAMServiceLayer = IAMServiceLayer.pipe(
      Layer.provide(IAMClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListGroupsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListGroupsCommand).resolves({});

    const args: ListGroupsCommandInput = { PathPrefix: "admin/" };

    const program = Effect.flatMap(IAMService, (service) =>
      service.listGroups(args),
    );

    const IAMClientInstanceLayer = Layer.succeed(
      IAMClientInstance,
      new IAMClient({ region: "eu-central-1" }),
    );
    const CustomIAMServiceLayer = BaseIAMServiceLayer.pipe(
      Layer.provide(IAMClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListGroupsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListGroupsCommand).resolves({});

    const args: ListGroupsCommandInput = { PathPrefix: "admin/" };

    const program = Effect.flatMap(IAMService, (service) =>
      service.listGroups(args),
    );

    const IAMClientInstanceLayer = Layer.effect(
      IAMClientInstance,
      Effect.map(
        IAMClientInstanceConfig,
        (config) => new IAMClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomIAMServiceLayer = BaseIAMServiceLayer.pipe(
      Layer.provide(IAMClientInstanceLayer),
      Layer.provide(DefaultIAMClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListGroupsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListGroupsCommand).rejects(new Error("test"));

    const args: ListGroupsCommandInput = { PathPrefix: "admin/" };

    const program = Effect.flatMap(IAMService, (service) =>
      service.listGroups(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultIAMServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListGroupsCommand, args);
  });
});
