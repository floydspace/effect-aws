import {
  DescribeOrganizationCommand,
  type DescribeOrganizationCommandInput,
  OrganizationsClient,
  OrganizationsServiceException,
} from "@aws-sdk/client-organizations";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-organizations/dist-cjs/runtimeConfig";
import { Organizations, OrganizationsServiceConfig } from "@effect-aws/client-organizations";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(OrganizationsClient);

describe("OrganizationsClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeOrganizationCommand).resolves({});

    const args = {} as unknown as DescribeOrganizationCommandInput;

    const program = Organizations.describeOrganization(args);

    const result = await pipe(
      program,
      Effect.provide(Organizations.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeOrganizationCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeOrganizationCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeOrganizationCommand).resolves({});

    const args = {} as unknown as DescribeOrganizationCommandInput;

    const program = Organizations.describeOrganization(args);

    const result = await pipe(
      program,
      Effect.provide(Organizations.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeOrganizationCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeOrganizationCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeOrganizationCommand).resolves({});

    const args = {} as unknown as DescribeOrganizationCommandInput;

    const program = Organizations.describeOrganization(args);

    const result = await pipe(
      program,
      Effect.provide(
        Organizations.baseLayer(() => new OrganizationsClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeOrganizationCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeOrganizationCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeOrganizationCommand).resolves({});

    const args = {} as unknown as DescribeOrganizationCommandInput;

    const program = Organizations.describeOrganization(args);

    const result = await pipe(
      program,
      Effect.provide(
        Organizations.baseLayer(
          (config) => new OrganizationsClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      OrganizationsServiceConfig.withOrganizationsServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeOrganizationCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeOrganizationCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeOrganizationCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeOrganizationCommandInput;

    const program = Organizations.describeOrganization(args);

    const result = await pipe(
      program,
      Effect.provide(Organizations.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeOrganizationCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeOrganizationCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeOrganizationCommand)
      .rejects(
        new OrganizationsServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeOrganizationCommandInput;

    const program = Organizations.describeOrganization(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Organizations.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeOrganizationCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeOrganizationCommand, args);
  });
});
