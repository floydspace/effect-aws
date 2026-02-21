import { Data } from "effect";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export class SdkError extends Data.TaggedError("SdkError")<TaggedException<Error & { name: "SdkError" }>> {}
