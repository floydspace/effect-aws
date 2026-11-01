import type { ConverseStreamMetadataEvent, ConverseStreamOutput } from "@aws-sdk/client-bedrock-runtime";
import * as AiError from "effect/ai/AiError";
import type * as LanguageModel from "effect/ai/LanguageModel";
import type * as Response from "effect/ai/Response";
import * as Tool from "effect/ai/Tool";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import { identity } from "effect/Function";
import * as Predicate from "effect/Predicate";
import * as Stream from "effect/Stream";
import { type ErrorContext, getErrorName, getMessage, MODULE, toAiError } from "./errors.js";
import { encodeRedactedContent, makeFinishMetadata, makeUsage, resolveFinishReason } from "./response.js";
import { resolveToolCallParams, type ToolCodecs } from "./tools.js";

type ContentBlockState =
  | { readonly type: "text" }
  | { readonly type: "reasoning" }
  | { readonly type: "tool-call"; readonly id: string; readonly name: string; params: string };

const STREAM_EXCEPTIONS = [
  ["internalServerException", "InternalServerException"],
  ["modelStreamErrorException", "ModelStreamErrorException"],
  ["serviceUnavailableException", "ServiceUnavailableException"],
  ["throttlingException", "ThrottlingException"],
  ["validationException", "ValidationException"],
] as const;

const STREAM_EXCEPTION_NAMES: ReadonlySet<string> = new Set(STREAM_EXCEPTIONS.map(([, name]) => name));

interface StreamException {
  readonly name: string;
  readonly message: string | undefined;
}

// Bedrock exceptions delivered inside the event stream, whether the SDK yields
// them as event members or throws them while reading the stream.
const isStreamException = (error: unknown): boolean => {
  const name = getErrorName(error);
  return Predicate.isNotUndefined(name) && STREAM_EXCEPTION_NAMES.has(name);
};

/**
 * Wraps the SDK event stream so that closing it early (for example when the
 * Effect stream is interrupted) aborts the HTTP request.
 *
 * Closing an async generator waits for any pending `next()` call, and the
 * SDK's event stream reader never closes the underlying response body, so
 * aborting the request is the only way to release the connection promptly.
 * A fully consumed stream is left alone so its connection can be reused.
 */
export const abortOnClose = <A>(iterable: AsyncIterable<A>, controller: AbortController): AsyncIterable<A> => ({
  [Symbol.asyncIterator]() {
    const iterator = iterable[Symbol.asyncIterator]();
    let done = false;
    return {
      next: async () => {
        const result = await iterator.next();
        done ||= result.done === true;
        return result;
      },
      return: (value?: any) => {
        if (!done) {
          done = true;
          controller.abort();
          iterator.return?.().catch(() => {});
        }
        return Promise.resolve({ done: true, value });
      },
    };
  },
});

/**
 * Converts Converse stream events into Effect AI stream parts.
 *
 * A Bedrock exception inside the event stream ends the response with an
 * `error` part and an `error` finish reason. Failures to read the stream, such
 * as network errors, and invalid tool calls fail the stream with `AiError`.
 */
export const makeStreamResponse = ({
  context,
  events,
  options,
  requestId,
  toolCodecs,
}: {
  readonly context: ErrorContext;
  readonly events: AsyncIterable<ConverseStreamOutput>;
  readonly options: LanguageModel.ProviderOptions;
  readonly requestId: string | undefined;
  readonly toolCodecs: ToolCodecs;
}): Stream.Stream<Response.StreamPartEncoded, AiError.AiError> => {
  const contentBlocks = new Map<number, ContentBlockState>();
  let stopReason: string | undefined;
  let additionalModelResponseFields: unknown;
  let finished = false;

  const makeFinishPart = (
    metadata: ConverseStreamMetadataEvent | undefined,
    reason: Response.FinishReason = resolveFinishReason(stopReason),
  ): Response.StreamPartEncoded => {
    finished = true;
    return {
      type: "finish",
      reason,
      usage: makeUsage(metadata?.usage),
      metadata: makeFinishMetadata({ stopReason, additionalModelResponseFields, metadata }),
    };
  };

  const makeErrorParts = (exception: unknown): Array<Response.StreamPartEncoded> => {
    const parts: Array<Response.StreamPartEncoded> = [{
      type: "error",
      error: { type: getErrorName(exception), message: getMessage(exception) ?? null },
      metadata: { bedrock: { requestId: requestId ?? null } },
    }];
    if (!finished) {
      parts.push(makeFinishPart(undefined, "error"));
    }
    return parts;
  };

  const startBlock = (
    parts: Array<Response.StreamPartEncoded>,
    index: number,
    type: "text" | "reasoning",
  ): void => {
    if (contentBlocks.has(index)) {
      return;
    }
    contentBlocks.set(index, { type });
    parts.push({ type: type === "text" ? "text-start" : "reasoning-start", id: String(index) });
  };

  const handleEvent = Effect.fnUntraced(function*(
    event: ConverseStreamOutput,
  ): Effect.fn.Return<Array<Response.StreamPartEncoded>, AiError.AiError | StreamException> {
    const parts: Array<Response.StreamPartEncoded> = [];

    if (Predicate.isNotUndefined(event.messageStart)) {
      parts.push({
        type: "response-metadata",
        ...(Predicate.isNotUndefined(requestId) ? { id: requestId } : undefined),
        modelId: context.modelId,
        timestamp: DateTime.formatIso(yield* DateTime.now),
      });
      return parts;
    }

    if (Predicate.isNotUndefined(event.contentBlockStart)) {
      const index = event.contentBlockStart.contentBlockIndex ?? 0;
      const toolUse = event.contentBlockStart.start?.toolUse;
      if (Predicate.isNotUndefined(toolUse)) {
        const id = toolUse.toolUseId ?? String(index);
        const name = toolUse.name ?? "";
        contentBlocks.set(index, { type: "tool-call", id, name, params: "" });
        parts.push({ type: "tool-params-start", id, name });
      }
      return parts;
    }

    if (Predicate.isNotUndefined(event.contentBlockDelta)) {
      const index = event.contentBlockDelta.contentBlockIndex ?? 0;
      const delta = event.contentBlockDelta.delta;
      const id = String(index);

      if (Predicate.isNotUndefined(delta?.text)) {
        startBlock(parts, index, "text");
        parts.push({ type: "text-delta", id, delta: delta.text });
      } else if (Predicate.isNotUndefined(delta?.reasoningContent)) {
        const { redactedContent, signature, text } = delta.reasoningContent;
        startBlock(parts, index, "reasoning");
        if (Predicate.isNotUndefined(text)) {
          parts.push({ type: "reasoning-delta", id, delta: text });
        } else if (Predicate.isNotUndefined(signature)) {
          parts.push({ type: "reasoning-delta", id, delta: "", metadata: { bedrock: { signature } } });
        } else if (Predicate.isNotUndefined(redactedContent)) {
          parts.push({
            type: "reasoning-delta",
            id,
            delta: "",
            metadata: { bedrock: { redactedContent: encodeRedactedContent(redactedContent) } },
          });
        }
      } else if (Predicate.isNotUndefined(delta?.toolUse)) {
        const block = contentBlocks.get(index);
        if (block?.type === "tool-call" && Predicate.isNotUndefined(delta.toolUse.input)) {
          block.params += delta.toolUse.input;
          parts.push({ type: "tool-params-delta", id: block.id, delta: delta.toolUse.input });
        }
      }
      return parts;
    }

    if (Predicate.isNotUndefined(event.contentBlockStop)) {
      const index = event.contentBlockStop.contentBlockIndex ?? 0;
      const block = contentBlocks.get(index);
      contentBlocks.delete(index);
      if (block?.type === "text") {
        parts.push({ type: "text-end", id: String(index) });
      } else if (block?.type === "reasoning") {
        parts.push({ type: "reasoning-end", id: String(index) });
      } else if (block?.type === "tool-call") {
        parts.push({ type: "tool-params-end", id: block.id });
        const input = yield* Effect.try({
          try: () => Tool.unsafeSecureJsonParse(block.params.length === 0 ? "{}" : block.params),
          catch: (cause) =>
            AiError.make({
              module: MODULE,
              method: context.method,
              reason: new AiError.ToolParameterValidationError({
                toolName: block.name,
                description: `Failed to securely JSON parse tool parameters: ${cause}`,
              }),
            }),
        });
        const params = yield* resolveToolCallParams({
          method: context.method,
          options,
          params: input,
          toolCodecs,
          toolName: block.name,
        });
        parts.push({ type: "tool-call", id: block.id, name: block.name, params });
      }
      return parts;
    }

    if (Predicate.isNotUndefined(event.messageStop)) {
      stopReason = event.messageStop.stopReason;
      additionalModelResponseFields = event.messageStop.additionalModelResponseFields;
      return parts;
    }

    if (Predicate.isNotUndefined(event.metadata)) {
      // Prompt routers only report the model they picked once the response is done.
      const invokedModelId = event.metadata.trace?.promptRouter?.invokedModelId;
      if (Predicate.isNotUndefined(invokedModelId)) {
        parts.push({ type: "response-metadata", modelId: invokedModelId });
      }
      parts.push(makeFinishPart(event.metadata));
      return parts;
    }

    for (const [member, name] of STREAM_EXCEPTIONS) {
      const exception = event[member];
      if (Predicate.isNotUndefined(exception)) {
        return yield* Effect.fail({ name, message: exception.message });
      }
    }

    return parts;
  });

  return Stream.fromAsyncIterable(events, identity).pipe(
    Stream.mapEffect(handleEvent),
    Stream.flattenIterable,
    Stream.catchIf(
      isStreamException,
      (exception) => Stream.fromIterable(makeErrorParts(exception)),
      (error) => Stream.fail(toAiError(error, context)),
    ),
    // Usage arrives in the final `metadata` event; if the stream ends without
    // it, still report how the message stopped.
    Stream.concat(
      Stream.suspend(() =>
        finished || Predicate.isUndefined(stopReason) ? Stream.empty : Stream.make(makeFinishPart(undefined))
      ),
    ),
  );
};
