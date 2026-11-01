import type {
  CachePointBlock,
  ContentBlock,
  DocumentFormat,
  ImageFormat,
  Message,
  S3Location,
  SystemContentBlock,
  ToolUseBlock,
  VideoFormat,
} from "@aws-sdk/client-bedrock-runtime";
import type * as AiError from "effect/ai/AiError";
import type * as Prompt from "effect/ai/Prompt";
import * as Effect from "effect/Effect";
import * as Base64 from "effect/encoding/Base64";
import * as Predicate from "effect/Predicate";
import * as Result from "effect/Result";
import type { CachePointOptions } from "../AmazonBedrockLanguageModel.js";
import { invalidUserInput } from "./errors.js";

const METHOD = "prepareMessages";

export interface PreparedMessages {
  readonly system: Array<SystemContentBlock> | undefined;
  readonly messages: Array<Message>;
}

type OptionsWithCachePoint = {
  readonly bedrock?: CachePointOptions | null | undefined;
};

type Role = "user" | "assistant";

const IMAGE_FORMATS = new Map<string, ImageFormat>([
  ["image/gif", "gif"],
  ["image/jpeg", "jpeg"],
  ["image/jpg", "jpeg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

const DOCUMENT_FORMATS = new Map<string, DocumentFormat>([
  ["application/msword", "doc"],
  ["application/pdf", "pdf"],
  ["application/vnd.ms-excel", "xls"],
  ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
  ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
  ["text/csv", "csv"],
  ["text/html", "html"],
  ["text/markdown", "md"],
  ["text/plain", "txt"],
]);

const VIDEO_FORMATS = new Map<string, VideoFormat>([
  ["video/3gpp", "three_gp"],
  ["video/mp4", "mp4"],
  ["video/mpeg", "mpeg"],
  ["video/quicktime", "mov"],
  ["video/webm", "webm"],
  ["video/x-flv", "flv"],
  ["video/x-matroska", "mkv"],
  ["video/x-ms-wmv", "wmv"],
]);

export const toCachePointBlock = (options: OptionsWithCachePoint): CachePointBlock | undefined => {
  const cachePoint = options.bedrock?.cachePoint;
  if (Predicate.isNullish(cachePoint)) {
    return undefined;
  }
  return {
    type: cachePoint.type,
    ...(Predicate.isNotNullish(cachePoint.ttl) ? { ttl: cachePoint.ttl } : undefined),
  };
};

const pushCachePoint = (
  blocks: { push(block: { cachePoint: CachePointBlock }): unknown },
  options: OptionsWithCachePoint,
): void => {
  const cachePoint = toCachePointBlock(options);
  if (Predicate.isNotUndefined(cachePoint)) {
    blocks.push({ cachePoint });
  }
};

// Reasoning can't be cached, so a message's cache point goes after its last
// other block, and a cache point a part already put there wins.
const insertMessageCachePoint = (blocks: Array<ContentBlock>, options: OptionsWithCachePoint): void => {
  const cachePoint = toCachePointBlock(options);
  if (Predicate.isUndefined(cachePoint)) {
    return;
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    const block = blocks[i];
    if (Predicate.isNotUndefined(block.reasoningContent)) {
      continue;
    }
    if (Predicate.isUndefined(block.cachePoint)) {
      blocks.splice(i + 1, 0, { cachePoint });
    }
    return;
  }
};

const decodeBase64 = (data: string, description: string) => {
  const result = Base64.decode(data);
  return Result.isSuccess(result)
    ? Effect.succeed(result.success)
    : Effect.fail(invalidUserInput(METHOD, `${description} is not valid base64`));
};

type FileSource = { readonly bytes: Uint8Array } | { readonly s3Location: S3Location };

const toFileSource = Effect.fnUntraced(
  function*(part: Prompt.FilePart): Effect.fn.Return<FileSource, AiError.AiError> {
    const { data } = part;
    const bucketOwner = part.options.bedrock?.bucketOwner;
    const s3Location = (uri: string): FileSource => ({
      s3Location: { uri, ...(Predicate.isNotNullish(bucketOwner) ? { bucketOwner } : undefined) },
    });

    if (data instanceof Uint8Array) {
      return { bytes: data };
    }
    const url = data instanceof URL ? data.href : data;
    if (/^s3:\/\//i.test(url)) {
      return s3Location(url);
    }
    if (data instanceof URL || /^[a-z][a-z\d+.-]*:\/\//i.test(url)) {
      return yield* invalidUserInput(
        METHOD,
        `Amazon Bedrock only accepts file data as bytes, base64 or an s3:// URL, received '${url}'`,
      );
    }
    const base64 = url.replace(/^data:[^;,]*;base64,/, "");
    return { bytes: yield* decodeBase64(base64, `File data for '${part.fileName ?? part.mediaType}'`) };
  },
);

// Bedrock document names may only contain alphanumerics, single whitespace
// characters, hyphens, parentheses and square brackets, and must be unique
// within a request.
const makeDocumentName = (part: Prompt.FilePart, used: Set<string>): string => {
  const base = (part.fileName ?? "")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9\s\-()[\]]/g, "-")
    .replace(/\s+/g, " ")
    .trim() || "document";
  let name = base;
  for (let i = 2; used.has(name); i++) {
    name = `${base} (${i})`;
  }
  used.add(name);
  return name;
};

const toFileBlock = Effect.fnUntraced(
  function*(part: Prompt.FilePart, documentNames: Set<string>): Effect.fn.Return<ContentBlock, AiError.AiError> {
    const mediaType = part.mediaType.toLowerCase();
    const imageFormat = mediaType === "image/*" ? "jpeg" : IMAGE_FORMATS.get(mediaType);
    if (Predicate.isNotUndefined(imageFormat)) {
      return { image: { format: imageFormat, source: yield* toFileSource(part) } };
    }
    const documentFormat = DOCUMENT_FORMATS.get(mediaType);
    if (Predicate.isNotUndefined(documentFormat)) {
      return {
        document: {
          format: documentFormat,
          name: makeDocumentName(part, documentNames),
          source: yield* toFileSource(part),
        },
      };
    }
    const videoFormat = VIDEO_FORMATS.get(mediaType);
    if (Predicate.isNotUndefined(videoFormat)) {
      return { video: { format: videoFormat, source: yield* toFileSource(part) } };
    }
    return yield* invalidUserInput(METHOD, `Detected unsupported media type for file: '${part.mediaType}'`);
  },
);

const toReasoningBlock = Effect.fnUntraced(
  function*(part: Prompt.ReasoningPart): Effect.fn.Return<ContentBlock | undefined, AiError.AiError> {
    const options = part.options.bedrock;
    if (Predicate.isNotNullish(options?.redactedContent)) {
      return {
        reasoningContent: {
          redactedContent: yield* decodeBase64(options.redactedContent, "Redacted reasoning content"),
        },
      };
    }
    // Reasoning without a signature cannot be verified by Bedrock, so it is
    // dropped from the history instead of failing the request.
    if (Predicate.isNotNullish(options?.signature)) {
      return { reasoningContent: { reasoningText: { text: part.text, signature: options.signature } } };
    }
    return undefined;
  },
);

const toToolResultText = (result: unknown): string =>
  typeof result === "string" ? result : JSON.stringify(result) ?? "null";

const isTextBlock = (block: ContentBlock): block is ContentBlock.TextMember => typeof block.text === "string";

// Bedrock rejects a final assistant turn that ends with whitespace.
const trimFinalAssistantText = (messages: Array<Message>): void => {
  const last = messages[messages.length - 1];
  if (last?.role !== "assistant" || last.content === undefined) {
    return;
  }
  for (let i = last.content.length - 1; i >= 0; i--) {
    const block = last.content[i];
    if (Predicate.isNotUndefined(block.cachePoint)) {
      continue;
    }
    if (isTextBlock(block)) {
      const text = block.text.trimEnd();
      if (text.length === 0) {
        last.content.splice(i, 1);
      } else {
        last.content[i] = { text };
      }
    }
    return;
  }
};

/**
 * Converts an Effect AI prompt into Converse `system` blocks and `messages`.
 *
 * System messages are hoisted into the top-level `system` field because
 * Converse has no system role inside the conversation, and consecutive turns
 * with the same role are merged because Converse requires user and assistant
 * turns to alternate.
 */
export const prepareMessages = Effect.fnUntraced(
  function*(prompt: Prompt.Prompt): Effect.fn.Return<PreparedMessages, AiError.AiError> {
    const system: Array<SystemContentBlock> = [];
    const messages: Array<Message> = [];
    const documentNames = new Set<string>();

    const appendTurn = (role: Role, blocks: Array<ContentBlock>, options: OptionsWithCachePoint) => {
      if (blocks.length === 0) {
        return;
      }
      insertMessageCachePoint(blocks, options);
      const last = messages[messages.length - 1];
      if (last?.role === role && last.content !== undefined) {
        for (const block of blocks) {
          last.content.push(block);
        }
      } else {
        messages.push({ role, content: blocks });
      }
    };

    for (const message of prompt.content) {
      switch (message.role) {
        case "system": {
          if (message.content.trim().length > 0) {
            system.push({ text: message.content });
            pushCachePoint(system, message.options);
          }
          break;
        }

        case "user": {
          const blocks: Array<ContentBlock> = [];
          for (const part of message.content) {
            switch (part.type) {
              case "text": {
                blocks.push({ text: part.text });
                break;
              }
              case "file": {
                blocks.push(yield* toFileBlock(part, documentNames));
                break;
              }
            }
            pushCachePoint(blocks, part.options);
          }
          appendTurn("user", blocks, message.options);
          break;
        }

        case "tool": {
          const blocks: Array<ContentBlock> = [];
          for (const part of message.content) {
            if (part.type !== "tool-result") {
              continue;
            }
            blocks.push({
              toolResult: {
                toolUseId: part.id,
                content: [{ text: toToolResultText(part.result) }],
                status: part.isFailure ? "error" : "success",
              },
            });
            pushCachePoint(blocks, part.options);
          }
          appendTurn("user", blocks, message.options);
          break;
        }

        case "assistant": {
          const blocks: Array<ContentBlock> = [];
          for (const part of message.content) {
            switch (part.type) {
              case "text": {
                if (part.text.trim().length === 0) {
                  continue;
                }
                blocks.push({ text: part.text });
                break;
              }
              case "reasoning": {
                const block = yield* toReasoningBlock(part);
                if (Predicate.isNotUndefined(block)) {
                  blocks.push(block);
                }
                continue;
              }
              case "tool-call": {
                blocks.push({
                  toolUse: { toolUseId: part.id, name: part.name, input: part.params as ToolUseBlock["input"] },
                });
                break;
              }
              default: {
                continue;
              }
            }
            pushCachePoint(blocks, part.options);
          }
          appendTurn("assistant", blocks, message.options);
          break;
        }
      }
    }

    trimFinalAssistantText(messages);

    return { system: system.length > 0 ? system : undefined, messages };
  },
);

/**
 * Returns the names of every tool referenced by `toolUse` blocks in the
 * conversation, and whether any tool blocks are present at all.
 */
export const getHistoryToolUsage = (messages: ReadonlyArray<Message>): {
  readonly hasToolBlocks: boolean;
  readonly toolNames: ReadonlySet<string>;
} => {
  let hasToolBlocks = false;
  const toolNames = new Set<string>();
  for (const message of messages) {
    for (const block of message.content ?? []) {
      if (Predicate.isNotUndefined(block.toolUse)) {
        hasToolBlocks = true;
        if (Predicate.isNotUndefined(block.toolUse.name)) {
          toolNames.add(block.toolUse.name);
        }
      } else if (Predicate.isNotUndefined(block.toolResult)) {
        hasToolBlocks = true;
      }
    }
  }
  return { hasToolBlocks, toolNames };
};
