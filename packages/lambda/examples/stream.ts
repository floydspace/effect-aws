import type { StreamHandler } from "@effect-aws/lambda";
import { LambdaHandler } from "@effect-aws/lambda";
import { NodeStream } from "@effect/platform-node";
import type { LambdaFunctionURLEvent } from "aws-lambda";
import * as Cause from "effect/Cause";
import * as Stream from "effect/Stream";
import { createGzip } from "node:zlib";

/**
 * Streaming handler that takes a Lambda Function URL event, compresses it using gzip and
 * returns the compressed data as a stream.
 */
const streamHandler: StreamHandler<LambdaFunctionURLEvent, never, Cause.UnknownError> = (event) => {
  return Stream.make(Buffer.from(JSON.stringify(event))).pipe(
    Stream.pipeThroughChannelOrFail(NodeStream.fromDuplex({
      evaluate: () => createGzip(),
      onError: (e) => new Cause.UnknownError(e),
    })),
  );
};

export const handler = LambdaHandler.stream(streamHandler);
