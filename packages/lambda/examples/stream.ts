import type { StreamHandler } from "@effect-aws/lambda";
import { LambdaHandler } from "@effect-aws/lambda";
import { NodeStream } from "@effect/platform-node";
import type { LambdaFunctionURLEvent } from "aws-lambda";
import { Cause, Stream } from "effect";
import { createGzip } from "node:zlib";

/**
 * Streaming handler that takes a Lambda Function URL event, compresses it using gzip and
 * returns the compressed data as a stream.
 */
const streamHandler: StreamHandler<LambdaFunctionURLEvent, never, Cause.UnknownException> = (event) => {
  return Stream.make(Buffer.from(JSON.stringify(event))).pipe(
    Stream.pipeThroughChannelOrFail(NodeStream.fromDuplex(
      () => createGzip(),
      (e) => new Cause.UnknownException(e),
    )),
  );
};

export const handler = LambdaHandler.stream(streamHandler);
