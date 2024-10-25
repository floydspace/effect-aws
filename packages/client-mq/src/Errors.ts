import type {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "@aws-sdk/client-mq";
import { Data } from "effect";

export const AllServiceErrors = [
  "BadRequestException",
  "ConflictException",
  "ForbiddenException",
  "InternalServerErrorException",
  "NotFoundException",
  "UnauthorizedException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BadRequestError = TaggedException<BadRequestException>;
export type ConflictError = TaggedException<ConflictException>;
export type ForbiddenError = TaggedException<ForbiddenException>;
export type InternalServerError = TaggedException<InternalServerErrorException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
