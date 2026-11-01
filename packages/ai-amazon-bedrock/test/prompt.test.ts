import { prepareMessages } from "@effect-aws/ai-amazon-bedrock/internal/prompt";
import { describe, expect, it } from "@effect/vitest";
import * as Prompt from "effect/ai/Prompt";
import * as Response from "effect/ai/Response";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";

const prepare = (input: Prompt.RawInput) => prepareMessages(Prompt.make(input));

const expectInvalidUserInput = (exit: Exit.Exit<unknown, unknown>, description: RegExp) => {
  expect(Exit.isFailure(exit)).toBe(true);
  if (Exit.isFailure(exit)) {
    expect(exit.cause.toString()).toMatch("InvalidUserInputError");
    expect(exit.cause.toString()).toMatch(description);
  }
};

describe("prepareMessages", () => {
  describe("system messages", () => {
    it.effect("hoists system messages, including mid-conversation ones, into the top-level system field", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "system", content: "Be brief." },
          { role: "user", content: "Hi" },
          { role: "assistant", content: "Hello" },
          { role: "system", content: "Answer in French." },
          { role: "user", content: "How are you?" },
        ]);

        expect(result.system).toEqual([{ text: "Be brief." }, { text: "Answer in French." }]);
        expect(result.messages).toEqual([
          { role: "user", content: [{ text: "Hi" }] },
          { role: "assistant", content: [{ text: "Hello" }] },
          { role: "user", content: [{ text: "How are you?" }] },
        ]);
      }));

    it.effect("merges turns that a hoisted system message used to separate", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "First" },
          { role: "system", content: "Context" },
          { role: "user", content: "Second" },
        ]);

        expect(result.messages).toEqual([{ role: "user", content: [{ text: "First" }, { text: "Second" }] }]);
      }));

    it.effect("omits the system field when there are no non-blank system messages", () =>
      Effect.gen(function*() {
        const result = yield* prepare([{ role: "system", content: "  " }, { role: "user", content: "Hi" }]);

        expect(result.system).toBeUndefined();
      }));
  });

  describe("role merging", () => {
    it.effect("merges consecutive messages with the same role", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "a" },
          { role: "user", content: "b" },
          { role: "assistant", content: "c" },
          { role: "assistant", content: "d" },
        ]);

        expect(result.messages).toEqual([
          { role: "user", content: [{ text: "a" }, { text: "b" }] },
          { role: "assistant", content: [{ text: "c" }, { text: "d" }] },
        ]);
      }));

    it.effect("merges tool results into the following user turn", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Weather?" },
          {
            role: "assistant",
            content: [{ type: "tool-call", id: "t1", name: "GetWeather", params: { city: "Paris" } }],
          },
          {
            role: "tool",
            content: [{ type: "tool-result", id: "t1", name: "GetWeather", isFailure: false, result: "Sunny" }],
          },
          { role: "user", content: "Thanks" },
        ]);

        expect(result.messages).toEqual([
          { role: "user", content: [{ text: "Weather?" }] },
          {
            role: "assistant",
            content: [{ toolUse: { toolUseId: "t1", name: "GetWeather", input: { city: "Paris" } } }],
          },
          {
            role: "user",
            content: [
              { toolResult: { toolUseId: "t1", content: [{ text: "Sunny" }], status: "success" } },
              { text: "Thanks" },
            ],
          },
        ]);
      }));

    it.effect("drops turns that end up empty and merges their neighbours", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Hi" },
          { role: "assistant", content: "Let me check." },
          { role: "tool", content: [{ type: "tool-approval-response", approvalId: "a1", approved: true }] },
          { role: "assistant", content: "Done." },
        ]);

        expect(result.messages).toEqual([
          { role: "user", content: [{ text: "Hi" }] },
          { role: "assistant", content: [{ text: "Let me check." }, { text: "Done." }] },
        ]);
      }));
  });

  describe("assistant content", () => {
    it.effect("skips blank text and trims trailing whitespace from the final assistant turn", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Hi" },
          { role: "assistant", content: [{ type: "text", text: "  " }, { type: "text", text: "Prefill " }] },
        ]);

        expect(result.messages[1]).toEqual({ role: "assistant", content: [{ text: "Prefill" }] });
      }));

    it.effect("keeps whitespace in earlier assistant turns", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Hi" },
          { role: "assistant", content: "Hello " },
          { role: "user", content: "Bye" },
        ]);

        expect(result.messages[1]).toEqual({ role: "assistant", content: [{ text: "Hello " }] });
      }));
  });

  describe("files", () => {
    it.effect("maps images, documents and videos to the matching content blocks", () =>
      Effect.gen(function*() {
        const bytes = new Uint8Array([1, 2, 3]);
        const result = yield* prepare([{
          role: "user",
          content: [
            { type: "file", mediaType: "image/png", data: bytes },
            { type: "file", mediaType: "image/*", data: bytes },
            { type: "file", mediaType: "application/pdf", fileName: "Q3 report.final.pdf", data: bytes },
            { type: "file", mediaType: "text/csv", data: bytes },
            { type: "file", mediaType: "video/mp4", data: bytes },
          ],
        }]);

        expect(result.messages[0].content).toEqual([
          { image: { format: "png", source: { bytes } } },
          { image: { format: "jpeg", source: { bytes } } },
          { document: { format: "pdf", name: "Q3 report-final", source: { bytes } } },
          { document: { format: "csv", name: "document", source: { bytes } } },
          { video: { format: "mp4", source: { bytes } } },
        ]);
      }));

    it.effect("decodes base64 strings and data URLs", () =>
      Effect.gen(function*() {
        const result = yield* prepare([{
          role: "user",
          content: [
            { type: "file", mediaType: "image/jpeg", data: "AQID" },
            { type: "file", mediaType: "image/jpeg", data: "data:image/jpeg;base64,BAUG" },
          ],
        }]);

        expect(result.messages[0].content).toEqual([
          { image: { format: "jpeg", source: { bytes: new Uint8Array([1, 2, 3]) } } },
          { image: { format: "jpeg", source: { bytes: new Uint8Array([4, 5, 6]) } } },
        ]);
      }));

    it.effect("maps s3:// URLs to S3 locations, with an optional bucket owner", () =>
      Effect.gen(function*() {
        const result = yield* prepare([{
          role: "user",
          content: [
            { type: "file", mediaType: "video/quicktime", data: new URL("s3://bucket/clip.mov") },
            {
              type: "file",
              mediaType: "application/pdf",
              fileName: "contract.pdf",
              data: "s3://other-bucket/contract.pdf",
              options: { bedrock: { bucketOwner: "123456789012" } },
            },
          ],
        }]);

        expect(result.messages[0].content).toEqual([
          { video: { format: "mov", source: { s3Location: { uri: "s3://bucket/clip.mov" } } } },
          {
            document: {
              format: "pdf",
              name: "contract",
              source: { s3Location: { uri: "s3://other-bucket/contract.pdf", bucketOwner: "123456789012" } },
            },
          },
        ]);
      }));

    it.effect("gives every document in a request a unique name", () =>
      Effect.gen(function*() {
        const bytes = new Uint8Array([1]);
        const result = yield* prepare([
          { role: "user", content: [{ type: "file", mediaType: "text/plain", fileName: "notes.txt", data: bytes }] },
          { role: "assistant", content: "Got it" },
          { role: "user", content: [{ type: "file", mediaType: "text/plain", fileName: "notes.txt", data: bytes }] },
        ]);

        expect(result.messages[0].content?.[0].document?.name).toBe("notes");
        expect(result.messages[2].content?.[0].document?.name).toBe("notes (2)");
      }));

    it.effect("rejects plain HTTP URLs", () =>
      Effect.gen(function*() {
        const exit = yield* Effect.exit(prepare([{
          role: "user",
          content: [{ type: "file", mediaType: "image/png", data: new URL("https://example.com/cat.png") }],
        }]));

        expectInvalidUserInput(exit, /s3:\/\/ URL/);

        const stringExit = yield* Effect.exit(prepare([{
          role: "user",
          content: [{ type: "file", mediaType: "image/png", data: "https://example.com/cat.png" }],
        }]));

        expectInvalidUserInput(stringExit, /s3:\/\/ URL/);
      }));

    it.effect("rejects unsupported media types", () =>
      Effect.gen(function*() {
        const exit = yield* Effect.exit(prepare([{
          role: "user",
          content: [{ type: "file", mediaType: "audio/mpeg", data: new Uint8Array([1]) }],
        }]));

        expectInvalidUserInput(exit, /unsupported media type/);
      }));

    it.effect("rejects invalid base64", () =>
      Effect.gen(function*() {
        const exit = yield* Effect.exit(prepare([{
          role: "user",
          content: [{ type: "file", mediaType: "image/png", data: "not base64!" }],
        }]));

        expectInvalidUserInput(exit, /not valid base64/);
      }));
  });

  describe("tool results", () => {
    it.effect("serialises results as text and marks failures as errors", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Go" },
          {
            role: "assistant",
            content: [
              { type: "tool-call", id: "a", name: "Lookup", params: {} },
              { type: "tool-call", id: "b", name: "Lookup", params: {} },
            ],
          },
          {
            role: "tool",
            content: [
              { type: "tool-result", id: "a", name: "Lookup", isFailure: false, result: { temperature: 21 } },
              { type: "tool-result", id: "b", name: "Lookup", isFailure: true, result: "Not found" },
            ],
          },
        ]);

        expect(result.messages[2].content).toEqual([
          { toolResult: { toolUseId: "a", content: [{ text: '{"temperature":21}' }], status: "success" } },
          { toolResult: { toolUseId: "b", content: [{ text: "Not found" }], status: "error" } },
        ]);
      }));
  });

  describe("reasoning", () => {
    it.effect("sends signed and redacted reasoning back, and drops unsigned reasoning", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Think" },
          {
            role: "assistant",
            content: [
              { type: "reasoning", text: "Hmm", options: { bedrock: { signature: "sig" } } },
              { type: "reasoning", text: "", options: { bedrock: { redactedContent: "AQID" } } },
              { type: "reasoning", text: "unsigned" },
              { type: "text", text: "Answer" },
            ],
          },
        ]);

        expect(result.messages[1].content).toEqual([
          { reasoningContent: { reasoningText: { text: "Hmm", signature: "sig" } } },
          { reasoningContent: { redactedContent: new Uint8Array([1, 2, 3]) } },
          { text: "Answer" },
        ]);
      }));

    it.effect("round-trips reasoning metadata from a previous response", () =>
      Effect.gen(function*() {
        const previous = Prompt.fromResponseParts([
          Response.makePart("reasoning-start", { id: "0" }),
          Response.makePart("reasoning-delta", { id: "0", delta: "Let me think" }),
          Response.makePart("reasoning-delta", { id: "0", delta: "", metadata: { bedrock: { signature: "sig" } } }),
          Response.makePart("reasoning-end", { id: "0" }),
          Response.makePart("text", { text: "42" }),
        ]);

        const result = yield* prepareMessages(Prompt.concat(Prompt.make("Question"), previous));

        expect(result.messages[1].content).toEqual([
          { reasoningContent: { reasoningText: { text: "Let me think", signature: "sig" } } },
          { text: "42" },
        ]);
      }));
  });

  describe("cache points", () => {
    it.effect("appends cache points after parts and messages", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          {
            role: "system",
            content: "Long instructions",
            options: { bedrock: { cachePoint: { type: "default" } } },
          },
          {
            role: "user",
            content: [
              { type: "text", text: "Document", options: { bedrock: { cachePoint: { type: "default", ttl: "1h" } } } },
              { type: "text", text: "Question" },
            ],
            options: { bedrock: { cachePoint: { type: "default" } } },
          },
        ]);

        expect(result.system).toEqual([{ text: "Long instructions" }, { cachePoint: { type: "default" } }]);
        expect(result.messages[0].content).toEqual([
          { text: "Document" },
          { cachePoint: { type: "default", ttl: "1h" } },
          { text: "Question" },
          { cachePoint: { type: "default" } },
        ]);
      }));

    it.effect("keeps the final assistant text trimmed when it is followed by a cache point", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          { role: "user", content: "Hi" },
          {
            role: "assistant",
            content: [{ type: "text", text: "Prefill  ", options: { bedrock: { cachePoint: { type: "default" } } } }],
          },
        ]);

        expect(result.messages[1].content).toEqual([{ text: "Prefill" }, { cachePoint: { type: "default" } }]);
      }));

    it.effect("keeps a part cache point instead of adding the message one after it", () =>
      Effect.gen(function*() {
        const result = yield* prepare([
          {
            role: "user",
            content: [
              { type: "text", text: "Document" },
              { type: "text", text: "Question", options: { bedrock: { cachePoint: { type: "default", ttl: "1h" } } } },
            ],
            options: { bedrock: { cachePoint: { type: "default" } } },
          },
        ]);

        expect(result.messages[0].content).toEqual([
          { text: "Document" },
          { text: "Question" },
          { cachePoint: { type: "default", ttl: "1h" } },
        ]);
      }));

    it.effect("places a message cache point after the last block that isn't reasoning", () =>
      Effect.gen(function*() {
        const cachePoint = { bedrock: { cachePoint: { type: "default" } } } as const;
        const result = yield* prepare([
          { role: "user", content: "First" },
          {
            role: "assistant",
            content: [
              { type: "text", text: "Draft" },
              { type: "reasoning", text: "Hmm", options: { bedrock: { signature: "sig" } } },
            ],
            options: cachePoint,
          },
          { role: "user", content: "Second" },
          {
            role: "assistant",
            content: [{ type: "reasoning", text: "Only thinking", options: { bedrock: { signature: "sig" } } }],
            options: cachePoint,
          },
          { role: "user", content: "Third" },
        ]);

        expect(result.messages[1].content).toEqual([
          { text: "Draft" },
          { cachePoint: { type: "default" } },
          { reasoningContent: { reasoningText: { text: "Hmm", signature: "sig" } } },
        ]);
        expect(result.messages[3].content).toEqual([
          { reasoningContent: { reasoningText: { text: "Only thinking", signature: "sig" } } },
        ]);
      }));
  });
});
