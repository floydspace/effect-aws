import type {
  ConverseCommandOutput,
  ConverseStreamCommandInput,
  InferenceConfiguration,
} from "@aws-sdk/client-bedrock-runtime";
import type * as Response from "effect/ai/Response";
import * as Telemetry from "effect/ai/Telemetry";
import * as Predicate from "effect/Predicate";
import type { Span } from "effect/Tracer";
import { getResponseModelId, makeUsage } from "./response.js";

// Cache counts are included in `gen_ai.usage.input_tokens`.
const annotateCacheUsage = (span: Span, usage: typeof Response.Usage.Encoded): void => {
  if (Predicate.isNotNullish(usage.inputTokens.cacheRead)) {
    span.attribute("gen_ai.usage.cache_read.input_tokens", usage.inputTokens.cacheRead);
  }
  if (Predicate.isNotNullish(usage.inputTokens.cacheWrite)) {
    span.attribute("gen_ai.usage.cache_write.input_tokens", usage.inputTokens.cacheWrite);
  }
};

export const annotateRequest = (span: Span, request: ConverseStreamCommandInput): void => {
  const inference: InferenceConfiguration = request.inferenceConfig ?? {};
  Telemetry.addGenAIAnnotations(span, {
    provider: { name: "aws.bedrock" },
    operation: { name: "chat" },
    request: {
      model: request.modelId,
      temperature: inference.temperature,
      topP: inference.topP,
      maxTokens: inference.maxTokens,
      stopSequences: inference.stopSequences,
    },
  });
};

export const annotateResponse = (span: Span, modelId: string, output: ConverseCommandOutput): void => {
  const usage = makeUsage(output.usage);
  Telemetry.addGenAIAnnotations(span, {
    response: {
      id: output.$metadata?.requestId,
      model: getResponseModelId(modelId, output.trace),
      finishReasons: Predicate.isNotUndefined(output.stopReason) ? [output.stopReason] : undefined,
    },
    usage: {
      inputTokens: usage.inputTokens.total,
      outputTokens: usage.outputTokens.total,
    },
  });
  annotateCacheUsage(span, usage);
};

export const annotateStreamResponse = (span: Span, part: Response.StreamPartEncoded): void => {
  if (part.type === "response-metadata") {
    Telemetry.addGenAIAnnotations(span, { response: { id: part.id, model: part.modelId } });
  } else if (part.type === "finish") {
    const stopReason = part.metadata?.bedrock?.stopReason;
    Telemetry.addGenAIAnnotations(span, {
      response: { finishReasons: [Predicate.isNotNullish(stopReason) ? stopReason : part.reason] },
      usage: {
        inputTokens: part.usage.inputTokens.total,
        outputTokens: part.usage.outputTokens.total,
      },
    });
    annotateCacheUsage(span, part.usage);
  }
};
