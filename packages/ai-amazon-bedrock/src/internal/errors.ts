import * as AiError from "effect/ai/AiError";
import * as Predicate from "effect/Predicate";
import type { AmazonBedrockErrorMetadata } from "../AmazonBedrockError.js";

export const MODULE = "AmazonBedrockLanguageModel";

export type Operation = "Converse" | "ConverseStream";

export interface ErrorContext {
  readonly method: string;
  readonly modelId: string;
  readonly operation: Operation;
}

const RATE_LIMIT = new Set(["ThrottlingException"]);
const QUOTA_EXHAUSTED = new Set(["ServiceQuotaExceededException"]);
const ACCESS_DENIED = new Set(["AccessDeniedException"]);
const INVALID_REQUEST = new Set(["ValidationException", "ResourceNotFoundException"]);
const INTERNAL_PROVIDER = new Set([
  "InternalServerException",
  "ServiceUnavailableException",
  "ModelErrorException",
  "ModelNotReadyException",
  "ModelTimeoutException",
  "ModelStreamErrorException",
]);
const AUTHENTICATION = new Set([
  "CredentialsProviderError",
  "ExpiredTokenException",
  "IncompleteSignatureException",
  "InvalidSignatureException",
  "UnrecognizedClientException",
]);
const NETWORK_ERROR_CODES = new Set([
  "ECONNABORTED",
  "ECONNREFUSED",
  "ECONNRESET",
  "EHOSTUNREACH",
  "ENETDOWN",
  "ENETUNREACH",
  "ENOTFOUND",
  "EAI_AGAIN",
  "EPIPE",
  "ETIMEDOUT",
]);

const getString = (u: unknown, key: string): string | undefined =>
  Predicate.hasProperty(u, key) && typeof u[key] === "string" ? u[key] : undefined;

export const getErrorName = (error: unknown): string | undefined =>
  getString(error, "_tag") ?? getString(error, "name");

export const getMessage = (error: unknown): string | undefined => getString(error, "message");

const getResponseMetadata = (error: unknown): { readonly requestId?: string; readonly httpStatusCode?: number } => {
  if (!Predicate.hasProperty(error, "$metadata") || !Predicate.isObject(error.$metadata)) {
    return {};
  }
  const metadata = error.$metadata as Record<string, unknown>;
  return {
    ...(typeof metadata.requestId === "string" ? { requestId: metadata.requestId } : undefined),
    ...(typeof metadata.httpStatusCode === "number" ? { httpStatusCode: metadata.httpStatusCode } : undefined),
  };
};

const makeMetadata = (error: unknown): { readonly bedrock: AmazonBedrockErrorMetadata } => {
  const { httpStatusCode, requestId } = getResponseMetadata(error);
  return {
    bedrock: {
      errorType: getErrorName(error) ?? null,
      requestId: requestId ?? null,
      httpStatusCode: httpStatusCode ?? null,
    },
  };
};

// The generated client wraps unmodeled failures in `SdkError`, which replaces
// the original error name, so credential and network failures are recognised
// by the fields that survive the wrap.
const isCredentialFailure = (error: unknown, message: string | undefined): boolean =>
  Predicate.hasProperty(error, "tryNextLink") ||
  (message !== undefined && /credential|security token|signature/i.test(message));

const getAuthenticationKind = (
  name: string | undefined,
  message: string | undefined,
): AiError.AuthenticationError["kind"] => {
  if (name === "ExpiredTokenException" || (message !== undefined && /expired/i.test(message))) {
    return "ExpiredKey";
  }
  if (name === "CredentialsProviderError" || (message !== undefined && /could not load credentials/i.test(message))) {
    return "MissingKey";
  }
  return "InvalidKey";
};

const isNetworkFailure = (error: unknown, message: string | undefined): boolean => {
  const code = getString(error, "code");
  return (code !== undefined && NETWORK_ERROR_CODES.has(code)) ||
    (message !== undefined && /socket hang up|network/i.test(message));
};

const makeNetworkError = (context: ErrorContext, message: string | undefined) =>
  new AiError.NetworkError({
    reason: "TransportError",
    request: {
      method: "POST",
      url: `/model/${encodeURIComponent(context.modelId)}/${
        context.operation === "Converse" ? "converse" : "converse-stream"
      }`,
      urlParams: [],
      headers: {},
    },
    ...(message !== undefined ? { description: message } : undefined),
  });

const toReason = (error: unknown, context: ErrorContext): AiError.AiErrorReason => {
  const name = getErrorName(error);
  const message = getMessage(error);
  const metadata = makeMetadata(error);
  const description = message !== undefined ? { description: message } : undefined;

  if (name !== undefined) {
    if (RATE_LIMIT.has(name)) {
      return new AiError.RateLimitError({ metadata });
    }
    if (QUOTA_EXHAUSTED.has(name)) {
      return new AiError.QuotaExhaustedError({ metadata });
    }
    if (ACCESS_DENIED.has(name)) {
      return new AiError.AuthenticationError({ kind: "InsufficientPermissions", ...description, metadata });
    }
    if (INVALID_REQUEST.has(name)) {
      return new AiError.InvalidRequestError({ ...description, metadata });
    }
    if (INTERNAL_PROVIDER.has(name)) {
      return new AiError.InternalProviderError({ description: message ?? name, metadata });
    }
    if (AUTHENTICATION.has(name)) {
      return new AiError.AuthenticationError({ kind: getAuthenticationKind(name, message), ...description, metadata });
    }
    if (name === "TimeoutError") {
      return makeNetworkError(context, message);
    }
  }

  if (isCredentialFailure(error, message)) {
    return new AiError.AuthenticationError({ kind: getAuthenticationKind(name, message), ...description, metadata });
  }

  if (isNetworkFailure(error, message)) {
    return makeNetworkError(context, message);
  }

  const { httpStatusCode } = getResponseMetadata(error);
  if (httpStatusCode !== undefined) {
    return AiError.reasonFromHttpStatus({ status: httpStatusCode, metadata, ...description });
  }

  return new AiError.UnknownError({ ...description, metadata });
};

/**
 * Maps errors from `@effect-aws/client-bedrock-runtime` (and raw AWS SDK
 * errors thrown while reading a response stream) to `AiError`.
 */
export const toAiError = (error: unknown, context: ErrorContext): AiError.AiError => {
  if (AiError.isAiError(error)) {
    return error;
  }
  return AiError.make({ module: MODULE, method: context.method, reason: toReason(error, context) });
};

export const invalidUserInput = (method: string, description: string): AiError.AiError =>
  AiError.make({ module: MODULE, method, reason: new AiError.InvalidUserInputError({ description }) });

export const unsupportedSchema = (method: string, error: unknown): AiError.AiError =>
  AiError.make({
    module: MODULE,
    method,
    reason: new AiError.UnsupportedSchemaError({
      description: error instanceof Error ? error.message : String(error),
    }),
  });
