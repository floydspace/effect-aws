import type { ConverseCommandOutput } from "@aws-sdk/client-bedrock-runtime";

// Real Converse responses, recorded with `BEDROCK_LIVE_RECORD_DIR` (see
// live.test.ts). Re-record them instead of editing them by hand. Claude Haiku
// 4.5 unless noted otherwise.

export const textResponse: ConverseCommandOutput = {
  output: { message: { role: "assistant", content: [{ text: "pong" }] } },
  stopReason: "end_turn",
  usage: { inputTokens: 15, outputTokens: 5, totalTokens: 20, cacheReadInputTokens: 0, cacheWriteInputTokens: 0 },
  metrics: { latencyMs: 603 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "b62325bf-8b42-4d15-bb74-4b99674a3059",
    attempts: 1,
    totalRetryDelay: 0,
  },
};

// Bedrock sends `type: "tool_use"` on tool use blocks, which the SDK's `ToolUseType` does not list.
export const toolUseResponse = {
  output: {
    message: {
      role: "assistant",
      content: [{
        toolUse: { toolUseId: "tooluse_GrVbDRFU4PwwZVyhirtXCH", name: "Add", input: { a: 2, b: 3 }, type: "tool_use" },
      }],
    },
  },
  stopReason: "tool_use",
  usage: { inputTokens: 734, outputTokens: 53, totalTokens: 787, cacheReadInputTokens: 0, cacheWriteInputTokens: 0 },
  metrics: { latencyMs: 686 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "c45aaa2d-2e18-49ad-a6b9-b960a4b585fd",
    attempts: 1,
    totalRetryDelay: 0,
  },
} as unknown as ConverseCommandOutput;

// A strict tool with an optional `maxStops` parameter, which Claude's strict
// schema makes required but nullable.
export const strictToolUseResponse = {
  output: {
    message: {
      role: "assistant",
      content: [{
        toolUse: {
          toolUseId: "tooluse_cXZd22rPQhJklakYgMwvFe",
          name: "SearchFlights",
          input: { from: "LHR", maxStops: null, to: "JFK" },
          type: "tool_use",
        },
      }],
    },
  },
  stopReason: "tool_use",
  usage: { inputTokens: 741, outputTokens: 72, totalTokens: 813, cacheReadInputTokens: 0, cacheWriteInputTokens: 0 },
  metrics: { latencyMs: 1667 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "3e59075a-1b28-4f06-886b-d18944b17dfa",
    attempts: 1,
    totalRetryDelay: 0,
  },
} as unknown as ConverseCommandOutput;

export const objectToolResponse = {
  output: {
    message: {
      role: "assistant",
      content: [{
        toolUse: {
          toolUseId: "tooluse_MTv252qG2RWAGnVkji7wzy",
          name: "Person",
          input: { name: "Ada Lovelace", birthYear: 1815 },
          type: "tool_use",
        },
      }],
    },
  },
  stopReason: "tool_use",
  usage: { inputTokens: 802, outputTokens: 56, totalTokens: 858, cacheReadInputTokens: 0, cacheWriteInputTokens: 0 },
  metrics: { latencyMs: 678 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "79e98663-11dc-4978-8c4a-c2876bacb80a",
    attempts: 1,
    totalRetryDelay: 0,
  },
} as unknown as ConverseCommandOutput;

export const cacheReadResponse: ConverseCommandOutput = {
  output: { message: { role: "assistant", content: [{ text: "ok" }] } },
  stopReason: "end_turn",
  usage: { inputTokens: 13, outputTokens: 4, totalTokens: 9017, cacheReadInputTokens: 9000, cacheWriteInputTokens: 0 },
  metrics: { latencyMs: 569 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "ea1d585f-2d10-4c41-88c8-9efe4f784e80",
    attempts: 1,
    totalRetryDelay: 0,
  },
};

// OpenAI gpt-oss-20b: reasoning without a signature.
export const unsignedReasoningResponse: ConverseCommandOutput = {
  output: {
    message: {
      role: "assistant",
      content: [
        {
          reasoningContent: {
            reasoningText: { text: "We need to calculate 391 + 9 = 400. Ensure to output just the number." },
          },
        },
        { text: "400" },
      ],
    },
  },
  stopReason: "end_turn",
  usage: { inputTokens: 106, outputTokens: 31, totalTokens: 137 },
  metrics: { latencyMs: 364 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "5339d4fb-8ce3-4473-b72d-244770e6d88c",
    attempts: 1,
    totalRetryDelay: 0,
  },
};

// Amazon Nova 2 Lite: reasoning is enabled, but Bedrock returns placeholder text.
export const redactedReasoningTextResponse: ConverseCommandOutput = {
  output: {
    message: {
      role: "assistant",
      content: [{ reasoningContent: { reasoningText: { text: "[REDACTED]." } } }, { text: "400" }],
    },
  },
  stopReason: "end_turn",
  usage: { inputTokens: 130, outputTokens: 233, totalTokens: 363 },
  metrics: { latencyMs: 1180 },
  $metadata: {
    httpStatusCode: 200,
    requestId: "c108eec6-4eba-41b0-8d94-b014c47c73b8",
    attempts: 1,
    totalRetryDelay: 0,
  },
};
