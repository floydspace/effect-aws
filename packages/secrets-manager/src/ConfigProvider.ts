/**
 * @since 1.0.0
 */
import { SecretsManagerService } from "@effect-aws/client-secrets-manager";
import * as Array from "effect/Array";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import * as Option from "effect/Option";

/**
 * @since 1.2.0
 * @category models
 */
export interface FromSecretsManagerConfig {
  readonly pathDelim: string;
}

/**
 * A config provider that loads configuration from AWS Secrets Manager.
 *
 * @since 1.0.0
 * @category constructors
 *
 * @deprecated Use `ConfigProvider.withSecretsManagerConfigProvider` or `ConfigProvider.setSecretsManagerConfigProvider` instead.
 */
export const fromSecretsManager: (config?: Partial<FromSecretsManagerConfig>) => Effect.Effect<
  ConfigProvider.ConfigProvider,
  never,
  SecretsManagerService
> = Effect
  .fnUntraced(
    function*(config) {
      const { pathDelim } = Object.assign({}, { pathDelim: "_" }, config);
      const makePathString = (path: ReadonlyArray<string>): string => pipe(path, Array.join(pathDelim));

      const svc = yield* SecretsManagerService;

      return ConfigProvider.make((path) => {
        const pathString = makePathString(path.map(String));
        return svc.getSecretValue({ SecretId: pathString }).pipe(
          Effect.map((value) => Option.fromNullishOr(value.SecretString)),
          Effect.catchTag("ResourceNotFoundException", () => Effect.succeedNone),
          Effect.map(Option.map(ConfigProvider.makeValue)),
          Effect.map(Option.getOrUndefined),
          Effect.mapError((cause) =>
            new ConfigProvider.SourceError({
              message: "Failed to load configuration from AWS Secrets Manager",
              cause,
            })
          ),
        );
      });
    },
  );

/**
 * Sets the current `ConfigProvider` that loads configuration from AWS Secrets Manager.
 *
 * @since 1.2.0
 * @category config
 */
export const setSecretsManagerConfigProvider = (config?: Partial<FromSecretsManagerConfig>) =>
  ConfigProvider.layer(fromSecretsManager(config));

/**
 * Executes the specified workflow with the secrets manager configuration provider.
 *
 * @since 1.2.0
 * @category config
 */
export const withSecretsManagerConfigProvider = (config?: Partial<FromSecretsManagerConfig>) =>
  Effect.provide(setSecretsManagerConfigProvider(config));
