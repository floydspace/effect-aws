import { Inspectable } from "effect";

/** @internal */
export const unknownToAttributeValue = (value: unknown): boolean | string | number => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  } else if (typeof value === "bigint") {
    return Number(value);
  }
  return Inspectable.toStringUnknown(value);
};
