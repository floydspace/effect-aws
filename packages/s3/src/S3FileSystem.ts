import type { S3Service } from "@effect-aws/client-s3";
import type { FileSystem } from "@effect/platform/FileSystem";
import type { Config, ConfigError, Layer } from "effect";
import * as internal from "./internal/s3FileSystem.js";

/**
 * @category models
 * @since 0.1.0
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
  config: Config.Config.Wrap<S3FileSystemConfig>,
) => Layer.Layer<FileSystem, ConfigError.ConfigError, S3Service> = internal.layerConfig;
