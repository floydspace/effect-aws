import * as PowerTools from "@aws-lambda-powertools/tracer";
import type { TracerInterface, TracerOptions } from "@aws-lambda-powertools/tracer/types";
import * as Xray from "aws-xray-sdk-core";
import { Cause, Effect, Layer, ServiceMap } from "effect";
import type { Exit } from "effect/Exit";
import * as EffectTracer from "effect/Tracer";
import type { XrayTracer } from "../Tracer.js";
import { unknownToAttributeValue } from "./utils.js";

const XraySpanTypeId = Symbol.for("@effect-aws/powertools-tracer/Tracer/XraySpan");

type XraySegment = NonNullable<ReturnType<PowerTools.Tracer["getSegment"]>>;

/** @internal */
export class XraySpan implements EffectTracer.Span {
  readonly [XraySpanTypeId]: typeof XraySpanTypeId;
  readonly _tag = "Span";

  readonly span: XraySegment;
  readonly spanId: string;
  readonly traceId: string;
  readonly attributes = new Map<string, unknown>();
  readonly sampled: boolean;
  status: EffectTracer.SpanStatus;

  constructor(
    readonly tracer: TracerInterface,
    readonly name: string,
    readonly parent: EffectTracer.AnySpan | undefined,
    readonly annotations: ServiceMap.ServiceMap<never>,
    readonly links: Array<EffectTracer.SpanLink>,
    startTime: bigint,
    readonly kind: EffectTracer.SpanKind,
  ) {
    this[XraySpanTypeId] = XraySpanTypeId;

    let parentSegment = tracer.getSegment();
    if (parent) {
      const { span } = parent as XraySpan;
      parentSegment = span;
    }

    this.span = parentSegment ? parentSegment.addNewSubsegment(name) : new Xray.Segment(name);
    this.spanId = this.span.id;
    this.traceId = tracer.getRootXrayTraceId() ?? (this.span as Xray.Segment).trace_id;
    this.status = {
      _tag: "Started",
      startTime,
    };
    this.sampled = false;
    this.annotations = annotations;
  }

  addLinks(links: ReadonlyArray<EffectTracer.SpanLink>): void {
    // eslint-disable-next-line no-restricted-syntax
    this.links.push(...links);
  }

  attribute(key: string, value: unknown) {
    this.span.addAnnotation(key, unknownToAttributeValue(value));
    this.attributes.set(key, value);
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
      if (Cause.hasInterruptsOnly(exit.cause)) {
        this.span.addMetadata("span.message", Cause.pretty(exit.cause));
        this.span.addMetadata("span.label", "⚠︎ Interrupted");
        this.span.addAnnotation("status.interrupted", true);
      } else {
        const errors = Cause.prettyErrors(exit.cause);

        if (errors.length > 0) {
          for (const error of errors) {
            this.span.addError(error);
          }

          if (Cause.hasFails(exit.cause)) {
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
export const Tracer = ServiceMap.Service<XrayTracer, TracerInterface>(
  "@effect-aws/powertools-tracer/Tracer/XrayTracer",
);

/** @internal */
export const make = Effect.map(Tracer.asEffect(), (tracer) =>
  EffectTracer.make({
    span: ({ annotations, kind, links, name, parent, startTime }) => {
      return new XraySpan(
        tracer,
        name,
        parent,
        annotations,
        links.slice(),
        startTime,
        kind,
      );
    },
  }));

/** @internal */
export const layerTracer = (options?: TracerOptions) => Layer.sync(Tracer, () => new PowerTools.Tracer(options));

/** @internal */
export const layerWithoutXrayTracer = Layer.effect(EffectTracer.Tracer, make);

/** @internal */
export const layer = (options?: TracerOptions) => layerWithoutXrayTracer.pipe(Layer.provide(layerTracer(options)));
