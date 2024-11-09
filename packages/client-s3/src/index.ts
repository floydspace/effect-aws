export * from "./Errors";
export * from "./S3ClientInstance";
export * from "./S3ClientInstanceConfig";
export * from "./S3Service";
import { S3Service } from "./S3Service";

/**
 * @since 1.0.0
 * @category models
 * @alias S3Service
 */
export const S3 = S3Service;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use S3.baseLayer instead
 */
export const BaseS3ServiceLayer = S3Service.baseLayer;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use S3.layer instead
 */
export const S3ServiceLayer = S3Service.layer;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use S3.defaultLayer instead
 */
export const DefaultS3ServiceLayer = S3Service.defaultLayer;
