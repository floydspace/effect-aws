import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  UploadPartCommand
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import { S3ClientInstance, S3ClientInstanceLayer } from "../../../generated/packages/client-s3/src/S3ClientInstance";
import { DefaultS3ClientConfigLayer } from "../../../generated/packages/client-s3/src/S3ClientInstanceConfig";
import { type S3Service } from "../../../generated/packages/client-s3/src/S3Service";

export type TaggedException<T extends { name: string }> = T & {
    readonly _tag: T["name"];
  };
export type S3RequestPresignerError = TaggedException<Error & { name: "S3RequestPresignerError" }>;
export const S3RequestPresignerError = Data.tagged<S3RequestPresignerError>("S3RequestPresignerError");

type PresignedCommandOutput<T> = T extends Effect.Effect<infer _, infer _> ? Effect.Effect<string, S3RequestPresignerError> : never;

type PresignedS3Service = {
  [K in keyof typeof presignableCommands]: S3Service[K] extends (...args: infer Args) => infer R ? (...args: Args) => PresignedCommandOutput<R> : never;
};

// According to the java docs, these are all the possible commands that can be presigned
// https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/awscore/presigner/PresignRequest.html
const presignableCommands = {
    ['abortMultipartUpload']: AbortMultipartUploadCommand,
    ['completeMultipartUpload']: CompleteMultipartUploadCommand,
    ['createMultipartUpload']: CreateMultipartUploadCommand,
    ['deleteObject']: DeleteObjectCommand,
    ['getObject']: GetObjectCommand,
    ['putObject']: PutObjectCommand,
    ['uploadPart']: UploadPartCommand,
  } as const;

/**
 * @since 1.0.0
 * @category tags
 */
export const PresignedS3Service = Context.GenericTag<PresignedS3Service>(
    "@effect-aws/client-s3/S3Service",
  );
  
  /**
   * @since 1.0.0
   * @category constructors
   */
  export const makeS3RequestPresignerService = Effect.gen(function* (_) {
    const client = yield* _(S3ClientInstance);
  
    return ReadonlyRecord.toEntries(presignableCommands).reduce((acc, [command]) => {
      const CommandCtor = presignableCommands[command] as any;
      const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => getSignedUrl(client as any, new CommandCtor(args), options),
        catch: (e) => {
            if (e instanceof Error) {
              return S3RequestPresignerError({
                ...e,
                name: "S3RequestPresignerError",
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
    }, {}) as PresignedS3Service;
  });
  
  /**
   * @since 1.0.0
   * @category layers
   */
  export const BasePresignedS3ServiceLayer = Layer.effect(
    PresignedS3Service,
    makeS3RequestPresignerService,
  );
  
  /**
   * @since 1.0.0
   * @category layers
   */
  export const PresignedS3ServiceLayer = BasePresignedS3ServiceLayer.pipe(
    Layer.provide(S3ClientInstanceLayer),
  );
  
  /**
   * @since 1.0.0
   * @category layers
   */
  export const DefaultPresignedS3ServiceLayer = PresignedS3ServiceLayer.pipe(
    Layer.provide(DefaultS3ClientConfigLayer),
  );
  