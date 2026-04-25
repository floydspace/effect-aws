import {
  CloudFrontClient,
  CloudFrontServiceException,
  ListCachePoliciesCommand,
  type ListCachePoliciesCommandInput,
} from "@aws-sdk/client-cloudfront";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudfront/dist-cjs/runtimeConfig";
import { CloudFrontService as CloudFront } from "@effect-aws/client-cloudfront/CloudFrontService";
import * as CloudFrontServiceConfig from "@effect-aws/client-cloudfront/CloudFrontServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudFrontClient);

describe("CloudFrontClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListCachePoliciesCommand).resolves({});

    const args = {} as unknown as ListCachePoliciesCommandInput;

    const program = CloudFront.use((svc) => svc.listCachePolicies(args));

    const result = await pipe(
      program,
      Effect.provide(CloudFront.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListCachePoliciesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCachePoliciesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListCachePoliciesCommand).resolves({});

    const args = {} as unknown as ListCachePoliciesCommandInput;

    const program = CloudFront.use((svc) => svc.listCachePolicies(args));

    const result = await pipe(
      program,
      Effect.provide(CloudFront.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCachePoliciesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCachePoliciesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListCachePoliciesCommand).resolves({});

    const args = {} as unknown as ListCachePoliciesCommandInput;

    const program = CloudFront.use((svc) => svc.listCachePolicies(args));

    const result = await pipe(
      program,
      Effect.provide(
        CloudFront.baseLayer(() => new CloudFrontClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCachePoliciesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCachePoliciesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListCachePoliciesCommand).resolves({});

    const args = {} as unknown as ListCachePoliciesCommandInput;

    const program = CloudFront.use((svc) => svc.listCachePolicies(args));

    const result = await pipe(
      program,
      Effect.provide(
        CloudFront.baseLayer(
          (config) => new CloudFrontClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CloudFrontServiceConfig.withCloudFrontServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCachePoliciesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCachePoliciesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListCachePoliciesCommand).rejects(new Error("test"));

    const args = {} as unknown as ListCachePoliciesCommandInput;

    const program = CloudFront.use((svc) => svc.listCachePolicies(args));

    const result = await pipe(
      program,
      Effect.provide(CloudFront.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCachePoliciesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCachePoliciesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListCachePoliciesCommand)
      .rejects(
        new CloudFrontServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListCachePoliciesCommandInput;

    const program = CloudFront.use((svc) => svc.listCachePolicies(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudFront.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCachePoliciesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCachePoliciesCommand, args);
  });
});
