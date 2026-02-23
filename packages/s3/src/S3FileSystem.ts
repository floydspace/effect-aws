/**
 * @since 0.1.0
 */
import type { S3Service } from "@effect-aws/client-s3";
import type * as Config from "effect/Config";
import type { FileSystem } from "effect/FileSystem";
import type * as Layer from "effect/Layer";
import * as internal from "./internal/s3FileSystem.js";

/**
 * @since 0.1.0
 * @category models
 */
export interface S3FileSystemConfig {
  readonly bucketName: string;
}

/**
 * @since 0.1.0
 * @category layers
 */
export const layer: (config: S3FileSystemConfig) => Layer.Layer<FileSystem, never, S3Service> = internal.layer;

/**
 * @since 0.1.0
 * @category layers
 */
export const layerConfig: (
  config: Config.Wrap<S3FileSystemConfig>,
) => Layer.Layer<FileSystem, Config.ConfigError, S3Service> = internal.layerConfig;
