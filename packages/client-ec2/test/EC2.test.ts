import { AcceptAddressTransferCommand, type AcceptAddressTransferCommandInput, EC2Client } from "@aws-sdk/client-ec2";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-ec2/dist-cjs/runtimeConfig";
import { EC2, SdkError } from "@effect-aws/client-ec2";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(EC2Client);

describe("EC2ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(AcceptAddressTransferCommand).resolves({});

    const args = {} as unknown as AcceptAddressTransferCommandInput;

    const program = EC2.acceptAddressTransfer(args);

    const result = await pipe(
      program,
      Effect.provide(EC2.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(
      AcceptAddressTransferCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      AcceptAddressTransferCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(AcceptAddressTransferCommand).resolves({});

    const args = {} as unknown as AcceptAddressTransferCommandInput;

    const program = EC2.acceptAddressTransfer(args);

    const result = await pipe(
      program,
      Effect.provide(EC2.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(
      AcceptAddressTransferCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      AcceptAddressTransferCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(AcceptAddressTransferCommand).resolves({});

    const args = {} as unknown as AcceptAddressTransferCommandInput;

    const program = EC2.acceptAddressTransfer(args);

    const result = await pipe(
      program,
      Effect.provide(
        EC2.baseLayer(() => new EC2Client({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(
      AcceptAddressTransferCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      AcceptAddressTransferCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(AcceptAddressTransferCommand).resolves({});

    const args = {} as unknown as AcceptAddressTransferCommandInput;

    const program = EC2.acceptAddressTransfer(args);

    const result = await pipe(
      program,
      Effect.provide(
        EC2.baseLayer(
          (config) => new EC2Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(
      AcceptAddressTransferCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      AcceptAddressTransferCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock
      .reset()
      .on(AcceptAddressTransferCommand)
      .rejects(new Error("test"));

    const args = {} as unknown as AcceptAddressTransferCommandInput;

    const program = EC2.acceptAddressTransfer(args);

    const result = await pipe(
      program,
      Effect.provide(EC2.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(
      AcceptAddressTransferCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      AcceptAddressTransferCommand,
      args,
    );
  });
});
