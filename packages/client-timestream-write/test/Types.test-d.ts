import type {
  _Record,
  Dimension,
  MeasureValue,
  MeasureValueType,
  TimeUnit,
  WriteRecordsCommandInput,
} from "@aws-sdk/client-timestream-write";
import type { Types } from "@effect-aws/client-timestream-write";
import { expectTypeOf, it } from "vitest";

it("exports SDK models and command inputs through the client package", () => {
  expectTypeOf<Types.Dimension>().toEqualTypeOf<Dimension>();
  expectTypeOf<Types.MeasureValue>().toEqualTypeOf<MeasureValue>();
  expectTypeOf<Types.MeasureValueType>().toEqualTypeOf<MeasureValueType>();
  expectTypeOf<Types.TimeUnit>().toEqualTypeOf<TimeUnit>();
  expectTypeOf<Types._Record>().toEqualTypeOf<_Record>();
  expectTypeOf<Types.WriteRecordsCommandInput>().toEqualTypeOf<WriteRecordsCommandInput>();
});
