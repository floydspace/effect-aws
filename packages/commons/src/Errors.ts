import { TaggedError } from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export class SdkError extends TaggedError("SdkError")<TaggedException<Error & { name: "SdkError" }>> {}
