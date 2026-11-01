/**
 * @since 0.1.0
 */
import type { HttpHandlerOptions as SmithyHttpHandlerOptions } from "@smithy/types";

/**
 * @since 0.1.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
  /**
   * An additional signal that aborts the request. Interrupting the effect
   * already aborts an in-flight request, but streaming response bodies
   * (event streams, S3 objects) outlive the effect, so this is the only way
   * to tear down their connection early.
   *
   * @since 1.1.0
   */
  abortSignal?: SmithyHttpHandlerOptions["abortSignal"];
}
