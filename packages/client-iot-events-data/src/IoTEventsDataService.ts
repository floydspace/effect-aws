/**
 * @since 1.0.0
 */
import {
  IoTEventsDataServiceException,
  type IoTEventsDataClient,
  type IoTEventsDataClientConfig,
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
  ListAlarmsCommand,
  type ListAlarmsCommandInput,
  type ListAlarmsCommandOutput,
  ListDetectorsCommand,
  type ListDetectorsCommandInput,
  type ListDetectorsCommandOutput,
} from "@aws-sdk/client-iot-events-data";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  InternalFailureError,
  InvalidRequestError,
  ResourceNotFoundError,
  ServiceUnavailableError,
  ThrottlingError,
  SdkError,
  TaggedException,
} from "./Errors.js";
import {
  IoTEventsDataClientInstance,
  IoTEventsDataClientInstanceLayer,
} from "./IoTEventsDataClientInstance.js";
import {
  DefaultIoTEventsDataClientConfigLayer,
  makeDefaultIoTEventsDataClientInstanceConfig,
  IoTEventsDataClientInstanceConfig,
} from "./IoTEventsDataClientInstanceConfig.js";

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
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchDeleteDetectorCommand}
   */
  batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteDetectorCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchDisableAlarmCommand}
   */
  batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDisableAlarmCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchEnableAlarmCommand}
   */
  batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchEnableAlarmCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchPutMessageCommand}
   */
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchPutMessageCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchResetAlarmCommand}
   */
  batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchResetAlarmCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchSnoozeAlarmCommand}
   */
  batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchSnoozeAlarmCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchUpdateDetectorCommand}
   */
  batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchUpdateDetectorCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
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
export const makeIoTEventsDataService = Effect.gen(function* (_) {
  const client = yield* _(IoTEventsDataClientInstance);

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
          if (
            e instanceof IoTEventsDataServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<IoTEventsDataServiceException>
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
  }, {}) as IoTEventsDataService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTEventsDataService extends Effect.Tag(
  "@effect-aws/client-iot-events-data/IoTEventsDataService",
)<IoTEventsDataService, IoTEventsDataService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeIoTEventsDataService,
  ).pipe(
    Layer.provide(IoTEventsDataClientInstanceLayer),
    Layer.provide(DefaultIoTEventsDataClientConfigLayer),
  );
  static readonly layer = (config: IoTEventsDataClientConfig) =>
    Layer.effect(this, makeIoTEventsDataService).pipe(
      Layer.provide(IoTEventsDataClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          IoTEventsDataClientInstanceConfig,
          makeDefaultIoTEventsDataClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTEventsDataClientConfig) => IoTEventsDataClient,
  ) =>
    Layer.effect(this, makeIoTEventsDataService).pipe(
      Layer.provide(
        Layer.effect(
          IoTEventsDataClientInstance,
          Effect.map(makeDefaultIoTEventsDataClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias IoTEventsDataService
 */
export const IoTEventsData = IoTEventsDataService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTEventsData.baseLayer instead
 */
export const BaseIoTEventsDataServiceLayer = Layer.effect(
  IoTEventsDataService,
  makeIoTEventsDataService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTEventsData.layer instead
 */
export const IoTEventsDataServiceLayer = BaseIoTEventsDataServiceLayer.pipe(
  Layer.provide(IoTEventsDataClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTEventsData.defaultLayer instead
 */
export const DefaultIoTEventsDataServiceLayer =
  IoTEventsDataService.defaultLayer;
