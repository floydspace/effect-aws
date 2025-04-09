import { Tracer } from "@aws-lambda-powertools/tracer";
import { Cause, Context, Effect, Layer, Option } from "effect";
import type { Exit } from "effect/Exit";
import * as EffectTracer from "effect/Tracer";

const XraySubsegmentTypeId = Symbol.for("@effect-aws/powertools-tracer/Subsegment");

type XraySegment = Exclude<ReturnType<Tracer["getSegment"]>, undefined>;

/** @internal */
export class XraySpan implements EffectTracer.Span {
  readonly [XraySubsegmentTypeId]: typeof XraySubsegmentTypeId;
  readonly _tag = "Span";

  readonly span: XraySegment;
  readonly spanId: string;
  readonly traceId: string;
  readonly attributes = new Map<string, unknown>();
  readonly sampled: boolean;
  status: EffectTracer.SpanStatus;

  constructor(
    readonly tracer: Tracer,
    readonly name: string,
    readonly parent: Option.Option<EffectTracer.AnySpan>,
    readonly context: Context.Context<never>,
    readonly links: ReadonlyArray<EffectTracer.SpanLink>,
    startTime: bigint,
    readonly kind: EffectTracer.SpanKind,
  ) {
    this[XraySubsegmentTypeId] = XraySubsegmentTypeId;

    let parentSegment = tracer.getSegment()!;
    if (Option.isSome(parent)) {
      const { span } = parent.value as XraySpan;
      parentSegment = span;
    }

    const subsegment = parentSegment.addNewSubsegment(name);
    this.span = subsegment;
    this.spanId = subsegment.id;
    this.traceId = tracer.getRootXrayTraceId()!;
    this.status = {
      _tag: "Started",
      startTime,
    };
    this.sampled = false;
  }

  attribute(key: string, value: unknown) {
    this.span.addAnnotation(key, value as any);
  }

  end(endTime: bigint, exit: Exit<unknown, unknown>) {
    this.status = {
      _tag: "Ended",
      endTime,
      exit,
      startTime: this.status.startTime,
    };
    if (exit._tag === "Success") {
      // noop
    } else {
      if (Cause.isInterruptedOnly(exit.cause)) {
        this.span.addMetadata("span.label", "⚠︎ Interrupted");
        this.span.addAnnotation("status.interrupted", true);
      } else {
        const errors = Cause.prettyErrors(exit.cause);

        if (errors.length > 0) {
          this.span.addMetadata("error", errors[0].message);

          if (Cause.isDieType(exit.cause)) {
            this.span.addFaultFlag();
          } else if (Cause.isFailType(exit.cause)) {
            this.span.addErrorFlag();
          } else {
            this.span.addFaultFlag();
          }
        } else {
          // empty cause means no error
        }
      }
    }
    this.span.close();
  }

  event(name: string, _startTime: bigint, attributes?: Record<string, unknown>) {
    this.span.addMetadata(name, attributes);
  }
}

/** @internal */
export const XrayTracer = Context.GenericTag<Tracer>(
  "@effect-aws/powertools-tracer/Tracer",
);

/** @internal */
export const make = Effect.map(XrayTracer, (tracer) =>
  EffectTracer.make({
    span(name, parent, context, links, startTime, kind) {
      return new XraySpan(
        tracer,
        name,
        parent,
        context,
        links,
        startTime,
        kind,
      );
    },
    context(execution) {
      return execution();
    },
  }));

const tracer = new Tracer();
export const layerTracerScoped = Layer.scoped(
  XrayTracer,
  Effect.succeed(tracer),
);

/** @internal */
export const layer = Layer.unwrapEffect(Effect.map(make, Layer.setTracer)).pipe(
  Layer.provide(layerTracerScoped),
);
