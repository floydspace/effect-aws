/**
 * @since 1.0.0
 */
import { SSMService } from "@effect-aws/client-ssm";
import * as Array from "effect/Array";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import * as Option from "effect/Option";

/**
 * @since 1.2.0
 * @category models
 */
export interface FromParameterStoreConfig {
  readonly pathDelim: string;
}

/**
 * A config provider that loads configuration from AWS Systems Manager Parameter Store.
 *
 * @since 1.0.0
 * @category constructors
 *
 * @deprecated Use `ConfigProvider.withParameterStoreConfigProvider` or `ConfigProvider.setParameterStoreConfigProvider` instead.
 */
export const fromParameterStore: (config?: Partial<FromParameterStoreConfig>) => Effect.Effect<
  ConfigProvider.ConfigProvider,
  never,
  SSMService
> = Effect
  .fnUntraced(
    function*(config) {
      const { pathDelim } = Object.assign({}, { pathDelim: "_" }, config);
      const makePathString = (path: ReadonlyArray<string>): string => pipe(path, Array.join(pathDelim));

      const svc = yield* SSMService;

      return ConfigProvider.make((path) => {
        const pathString = makePathString(path.map(String));
        return svc.getParameter({ Name: pathString }).pipe(
          Effect.map((value) => Option.fromNullishOr(value.Parameter?.Value)),
          Effect.catchTag("ParameterNotFound", () => Effect.succeedNone),
          Effect.catchTag("ParameterVersionNotFound", () => Effect.succeedNone),
          Effect.map(Option.map(ConfigProvider.makeValue)),
          Effect.map(Option.getOrUndefined),
          Effect.mapError((cause) =>
            new ConfigProvider.SourceError({
              message: "Failed to load configuration from AWS Systems Manager Parameter Store",
              cause,
            })
          ),
        );
      });
    },
  );

/**
 * Sets the current `ConfigProvider` that loads configuration from AWS Systems Manager Parameter Store.
 *
 * @since 1.2.0
 * @category config
 */
export const setParameterStoreConfigProvider = (config?: Partial<FromParameterStoreConfig>) =>
  ConfigProvider.layer(fromParameterStore(config));

/**
 * Executes the specified workflow with the parameter store configuration provider.
 *
 * @since 1.2.0
 * @category config
 */
export const withParameterStoreConfigProvider = (config?: Partial<FromParameterStoreConfig>) =>
  Effect.provide(setParameterStoreConfigProvider(config));
