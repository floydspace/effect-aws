import {
  SynthesizeSpeechCommand,
} from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import { PollyClientInstance, PollyClientInstanceLayer } from "../../../generated/packages/client-polly/src/PollyClientInstance";
import { DefaultPollyClientConfigLayer } from "../../../generated/packages/client-polly/src/PollyClientInstanceConfig";
import { type PollyService } from "../../../generated/packages/client-polly/src/PollyService";

export type TaggedException<T extends { name: string }> = T & {
    readonly _tag: T["name"];
  };
export type PollyRequestPresignerError = TaggedException<Error & { name: "PollyRequestPresignerError" }>;
export const PollyRequestPresignerError = Data.tagged<PollyRequestPresignerError>("PollyRequestPresignerError");

type PresignedCommandOutput<T> = T extends Effect.Effect<infer _, infer _> ? Effect.Effect<string, PollyRequestPresignerError> : never;

type PresignedPollyService = {
  [K in keyof typeof presignableCommands]: PollyService[K] extends (...args: infer Args) => infer R ? (...args: Args) => PresignedCommandOutput<R> : never;
};

// According to the java docs, these are all the possible commands that can be presigned
// https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/awscore/presigner/PresignRequest.html
const presignableCommands = {
    ['synthesizeSpeech']: SynthesizeSpeechCommand,
  } as const;

/**
 * @since 1.0.0
 * @category tags
 */
export const PresignedPollyService = Context.GenericTag<PresignedPollyService>(
    "@effect-aws/client-polly/PollyService",
  );
  
  /**
   * @since 1.0.0
   * @category constructors
   */
  export const makePollyRequestPresignerService = Effect.gen(function* (_) {
    const client = yield* _(PollyClientInstance);
  
    return ReadonlyRecord.toEntries(presignableCommands).reduce((acc, [command]) => {
      const CommandCtor = presignableCommands[command];
      const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => getSynthesizeSpeechUrl({ options: options, client: client, params: new CommandCtor(args).input }),
        catch: (e) => {
            if (e instanceof Error) {
              return PollyRequestPresignerError({
                ...e,
                name: "PollyRequestPresignerError",
                message: e.message,
                stack: e.stack,
              });
            }
            throw e;
          },
        });
      const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
        /Command$/,
        "",
      );
      return { ...acc, [methodName]: methodImpl };
    }, {}) as PresignedPollyService;
  });
  
  /**
   * @since 1.0.0
   * @category layers
   */
  export const BasePresignedPollyServiceLayer = Layer.effect(
    PresignedPollyService,
    makePollyRequestPresignerService,
  );
  
  /**
   * @since 1.0.0
   * @category layers
   */
  export const PresignedPollyServiceLayer = BasePresignedPollyServiceLayer.pipe(
    Layer.provide(PollyClientInstanceLayer),
  );
  
  /**
   * @since 1.0.0
   * @category layers
   */
  export const DefaultPresignedPollyServiceLayer = PresignedPollyServiceLayer.pipe(
    Layer.provide(DefaultPollyClientConfigLayer),
  );
  