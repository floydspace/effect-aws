import {
  type AddRoleToDBClusterCommandInput,
  AddRoleToDBClusterCommand,
  RDSClient,
} from "@aws-sdk/client-rds";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseRDSServiceLayer,
  DefaultRDSClientConfigLayer,
  DefaultRDSServiceLayer,
  RDSClientInstance,
  RDSClientInstanceConfig,
  RDSService,
  RDSServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(RDSClient);

describe("RDSClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(AddRoleToDBClusterCommand).resolves({});

    const args = {} as unknown as AddRoleToDBClusterCommandInput;

    const program = Effect.flatMap(RDSService, (service) =>
      service.addRoleToDBCluster(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultRDSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AddRoleToDBClusterCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      AddRoleToDBClusterCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(AddRoleToDBClusterCommand).resolves({});

    const args = {} as unknown as AddRoleToDBClusterCommandInput;

    const program = Effect.flatMap(RDSService, (service) =>
      service.addRoleToDBCluster(args),
    );

    const RDSClientConfigLayer = Layer.succeed(RDSClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomRDSServiceLayer = RDSServiceLayer.pipe(
      Layer.provide(RDSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomRDSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AddRoleToDBClusterCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      AddRoleToDBClusterCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(AddRoleToDBClusterCommand).resolves({});

    const args = {} as unknown as AddRoleToDBClusterCommandInput;

    const program = Effect.flatMap(RDSService, (service) =>
      service.addRoleToDBCluster(args),
    );

    const RDSClientInstanceLayer = Layer.succeed(
      RDSClientInstance,
      new RDSClient({ region: "eu-central-1" }),
    );
    const CustomRDSServiceLayer = BaseRDSServiceLayer.pipe(
      Layer.provide(RDSClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomRDSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AddRoleToDBClusterCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      AddRoleToDBClusterCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(AddRoleToDBClusterCommand).resolves({});

    const args = {} as unknown as AddRoleToDBClusterCommandInput;

    const program = Effect.flatMap(RDSService, (service) =>
      service.addRoleToDBCluster(args),
    );

    const RDSClientInstanceLayer = Layer.effect(
      RDSClientInstance,
      Effect.map(
        RDSClientInstanceConfig,
        (config) => new RDSClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomRDSServiceLayer = BaseRDSServiceLayer.pipe(
      Layer.provide(RDSClientInstanceLayer),
      Layer.provide(DefaultRDSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomRDSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AddRoleToDBClusterCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      AddRoleToDBClusterCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(AddRoleToDBClusterCommand).rejects(new Error("test"));

    const args = {} as unknown as AddRoleToDBClusterCommandInput;

    const program = Effect.flatMap(RDSService, (service) =>
      service.addRoleToDBCluster(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultRDSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(AddRoleToDBClusterCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      AddRoleToDBClusterCommand,
      args,
    );
  });
});
