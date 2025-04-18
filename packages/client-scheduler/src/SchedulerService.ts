/**
 * @since 1.0.0
 */
import {
  CreateScheduleCommand,
  type CreateScheduleCommandInput,
  type CreateScheduleCommandOutput,
  CreateScheduleGroupCommand,
  type CreateScheduleGroupCommandInput,
  type CreateScheduleGroupCommandOutput,
  DeleteScheduleCommand,
  type DeleteScheduleCommandInput,
  type DeleteScheduleCommandOutput,
  DeleteScheduleGroupCommand,
  type DeleteScheduleGroupCommandInput,
  type DeleteScheduleGroupCommandOutput,
  GetScheduleCommand,
  type GetScheduleCommandInput,
  type GetScheduleCommandOutput,
  GetScheduleGroupCommand,
  type GetScheduleGroupCommandInput,
  type GetScheduleGroupCommandOutput,
  ListScheduleGroupsCommand,
  type ListScheduleGroupsCommandInput,
  type ListScheduleGroupsCommandOutput,
  ListSchedulesCommand,
  type ListSchedulesCommandInput,
  type ListSchedulesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  type SchedulerClient,
  type SchedulerClientConfig,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateScheduleCommand,
  type UpdateScheduleCommandInput,
  type UpdateScheduleCommandOutput,
} from "@aws-sdk/client-scheduler";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SchedulerClientInstance.js";
import * as SchedulerServiceConfig from "./SchedulerServiceConfig.js";

const commands = {
  CreateScheduleCommand,
  CreateScheduleGroupCommand,
  DeleteScheduleCommand,
  DeleteScheduleGroupCommand,
  GetScheduleCommand,
  GetScheduleGroupCommand,
  ListScheduleGroupsCommand,
  ListSchedulesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateScheduleCommand,
};

interface SchedulerService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateScheduleCommand}
   */
  createSchedule(
    args: CreateScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateScheduleCommandOutput,
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateScheduleGroupCommand}
   */
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateScheduleGroupCommandOutput,
    SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DeleteScheduleCommand}
   */
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteScheduleCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DeleteScheduleGroupCommand}
   */
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteScheduleGroupCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetScheduleCommand}
   */
  getSchedule(
    args: GetScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetScheduleCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetScheduleGroupCommand}
   */
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetScheduleGroupCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListScheduleGroupsCommand}
   */
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListScheduleGroupsCommandOutput,
    SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListSchedulesCommand}
   */
  listSchedules(
    args: ListSchedulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSchedulesCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link UpdateScheduleCommand}
   */
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScheduleCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSchedulerService = Effect.gen(function*() {
  const client = yield* Instance.SchedulerClientInstance;

  return yield* Service.fromClientAndCommands<SchedulerService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SchedulerServiceConfig.toSchedulerClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SchedulerService extends Effect.Tag("@effect-aws/client-scheduler/SchedulerService")<
  SchedulerService,
  SchedulerService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSchedulerService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SchedulerService.Config) =>
    Layer.effect(this, makeSchedulerService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SchedulerServiceConfig.setSchedulerServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SchedulerClientConfig) => SchedulerClient,
  ) =>
    Layer.effect(this, makeSchedulerService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SchedulerClientInstance,
          Effect.map(SchedulerServiceConfig.toSchedulerClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SchedulerService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SchedulerClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
