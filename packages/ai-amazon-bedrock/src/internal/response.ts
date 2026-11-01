import type { ConverseCommandOutput, ConverseStreamMetadataEvent, TokenUsage } from "@aws-sdk/client-bedrock-runtime";
import type * as AiError from "effect/ai/AiError";
import type * as LanguageModel from "effect/ai/LanguageModel";
import type * as Response from "effect/ai/Response";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as Base64 from "effect/encoding/Base64";
import * as Predicate from "effect/Predicate";
import type * as Schema from "effect/Schema";
import { resolveToolCallParams, type ToolCodecs } from "./tools.js";

const finishReasons: Record<string, Response.FinishReason> = {
  content_filtered: "content-filter",
  end_turn: "stop",
  guardrail_intervened: "content-filter",
  max_tokens: "length",
  model_context_window_exceeded: "length",
  stop_sequence: "stop",
  tool_use: "tool-calls",
};

/**
 * Maps a Converse `stopReason` to an Effect AI finish reason.
 *
 * When the structured output tool carried the response, `tool_use` means the
 * model finished normally, so it maps to `stop`.
 */
export const resolveFinishReason = (
  stopReason: string | undefined,
  isStructuredOutputTool = false,
): Response.FinishReason => {
  if (Predicate.isUndefined(stopReason)) {
    return "unknown";
  }
  if (stopReason.startsWith("malformed_")) {
    return "error";
  }
  const reason = Object.hasOwn(finishReasons, stopReason) ? finishReasons[stopReason] : "unknown";
  return isStructuredOutputTool && reason === "tool-calls" ? "stop" : reason;
};

/**
 * Bedrock reports `inputTokens` without cached tokens, so the total input is
 * the sum of uncached, cache read and cache write tokens.
 */
export const makeUsage = (usage: TokenUsage | undefined): typeof Response.Usage.Encoded => {
  if (Predicate.isUndefined(usage)) {
    return {
      inputTokens: { uncached: undefined, total: undefined, cacheRead: undefined, cacheWrite: undefined },
      outputTokens: { total: undefined, text: undefined, reasoning: undefined },
    };
  }
  const uncached = usage.inputTokens ?? 0;
  const cacheRead = usage.cacheReadInputTokens ?? 0;
  const cacheWrite = usage.cacheWriteInputTokens ?? 0;
  return {
    inputTokens: { uncached, total: uncached + cacheRead + cacheWrite, cacheRead, cacheWrite },
    outputTokens: { total: usage.outputTokens, text: undefined, reasoning: undefined },
  };
};

/**
 * Drops `undefined` values and other non-JSON data so the value can be stored
 * as provider metadata.
 */
export const toJson = (value: unknown): Schema.Json =>
  Predicate.isUndefined(value) ? null : JSON.parse(JSON.stringify(value));

export const makeFinishMetadata = (params: {
  readonly stopReason: string | undefined;
  readonly additionalModelResponseFields: unknown;
  readonly metadata: Pick<ConverseStreamMetadataEvent, "metrics" | "serviceTier" | "trace" | "usage"> | undefined;
}): Response.FinishPartMetadata => ({
  bedrock: {
    stopReason: params.stopReason ?? null,
    latencyMs: params.metadata?.metrics?.latencyMs ?? null,
    serviceTier: params.metadata?.serviceTier?.type ?? null,
    trace: toJson(params.metadata?.trace),
    usage: toJson(params.metadata?.usage),
    additionalModelResponseFields: toJson(params.additionalModelResponseFields),
  },
});

export const getResponseModelId = (
  modelId: string,
  trace: ConverseCommandOutput["trace"] | undefined,
): string => trace?.promptRouter?.invokedModelId ?? modelId;

export const encodeRedactedContent = (bytes: Uint8Array): string => Base64.encode(bytes);

/**
 * Converts a Converse response into Effect AI response parts.
 */
export const makeResponse = Effect.fnUntraced(function*({
  modelId,
  options,
  output,
  structuredOutputToolName,
  toolCodecs,
}: {
  readonly modelId: string;
  readonly options: LanguageModel.ProviderOptions;
  readonly output: ConverseCommandOutput;
  readonly structuredOutputToolName: string | undefined;
  readonly toolCodecs: ToolCodecs;
}): Effect.fn.Return<Array<Response.PartEncoded>, AiError.AiError> {
  const parts: Array<Response.PartEncoded> = [];
  const content = output.output?.message?.content ?? [];
  const isStructuredOutputTool = Predicate.isNotUndefined(structuredOutputToolName) &&
    content.some((block) => block.toolUse?.name === structuredOutputToolName);

  const requestId = output.$metadata?.requestId;
  parts.push({
    type: "response-metadata",
    ...(Predicate.isNotUndefined(requestId) ? { id: requestId } : undefined),
    modelId: getResponseModelId(modelId, output.trace),
    timestamp: DateTime.formatIso(yield* DateTime.now),
  });

  for (const block of content) {
    if (Predicate.isNotUndefined(block.text)) {
      // Text that accompanies the structured output tool call must not be
      // concatenated with the JSON payload when the object is decoded.
      if (!isStructuredOutputTool) {
        parts.push({ type: "text", text: block.text });
      }
    } else if (Predicate.isNotUndefined(block.reasoningContent)) {
      const { reasoningText, redactedContent } = block.reasoningContent;
      if (Predicate.isNotUndefined(reasoningText)) {
        parts.push({
          type: "reasoning",
          text: reasoningText.text ?? "",
          ...(Predicate.isNotUndefined(reasoningText.signature)
            ? { metadata: { bedrock: { signature: reasoningText.signature } } }
            : undefined),
        });
      } else if (Predicate.isNotUndefined(redactedContent)) {
        parts.push({
          type: "reasoning",
          text: "",
          metadata: { bedrock: { redactedContent: encodeRedactedContent(redactedContent) } },
        });
      }
    } else if (Predicate.isNotUndefined(block.toolUse)) {
      const { input, name, toolUseId } = block.toolUse;
      if (isStructuredOutputTool && name === structuredOutputToolName) {
        parts.push({ type: "text", text: JSON.stringify(input ?? {}) });
      } else {
        const toolName = name ?? "";
        const params = yield* resolveToolCallParams({
          method: "generateText",
          options,
          params: input ?? {},
          toolCodecs,
          toolName,
        });
        parts.push({ type: "tool-call", id: toolUseId ?? "", name: toolName, params });
      }
    } else if (Predicate.isNotUndefined(block.citationsContent) && !isStructuredOutputTool) {
      for (const generated of block.citationsContent.content ?? []) {
        if (Predicate.isNotUndefined(generated.text)) {
          parts.push({ type: "text", text: generated.text });
        }
      }
    }
  }

  parts.push({
    type: "finish",
    reason: resolveFinishReason(output.stopReason, isStructuredOutputTool),
    usage: makeUsage(output.usage),
    metadata: makeFinishMetadata({
      stopReason: output.stopReason,
      additionalModelResponseFields: output.additionalModelResponseFields,
      metadata: output,
    }),
  });

  return parts;
});
