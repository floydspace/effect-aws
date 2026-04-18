/**
 * @since 1.0.0
 */
import { SESv2Client } from "@aws-sdk/client-sesv2";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as SESv2ServiceConfig from "./SESv2ServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SESv2ClientInstance extends Context.Service<SESv2ClientInstance, SESv2Client>()(
  "@effect-aws/client-sesv2/SESv2ClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SESv2ServiceConfig.toSESv2ClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SESv2Client(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(SESv2ClientInstance, make);
