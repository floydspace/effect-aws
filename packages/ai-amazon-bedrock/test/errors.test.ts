import {
  AccessDeniedException,
  BedrockRuntimeClient,
  BedrockRuntimeServiceException,
  ConverseCommand,
  InternalServerException,
  ModelErrorException,
  ModelNotReadyException,
  ModelStreamErrorException,
  ModelTimeoutException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-bedrock-runtime";
import type { AmazonBedrockError } from "@effect-aws/ai-amazon-bedrock";
import { toAiError } from "@effect-aws/ai-amazon-bedrock/internal/errors";
import { mockClient } from "aws-sdk-client-mock";
import type * as AiError from "effect/ai/AiError";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Effect from "effect/Effect";
import { afterEach, describe, expect, it } from "vitest";
import { MODEL_ID, provideModel } from "./utils.js";

const clientMock = mockClient(BedrockRuntimeClient);

afterEach(() => {
  clientMock.reset();
});

const $metadata = { httpStatusCode: 400, requestId: "req-err" };

const unmodeled = (name: string, httpStatusCode: number, message: string) =>
  new BedrockRuntimeServiceException({ name, $fault: "client", $metadata: { httpStatusCode }, message });

const withProps = (message: string, props: Record<string, unknown>) => Object.assign(new Error(message), props);

const generateTextError = (error: unknown) => {
  clientMock.on(ConverseCommand).rejects(error as Error);
  return LanguageModel.generateText({ prompt: "Hello" }).pipe(provideModel(), Effect.flip, Effect.runPromise);
};

describe("error mapping", () => {
  it.each<{
    readonly name: string;
    readonly error: () => unknown;
    readonly reason: AiError.AiErrorReason["_tag"];
    readonly isRetryable: boolean;
  }>([
    {
      name: "ThrottlingException",
      error: () => new ThrottlingException({ message: "Slow down", $metadata }),
      reason: "RateLimitError",
      isRetryable: true,
    },
    {
      name: "ServiceQuotaExceededException",
      error: () => new ServiceQuotaExceededException({ message: "Quota", $metadata }),
      reason: "QuotaExhaustedError",
      isRetryable: false,
    },
    {
      name: "AccessDeniedException",
      error: () => new AccessDeniedException({ message: "No access", $metadata }),
      reason: "AuthenticationError",
      isRetryable: false,
    },
    {
      name: "ValidationException",
      error: () => new ValidationException({ message: "Bad", $metadata }),
      reason: "InvalidRequestError",
      isRetryable: false,
    },
    {
      name: "ResourceNotFoundException",
      error: () => new ResourceNotFoundException({ message: "No model", $metadata }),
      reason: "InvalidRequestError",
      isRetryable: false,
    },
    {
      name: "InternalServerException",
      error: () => new InternalServerException({ message: "Oops", $metadata }),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "ServiceUnavailableException",
      error: () => new ServiceUnavailableException({ message: "Down", $metadata }),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "ModelErrorException",
      error: () => new ModelErrorException({ message: "Model", $metadata }),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "ModelNotReadyException",
      error: () => new ModelNotReadyException({ message: "Not ready", $metadata }),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "ModelTimeoutException",
      error: () => new ModelTimeoutException({ message: "Timeout", $metadata }),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "ModelStreamErrorException",
      error: () => new ModelStreamErrorException({ message: "Stream", $metadata }),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "TimeoutError",
      error: () => withProps("Request timed out", { name: "TimeoutError" }),
      reason: "NetworkError",
      isRetryable: true,
    },
    {
      name: "a network failure inside SdkError",
      error: () => withProps("connect ECONNREFUSED 127.0.0.1:443", { code: "ECONNREFUSED" }),
      reason: "NetworkError",
      isRetryable: true,
    },
    {
      name: "missing credentials inside SdkError",
      error: () =>
        withProps("Could not load credentials from any providers", {
          name: "CredentialsProviderError",
          tryNextLink: false,
        }),
      reason: "AuthenticationError",
      isRetryable: false,
    },
    {
      name: "invalid credentials inside SdkError",
      error: () =>
        unmodeled("UnrecognizedClientException", 403, "The security token included in the request is invalid."),
      reason: "AuthenticationError",
      isRetryable: false,
    },
    {
      name: "an unmodeled server error inside SdkError",
      error: () => unmodeled("SomethingWentWrong", 503, "Unavailable"),
      reason: "InternalProviderError",
      isRetryable: true,
    },
    {
      name: "anything else",
      error: () => new Error("boom"),
      reason: "UnknownError",
      isRetryable: false,
    },
  ])("maps $name to $reason", async ({ error: makeError, isRetryable, reason }) => {
    const error = await generateTextError(makeError());

    expect(error._tag).toBe("AiError");
    expect(error.module).toBe("AmazonBedrockLanguageModel");
    expect(error.method).toBe("generateText");
    expect(error.reason._tag).toBe(reason);
    expect(error.isRetryable).toBe(isRetryable);
  });

  it("keeps the Bedrock error type and request id as typed metadata", async () => {
    const error = await generateTextError(new ThrottlingException({ message: "Slow down", $metadata }));

    const metadata: AmazonBedrockError.AmazonBedrockErrorMetadata | null | undefined =
      (error.reason as AiError.RateLimitError).metadata.bedrock;
    expect(metadata).toEqual({ errorType: "ThrottlingException", requestId: "req-err", httpStatusCode: 400 });
  });

  it("classifies the kind of authentication failure", async () => {
    const missing = await generateTextError(
      withProps("Could not load credentials from any providers", { tryNextLink: false }),
    );
    const invalid = await generateTextError(
      unmodeled("UnrecognizedClientException", 403, "The security token included in the request is invalid."),
    );
    const expired = await generateTextError(
      unmodeled("ExpiredTokenException", 403, "The security token included in the request is expired"),
    );
    const denied = await generateTextError(new AccessDeniedException({ message: "No access", $metadata }));

    expect([missing, invalid, expired, denied].map((error) => (error.reason as AiError.AuthenticationError).kind))
      .toEqual(["MissingKey", "InvalidKey", "ExpiredKey", "InsufficientPermissions"]);
  });

  it("describes network failures with the Converse path", async () => {
    const error = await generateTextError(withProps("socket hang up", { code: "ECONNRESET" }));

    expect(error.reason).toMatchObject({
      _tag: "NetworkError",
      reason: "TransportError",
      description: "socket hang up",
      request: { method: "POST", url: `/model/${encodeURIComponent(MODEL_ID)}/converse` },
    });
  });

  it("maps raw errors thrown while reading a stream", () => {
    const error = toAiError(withProps("socket hang up", { code: "ECONNRESET" }), {
      method: "streamText",
      modelId: MODEL_ID,
      operation: "ConverseStream",
    });

    expect(error.method).toBe("streamText");
    expect(error.reason).toMatchObject({
      _tag: "NetworkError",
      request: { url: `/model/${encodeURIComponent(MODEL_ID)}/converse-stream` },
    });
  });
});
