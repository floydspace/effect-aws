import type { ObjectNotInActiveTierError as SdkObjectNotInActiveTierError } from "@aws-sdk/client-s3";
import type { ObjectNotInActiveTierError, Types } from "@effect-aws/client-s3";
import type { TaggedException } from "@effect-aws/commons/Errors";
import { expectTypeOf, it } from "vitest";

it("keeps SDK exceptions separate from Effect error types", () => {
  expectTypeOf<Types.ObjectNotInActiveTierError>().toEqualTypeOf<SdkObjectNotInActiveTierError>();
  expectTypeOf<ObjectNotInActiveTierError>().toEqualTypeOf<TaggedException<SdkObjectNotInActiveTierError>>();
});
