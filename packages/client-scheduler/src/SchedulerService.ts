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
  SchedulerServiceException,
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
import { Data, Effect, Layer, Record } from "effect";
import { AllServiceErrors, SdkError } from "./Errors.js";
import type {
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  TaggedException,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { SchedulerClientInstance, SchedulerClientInstanceLayer } from "./SchedulerClientInstance.js";
import {
  DefaultSchedulerClientConfigLayer,
  makeDefaultSchedulerClientInstanceConfig,
  SchedulerClientInstanceConfig,
} from "./SchedulerClientInstanceConfig.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

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
export const makeSchedulerService = Effect.gen(function*(_) {
  const client = yield* _(SchedulerClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (e instanceof SchedulerServiceException && AllServiceErrors.includes(e.name)) {
            const ServiceException = Data.tagged<
              TaggedException<SchedulerServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
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
  }, {}) as SchedulerService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class SchedulerService extends Effect.Tag("@effect-aws/client-scheduler/SchedulerService")<
  SchedulerService,
  SchedulerService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSchedulerService).pipe(
    Layer.provide(SchedulerClientInstanceLayer),
    Layer.provide(DefaultSchedulerClientConfigLayer),
  );
  static readonly layer = (config: SchedulerClientConfig) =>
    Layer.effect(this, makeSchedulerService).pipe(
      Layer.provide(SchedulerClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          SchedulerClientInstanceConfig,
          makeDefaultSchedulerClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SchedulerClientConfig) => SchedulerClient,
  ) =>
    Layer.effect(this, makeSchedulerService).pipe(
      Layer.provide(
        Layer.effect(
          SchedulerClientInstance,
          Effect.map(makeDefaultSchedulerClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias SchedulerService
 */
export const Scheduler = SchedulerService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Scheduler.baseLayer instead
 */
export const BaseSchedulerServiceLayer = Layer.effect(
  SchedulerService,
  makeSchedulerService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Scheduler.layer instead
 */
export const SchedulerServiceLayer = BaseSchedulerServiceLayer.pipe(
  Layer.provide(SchedulerClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Scheduler.defaultLayer instead
 */
export const DefaultSchedulerServiceLayer = SchedulerService.defaultLayer;
