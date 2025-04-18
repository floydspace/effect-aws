/**
 * @since 1.0.0
 */
import {
  BatchAcknowledgeAlarmCommand,
  type BatchAcknowledgeAlarmCommandInput,
  type BatchAcknowledgeAlarmCommandOutput,
  BatchDeleteDetectorCommand,
  type BatchDeleteDetectorCommandInput,
  type BatchDeleteDetectorCommandOutput,
  BatchDisableAlarmCommand,
  type BatchDisableAlarmCommandInput,
  type BatchDisableAlarmCommandOutput,
  BatchEnableAlarmCommand,
  type BatchEnableAlarmCommandInput,
  type BatchEnableAlarmCommandOutput,
  BatchPutMessageCommand,
  type BatchPutMessageCommandInput,
  type BatchPutMessageCommandOutput,
  BatchResetAlarmCommand,
  type BatchResetAlarmCommandInput,
  type BatchResetAlarmCommandOutput,
  BatchSnoozeAlarmCommand,
  type BatchSnoozeAlarmCommandInput,
  type BatchSnoozeAlarmCommandOutput,
  BatchUpdateDetectorCommand,
  type BatchUpdateDetectorCommandInput,
  type BatchUpdateDetectorCommandOutput,
  DescribeAlarmCommand,
  type DescribeAlarmCommandInput,
  type DescribeAlarmCommandOutput,
  DescribeDetectorCommand,
  type DescribeDetectorCommandInput,
  type DescribeDetectorCommandOutput,
  type IoTEventsDataClient,
  type IoTEventsDataClientConfig,
  ListAlarmsCommand,
  type ListAlarmsCommandInput,
  type ListAlarmsCommandOutput,
  ListDetectorsCommand,
  type ListDetectorsCommandInput,
  type ListDetectorsCommandOutput,
} from "@aws-sdk/client-iot-events-data";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  InternalFailureError,
  InvalidRequestError,
  ResourceNotFoundError,
  ServiceUnavailableError,
  ThrottlingError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IoTEventsDataClientInstance.js";
import * as IoTEventsDataServiceConfig from "./IoTEventsDataServiceConfig.js";

const commands = {
  BatchAcknowledgeAlarmCommand,
  BatchDeleteDetectorCommand,
  BatchDisableAlarmCommand,
  BatchEnableAlarmCommand,
  BatchPutMessageCommand,
  BatchResetAlarmCommand,
  BatchSnoozeAlarmCommand,
  BatchUpdateDetectorCommand,
  DescribeAlarmCommand,
  DescribeDetectorCommand,
  ListAlarmsCommand,
  ListDetectorsCommand,
};

interface IoTEventsDataService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchAcknowledgeAlarmCommand}
   */
  batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchAcknowledgeAlarmCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchDeleteDetectorCommand}
   */
  batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteDetectorCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchDisableAlarmCommand}
   */
  batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDisableAlarmCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchEnableAlarmCommand}
   */
  batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchEnableAlarmCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchPutMessageCommand}
   */
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchPutMessageCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchResetAlarmCommand}
   */
  batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchResetAlarmCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchSnoozeAlarmCommand}
   */
  batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchSnoozeAlarmCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link BatchUpdateDetectorCommand}
   */
  batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchUpdateDetectorCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link DescribeAlarmCommand}
   */
  describeAlarm(
    args: DescribeAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeDetectorCommand}
   */
  describeDetector(
    args: DescribeDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDetectorCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListAlarmsCommand}
   */
  listAlarms(
    args: ListAlarmsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAlarmsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListDetectorsCommand}
   */
  listDetectors(
    args: ListDetectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDetectorsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTEventsDataService = Effect.gen(function*() {
  const client = yield* Instance.IoTEventsDataClientInstance;

  return yield* Service.fromClientAndCommands<IoTEventsDataService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: IoTEventsDataServiceConfig.toIoTEventsDataClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTEventsDataService extends Effect.Tag("@effect-aws/client-iot-events-data/IoTEventsDataService")<
  IoTEventsDataService,
  IoTEventsDataService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeIoTEventsDataService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IoTEventsDataService.Config) =>
    Layer.effect(this, makeIoTEventsDataService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IoTEventsDataServiceConfig.setIoTEventsDataServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTEventsDataClientConfig) => IoTEventsDataClient,
  ) =>
    Layer.effect(this, makeIoTEventsDataService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IoTEventsDataClientInstance,
          Effect.map(IoTEventsDataServiceConfig.toIoTEventsDataClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IoTEventsDataService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IoTEventsDataClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
