# @effect-aws/ai-amazon-bedrock

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fai-amazon-bedrock?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/ai-amazon-bedrock)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fai-amazon-bedrock)](https://www.npmjs.com/package/@effect-aws/ai-amazon-bedrock)

An Amazon Bedrock provider for [Effect AI](https://effect.website/docs/ai/introduction/). It implements Effect's
`LanguageModel` service with the Bedrock [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html),
through [`@effect-aws/client-bedrock-runtime`](https://github.com/floydspace/effect-aws/blob/main/packages/client-bedrock-runtime/README.md).

Because it builds on the AWS SDK, request signing, the full AWS credential chain, retries and event stream decoding
all come from the SDK, and the request and response types stay in step with the SDK version you install.

## Installation

```bash
npm install --save @effect-aws/ai-amazon-bedrock @effect-aws/client-bedrock-runtime effect
```

Requires `effect` 4.0.6 or later.

## Usage

```ts
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock"
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime"
import * as LanguageModel from "effect/ai/LanguageModel"
import * as Effect from "effect/Effect"
import * as Layer from "effect/Layer"

const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
  inferenceConfig: { maxTokens: 4096 }
})

const program = LanguageModel.generateText({ prompt: "Hello" }).pipe(
  Effect.provide(Layer.provideMerge(Claude, BedrockRuntime.defaultLayer))
)
```

The model identifier is passed straight to Converse, so foundation model IDs, cross-region inference profile IDs and
the ARNs of inference profiles, provisioned throughput, imported models and prompt routers all work.

### Configuring the AWS client

The language model only needs `BedrockRuntimeService`. Configure region, credentials, endpoint, logging or a custom
client with the usual `@effect-aws/client-bedrock-runtime` layers:

```ts
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime"
import { fromIni } from "@aws-sdk/credential-providers"
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime"

// Default SDK configuration: region and credentials from the environment
BedrockRuntime.defaultLayer

// Explicit client configuration
BedrockRuntime.layer({ region: "us-east-1", credentials: fromIni({ profile: "ai" }), logger: true })

// Full control over the client instance
BedrockRuntime.baseLayer((config) => new BedrockRuntimeClient({ ...config, maxAttempts: 5 }))
```

### Streaming

```ts
import * as LanguageModel from "effect/ai/LanguageModel"
import * as Effect from "effect/Effect"
import * as Stream from "effect/Stream"

const program = LanguageModel.streamText({ prompt: "Write a haiku about the sea" }).pipe(
  Stream.runForEach((part) => part.type === "text-delta" ? Effect.log(part.delta) : Effect.void)
)
```

Interrupting the stream, or closing it early with `Stream.take` and similar operators, aborts the underlying HTTP
request, so Bedrock stops generating tokens.

Bedrock can also report an exception partway through a stream: `ThrottlingException`, `ModelStreamErrorException`,
`InternalServerException`, `ServiceUnavailableException` or `ValidationException`. As in the other Effect AI
providers, the stream then emits an `error` part, with `{ type, message }` as its `error` and the request ID in
`metadata.bedrock.requestId`, followed by a `finish` part with the `"error"` reason, and ends without failing. Because
retry policies only see failures, check for the `error` part or `finishReason: "error"` to retry a stream that broke
midway. Errors before the stream starts, network failures and invalid tool calls still fail the stream with
`AiError`.

### Tools

User-defined tools are sent as Converse `toolSpec`s, and every Effect AI tool choice is supported:

| Effect AI tool choice | Converse tool choice |
| --- | --- |
| `"auto"` | `{ auto: {} }` |
| `"required"` | `{ any: {} }` |
| `{ tool: name }` | `{ tool: { name } }` |
| `{ oneOf, mode }` | the listed tools only, with `auto` or `any` |
| `"none"` | no tool choice (Converse has no `none`) |

Bedrock rejects a conversation that contains tool calls or tool results unless the request also has a tool
configuration. The provider therefore keeps tool specs when the history contains tool blocks, even for `"none"`, and
adds a placeholder spec for any tool the history uses that the request no longer provides.

Tool support varies by model: some models reject `toolChoice: "required"` and `{ tool }` or tools in streaming mode,
and some accept a forced tool choice without enforcing it. See [Model support](#model-support).

A call to a tool that the request doesn't provide fails with `ToolNotFoundError`. To handle such calls yourself, pass
`disableToolCallResolution: true` with `toolCallValidation: "deferred"`, and they are returned unchanged.

#### Strict tools

The Converse `strict` flag asks the model to follow a tool's input schema exactly. Set it on a tool with the
`Tool.Strict` annotation, or for every tool with the `strictJsonSchema` config field. The annotation wins, and when
neither is set, `strict` is not sent.

```ts
import * as Tool from "effect/ai/Tool"
import * as Schema from "effect/Schema"

const SearchFlights = Tool.make("SearchFlights", {
  parameters: Schema.Struct({ from: Schema.String, to: Schema.String, maxStops: Schema.optional(Schema.Int) }),
  success: Schema.Number
}).annotate(Tool.Strict, true)
```

Claude rejects strict tools unless their schemas are strict too, so for Claude models a strict tool's schema is
rewritten like a structured output schema (see [Claude schemas](#claude-schemas)), and the `null`s Claude sends for
optional parameters become missing fields before the toolkit decodes them. Claude on Bedrock also fails with an
internal server error on strict schemas that allow `"NaN"` and `"Infinity"`, as `Schema.Number` does, so use
`Schema.Finite` or `Schema.Int` for the numeric parameters of strict tools. Some models reject `strict` altogether,
see [Model support](#model-support).

### Structured output

`LanguageModel.generateObject` supports two modes, chosen with the `structuredOutput` config field:

| Mode | How it works | Models |
| --- | --- | --- |
| `"tool"` (default) | Adds a synthetic tool whose input schema is the requested object, forces the model to call it, and returns the tool input as the response text. | Any model with tool use and forced tool choice |
| `"native"` | Sends the JSON schema in Converse `outputConfig.textFormat`. | Models that support Bedrock structured output |

Use `"native"` on Claude 4.5 and later and on Qwen3, and whenever extended thinking must stay on. Keep the default
`"tool"` for every other model. Anthropic models reject extended thinking combined with a forced tool call, so in
`"tool"` mode the `thinking` field is removed from `additionalModelRequestFields`.

#### Claude schemas

Claude only accepts strict JSON schemas, so for Claude models the schema is rewritten with
`effect/ai/AnthropicStructuredOutput`: every object gets `additionalProperties: false`, and optional fields are sent
as required but nullable (a `null` decodes back to a missing field). Claude is recognised by `anthropic.claude` in the
model ID, so an application inference profile ARN gets the default schema, which Claude rejects in `"native"` mode
and for strict tools.

```ts
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock"
import * as LanguageModel from "effect/ai/LanguageModel"
import * as Schema from "effect/Schema"

const Person = Schema.Struct({ name: Schema.String, birthYear: Schema.Number }).annotate({ identifier: "Person" })

const program = LanguageModel.generateObject({ prompt: "Ada Lovelace was born in 1815.", schema: Person }).pipe(
  AmazonBedrockLanguageModel.withConfigOverride({ structuredOutput: "native" })
)
```

## Configuration

`AmazonBedrockLanguageModel.Config` accepts every Converse request field that is not derived from the prompt:

| Field | Purpose |
| --- | --- |
| `inferenceConfig` | `maxTokens`, `temperature`, `topP`, `stopSequences` |
| `additionalModelRequestFields` | Model-specific fields, such as Anthropic's `thinking` or `top_k` |
| `additionalModelResponseFieldPaths` | Model-specific response fields to return in the finish metadata |
| `guardrailConfig` | Guardrail identifier, version, trace, and `streamProcessingMode` (streaming only) |
| `performanceConfig` | Latency-optimised inference |
| `serviceTier` | `default`, `priority`, `flex` or `reserved` |
| `requestMetadata` | Key-value pairs for invocation logs |
| `promptVariables` | Variables for Bedrock Prompt Management prompts |
| `outputConfig` | Output settings such as `effort`; `textFormat` is set by `"native"` structured output |
| `structuredOutput` | `"tool"` (default) or `"native"`, see [Structured output](#structured-output) |
| `strictJsonSchema` | The default `strict` flag for tools, see [Strict tools](#strict-tools) |

Defaults passed to `model`, `make` or `layer` can be overridden from the context, or for a single call with
`withConfigOverride`. As in the other Effect AI providers, fields are merged shallowly: an override replaces every
field it sets, including object fields such as `inferenceConfig`, so repeat the defaults you want to keep. When
`maxTokens` is left out, Bedrock uses the model's maximum.

```ts
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock"
import * as LanguageModel from "effect/ai/LanguageModel"

const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
  inferenceConfig: { maxTokens: 4096, temperature: 1 }
})

// Sends { maxTokens: 4096, temperature: 0 }
const deterministic = LanguageModel.generateText({ prompt: "Name a colour" }).pipe(
  AmazonBedrockLanguageModel.withConfigOverride({ inferenceConfig: { maxTokens: 4096, temperature: 0 } })
)
```

## Prompts

- **System messages** go into the top-level Converse `system` field, wherever they appear in the prompt, because
  Converse has no system role inside a conversation.
- **Consecutive messages with the same role are merged**, because Converse requires user and assistant turns to
  alternate. Tool results become `toolResult` blocks in the following user turn.
- **Files** become `image`, `document` or `video` blocks based on their media type. File data can be bytes, base64,
  a data URL, or an `s3://` URL. Plain HTTP URLs are rejected, because Converse does not fetch them.

| Block | Media types |
| --- | --- |
| `image` | `image/png`, `image/jpeg`, `image/gif`, `image/webp` (`image/*` is sent as JPEG) |
| `document` | `application/pdf`, `text/plain`, `text/markdown`, `text/html`, `text/csv`, Word (`doc`, `docx`) and Excel (`xls`, `xlsx`) |
| `video` | `video/mp4`, `video/quicktime`, `video/webm`, `video/x-matroska`, `video/x-flv`, `video/mpeg`, `video/x-ms-wmv`, `video/3gpp` |

For `s3://` files in another account, set the bucket owner on the file part:

```ts
const part = {
  type: "file",
  mediaType: "application/pdf",
  data: new URL("s3://shared-bucket/report.pdf"),
  options: { bedrock: { bucketOwner: "123456789012" } }
} as const
```

### Prompt caching

Add a `bedrock.cachePoint` option to a message or a content part to place a Converse cache point after it:

```ts
import * as LanguageModel from "effect/ai/LanguageModel"

declare const longInstructions: string

const program = LanguageModel.generateText({
  prompt: [
    {
      role: "system",
      content: longInstructions,
      options: { bedrock: { cachePoint: { type: "default" } } }
    },
    { role: "user", content: "Summarise the instructions" }
  ]
})
```

`cachePoint.ttl` accepts `"5m"` (the default) or `"1h"` on models that support it. Cache reads and writes are
reported in `response.usage.inputTokens.cacheRead` and `cacheWrite`.

Reasoning can't be cached, so reasoning parts don't take a `cachePoint`, and a message's cache point goes after its
last content that isn't reasoning. When that content already has a cache point of its own, the message's is left out.

### Reasoning

Reasoning content is returned as `reasoning` parts. Their `bedrock.signature` (or `bedrock.redactedContent`, base64
encoded) metadata is what Bedrock needs to verify reasoning sent back in later turns, and `Prompt.fromResponseParts`
and `Chat` carry it over automatically. Reasoning parts without either field are left out of the request.

Turn reasoning on with the model's own request fields:

```ts
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock"

// Anthropic Claude: signed reasoning
AmazonBedrockLanguageModel.model("eu.anthropic.claude-haiku-4-5-20251001-v1:0", {
  inferenceConfig: { maxTokens: 2048 },
  additionalModelRequestFields: { thinking: { type: "enabled", budget_tokens: 1024 } }
})

// Amazon Nova 2: Bedrock returns "[REDACTED]" as the reasoning text
AmazonBedrockLanguageModel.model("eu.amazon.nova-2-lite-v1:0", {
  additionalModelRequestFields: { reasoningConfig: { type: "enabled", maxReasoningEffort: "low" } }
})

// OpenAI gpt-oss reasons by default, without a signature
AmazonBedrockLanguageModel.model("openai.gpt-oss-20b-1:0")
```

## Responses

- `response-metadata` uses the Bedrock request ID as its `id`. When a prompt router answers, `modelId` is the model
  it picked.
- Usage reports Bedrock's `inputTokens` as `inputTokens.uncached`; `inputTokens.total` also includes cache reads
  and writes.
- Stop reasons map to finish reasons as follows: `end_turn` and `stop_sequence` → `stop`; `tool_use` →
  `tool-calls`; `max_tokens` and `model_context_window_exceeded` → `length`; `guardrail_intervened` and
  `content_filtered` → `content-filter`; `malformed_*` → `error`.
- The `finish` part's `bedrock` metadata holds the raw `stopReason`, `latencyMs`, `serviceTier`, the guardrail
  `trace`, the raw `usage` and any `additionalModelResponseFields`.

A guardrail block is not an error: the response finishes with the `content-filter` reason.

Some models report `end_turn` instead of `stop_sequence` or `max_tokens`, so the finish reason is `stop` even when a
stop sequence or the token limit ended the reply.

## Model support

Converse gives every model the same API, but Bedrock doesn't support every feature on every model. This is what the
live test suite ([`test/live.test.ts`](https://github.com/floydspace/effect-aws/blob/main/packages/ai-amazon-bedrock/test/live.test.ts))
observed in `eu-west-1` in October 2026; run it with `BEDROCK_LIVE_TEST=1` to check other models or regions.

| Model | Tools | Streamed tools | Forced tool choice | Strict tools | Native structured output | Images | Documents | Prompt cache | Stop sequences | Reasoning |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Anthropic Claude Haiku 4.5 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | signed |
| Amazon Nova Lite | ✓ | ✓ | ✓ | rejected | rejected | ✓ | ✓ | ✓ | ✓ | n/a |
| Amazon Nova 2 Lite | ✓ | ✓ | ✓ | rejected | rejected | ✓ | ✓ | ✓ | ignored | redacted text |
| Mistral Pixtral Large | ✓ | rejected | rejected | rejected | rejected | ✓ | ✓ | ? | ✓ | n/a |
| OpenAI gpt-oss-20b | ✓ | ✓ | not enforced | ✓ | not enforced | n/a | ? | ? | rejected | unsigned |
| Qwen3 32B | ✓ | ✓ | ✓ | ✓ | ✓ | n/a | ? | ? | rejected | ? |
| Google Gemma 3 12B | unreliable | unreliable | not enforced | ? | not enforced | ✓ | rejected | ? | rejected | n/a |

✓ works; "rejected" means Bedrock returns a validation error; "not enforced" means Bedrock accepts the request but the
model may ignore the setting, for example answering in plain text instead of calling the forced tool, or returning
invalid JSON; "?" was not tested; "n/a" means the model doesn't have the feature. Use `"tool"` structured output with
models that support a forced tool choice, and `"native"` with models that support Bedrock structured output.

## Errors

Errors from the Bedrock client are mapped to `AiError` reasons, so `isRetryable` and Effect AI retry policies work:

| Bedrock error | `AiError` reason |
| --- | --- |
| `ThrottlingException` | `RateLimitError` |
| `ServiceQuotaExceededException` | `QuotaExhaustedError` |
| `AccessDeniedException`, credential and signature failures | `AuthenticationError` |
| `ValidationException`, `ResourceNotFoundException` | `InvalidRequestError` |
| `InternalServerException`, `ServiceUnavailableException`, `ModelErrorException`, `ModelNotReadyException`, `ModelTimeoutException`, `ModelStreamErrorException` | `InternalProviderError` |
| Timeouts and network failures | `NetworkError` |
| Anything else | `UnknownError` |

The reason's `metadata.bedrock` holds the original `errorType`, the `requestId` and the `httpStatusCode`. Its type,
`AmazonBedrockError.AmazonBedrockErrorMetadata`, is added to every `AiError` metadata type when you import the
package. Exceptions that Bedrock reports partway through a stream become `error` parts instead, see
[Streaming](#streaming).

## Migrating from `@effect/ai-amazon-bedrock`

1. Swap the imports: `@effect/ai-amazon-bedrock` becomes `@effect-aws/ai-amazon-bedrock`, and `@effect/ai/*`
   becomes `effect/ai/*`.
2. Replace `AmazonBedrockClient.layer(...)` or `layerConfig(...)` and its `HttpClient` with a
   `BedrockRuntime` layer from `@effect-aws/client-bedrock-runtime`. Credentials now come from the AWS credential
   chain (or the `credentials` client option) instead of an access key pair.
3. Replace `AmazonBedrockConfig.withClientTransform` with `BedrockRuntime.baseLayer`, or SDK middleware on the
   client.
4. `model`, `layer`, `make`, `Config` and `withConfigOverride` keep their names. Requirements change from
   `AmazonBedrockClient` to `BedrockRuntimeService`, and `Model` is now any string.
5. Reasoning metadata is now `{ signature }` or `{ redactedContent }` under the `bedrock` key, instead of
   `{ type: "thinking", ... }`. Conversations persisted with the old shape lose their reasoning blocks.

Not supported yet: Anthropic's built-in tools (`AmazonBedrockTool`), embeddings, citations as `source` parts, and a
`CountTokens`-based tokenizer.
