import { Error } from "@effect/platform";
import * as NodeStream from "@effect/platform-node-shared/NodeStream";
import { Effect, Predicate, Stream } from "effect";
import { dual } from "effect/Function";
import type { PipelineDestination, PipelineOptions, PipelineSource } from "node:stream";
import * as NS from "node:stream/promises";

/** @internal */
const isStream = (u: unknown): u is Stream.Stream<unknown, unknown> => Predicate.hasProperty(u, Stream.StreamTypeId);

const handleErrnoException =
  (module: Error.SystemError["module"], method: string) => (err: unknown): Error.PlatformError => {
    const reason: Error.SystemErrorReason = "Unknown";

    return new Error.SystemError({
      reason,
      module,
      method,
      pathOrDescriptor: "",
      syscall: (err as NodeJS.ErrnoException).syscall,
      cause: err,
    });
  };

/** @internal */
export const pipeline: {
  <A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(
    source: A,
    destination: B,
    options?: Omit<PipelineOptions, "signal">,
  ): Effect.Effect<void, Error.PlatformError>;
} = (source, destination, options) =>
  Effect.tryPromise({
    try: (signal) => NS.pipeline(source, destination, { ...options, signal }),
    catch: handleErrnoException("Stream", "pipeline"),
  });

/** @internal */
export const pipeTo: {
  (
    that: NodeJS.WritableStream,
    options?: Omit<PipelineOptions, "signal">,
  ): <E, R>(self: Stream.Stream<string | Uint8Array, E, R>) => Effect.Effect<void, Error.PlatformError>;
  <E, R>(
    self: Stream.Stream<string | Uint8Array, E, R>,
    that: NodeJS.WritableStream,
    options?: Omit<PipelineOptions, "signal">,
  ): Effect.Effect<void, Error.PlatformError>;
} = dual(
  (args) => isStream(args[0]),
  <E, R>(
    stream: Stream.Stream<string | Uint8Array, E, R>,
    writable: NodeJS.WritableStream,
    options?: Omit<PipelineOptions, "signal">,
  ) =>
    stream.pipe(
      NodeStream.toReadable,
      Effect.flatMap((readable) => pipeline(readable, writable, options)),
    ),
);
