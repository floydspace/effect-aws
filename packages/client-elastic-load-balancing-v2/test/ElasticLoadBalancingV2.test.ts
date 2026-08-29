import {
  DescribeLoadBalancersCommand,
  type DescribeLoadBalancersCommandInput,
  ElasticLoadBalancingV2Client,
  ElasticLoadBalancingV2ServiceException,
} from "@aws-sdk/client-elastic-load-balancing-v2";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-elastic-load-balancing-v2/dist-es/runtimeConfig";
import { ElasticLoadBalancingV2Service as ElasticLoadBalancingV2 } from "@effect-aws/client-elastic-load-balancing-v2/ElasticLoadBalancingV2Service";
import * as ElasticLoadBalancingV2ServiceConfig from "@effect-aws/client-elastic-load-balancing-v2/ElasticLoadBalancingV2ServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ElasticLoadBalancingV2Client);

describe("ElasticLoadBalancingV2ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeLoadBalancersCommand).resolves({});

    const args = {} as unknown as DescribeLoadBalancersCommandInput;

    const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

    const result = await pipe(
      program,
      Effect.provide(ElasticLoadBalancingV2.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLoadBalancersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeLoadBalancersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeLoadBalancersCommand).resolves({});

    const args = {} as unknown as DescribeLoadBalancersCommandInput;

    const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

    const result = await pipe(
      program,
      Effect.provide(ElasticLoadBalancingV2.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLoadBalancersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeLoadBalancersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeLoadBalancersCommand).resolves({});

    const args = {} as unknown as DescribeLoadBalancersCommandInput;

    const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

    const result = await pipe(
      program,
      Effect.provide(
        ElasticLoadBalancingV2.baseLayer(() => new ElasticLoadBalancingV2Client({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLoadBalancersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeLoadBalancersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeLoadBalancersCommand).resolves({});

    const args = {} as unknown as DescribeLoadBalancersCommandInput;

    const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

    const result = await pipe(
      program,
      Effect.provide(
        ElasticLoadBalancingV2.baseLayer(
          (config) => new ElasticLoadBalancingV2Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      ElasticLoadBalancingV2ServiceConfig.withElasticLoadBalancingV2ServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLoadBalancersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeLoadBalancersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeLoadBalancersCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeLoadBalancersCommandInput;

    const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

    const result = await pipe(
      program,
      Effect.provide(ElasticLoadBalancingV2.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLoadBalancersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeLoadBalancersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeLoadBalancersCommand)
      .rejects(
        new ElasticLoadBalancingV2ServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeLoadBalancersCommandInput;

    const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ElasticLoadBalancingV2.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLoadBalancersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeLoadBalancersCommand, args);
  });
});
