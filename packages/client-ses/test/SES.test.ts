import { SendEmailCommand, type SendEmailCommandInput, SESClient, SESServiceException } from "@aws-sdk/client-ses";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-ses/dist-cjs/runtimeConfig";
import { SdkError, SES } from "@effect-aws/client-ses";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SESClient);

describe("SESClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(SendEmailCommand).resolves({});

    const args = {} as unknown as SendEmailCommandInput;

    const program = SES.sendEmail(args);

    const result = await pipe(
      program,
      Effect.provide(SES.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(SendEmailCommand).resolves({});

    const args = {} as unknown as SendEmailCommandInput;

    const program = SES.sendEmail(args);

    const result = await pipe(
      program,
      Effect.provide(SES.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(SendEmailCommand).resolves({});

    const args = {} as unknown as SendEmailCommandInput;

    const program = SES.sendEmail(args);

    const result = await pipe(
      program,
      Effect.provide(
        SES.baseLayer(() => new SESClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(SendEmailCommand).resolves({});

    const args = {} as unknown as SendEmailCommandInput;

    const program = SES.sendEmail(args);

    const result = await pipe(
      program,
      Effect.provide(
        SES.baseLayer(
          (config) => new SESClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(SendEmailCommand).rejects(new Error("test"));

    const args = {} as unknown as SendEmailCommandInput;

    const program = SES.sendEmail(args);

    const result = await pipe(
      program,
      Effect.provide(SES.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(SendEmailCommand)
      .rejects(
        new SESServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as SendEmailCommandInput;

    const program = SES.sendEmail(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SES.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });
});
