import {
  SendEmailCommand,
  type SendEmailCommandInput,
  SESv2Client,
  SESv2ServiceException,
} from "@aws-sdk/client-sesv2";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-sesv2/dist-es/runtimeConfig";
import { SESv2Service as SESv2 } from "@effect-aws/client-sesv2/SESv2Service";
import * as SESv2ServiceConfig from "@effect-aws/client-sesv2/SESv2ServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SESv2Client);

describe("SESv2ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(SendEmailCommand).resolves({});

    const args = {} as unknown as SendEmailCommandInput;

    const program = SESv2.use((svc) => svc.sendEmail(args));

    const result = await pipe(
      program,
      Effect.provide(SESv2.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(SendEmailCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendEmailCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(SendEmailCommand).resolves({});

    const args = {} as unknown as SendEmailCommandInput;

    const program = SESv2.use((svc) => svc.sendEmail(args));

    const result = await pipe(
      program,
      Effect.provide(SESv2.layer({ region: "eu-central-1", logger: true })),
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

    const program = SESv2.use((svc) => svc.sendEmail(args));

    const result = await pipe(
      program,
      Effect.provide(
        SESv2.baseLayer(() => new SESv2Client({ region: "eu-central-1" })),
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

    const program = SESv2.use((svc) => svc.sendEmail(args));

    const result = await pipe(
      program,
      Effect.provide(
        SESv2.baseLayer(
          (config) => new SESv2Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      SESv2ServiceConfig.withSESv2ServiceConfig({ logger: true }),
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

    const program = SESv2.use((svc) => svc.sendEmail(args));

    const result = await pipe(
      program,
      Effect.provide(SESv2.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        new SdkError({
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
        new SESv2ServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as SendEmailCommandInput;

    const program = SESv2.use((svc) => svc.sendEmail(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SESv2.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toContainEqual(
      Exit.fail(
        new SdkError({
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
