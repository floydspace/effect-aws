/**
 * @since 1.0.0
 */
import {
  DefaultSecretsManagerServiceLayer,
  SecretsManagerService,
} from "@effect-aws/client-secrets-manager";
import {
  Array,
  Cause,
  Config,
  ConfigError,
  ConfigProvider,
  ConfigProviderPathPatch,
  Effect,
  HashSet,
  Layer,
  Option,
  pipe,
} from "effect";

/**
 * A config provider that loads configuration from AWS Secrets Manager.
 *
 * @since 1.0.0
 * @category constructors
 */
export const fromSecretsManager = (config?: {
  pathDelim?: string;
  serviceLayer?: Layer.Layer<SecretsManagerService, never, never>;
}): ConfigProvider.ConfigProvider => {
  const { pathDelim, serviceLayer } = Object.assign(
    {},
    { pathDelim: "_", serviceLayer: DefaultSecretsManagerServiceLayer },
    config,
  );
  const makePathString = (path: ReadonlyArray<string>): string =>
    pipe(path, Array.join(pathDelim));
  const unmakePathString = (pathString: string): ReadonlyArray<string> =>
    pathString.split(pathDelim);

  const load = <A>(
    path: ReadonlyArray<string>,
    primitive: Config.Config.Primitive<A>,
  ): Effect.Effect<Array<A>, ConfigError.ConfigError> => {
    const pathString = makePathString(path);
    return SecretsManagerService.getSecretValue({ SecretId: pathString }).pipe(
      Effect.flatMap((value) => Option.fromNullable(value.SecretString)),
      Effect.catchTag("ResourceNotFoundException", () =>
        Effect.fail(
          ConfigError.MissingData(
            path as Array<string>,
            `Expected ${pathString} to exist in AWS Secrets Manager`,
          ),
        ),
      ),
      Effect.catchTag("NoSuchElementException", () =>
        Effect.fail(
          ConfigError.MissingData(
            path as Array<string>,
            `Expected ${pathString} to exist in AWS Secrets Manager`,
          ),
        ),
      ),
      Effect.catchTag("InvalidParameterException", () =>
        Effect.fail(
          ConfigError.InvalidData(
            path as Array<string>,
            "Invalid parameter provided to AWS Secrets Manager",
          ),
        ),
      ),
      Effect.catchTag("InvalidRequestException", () =>
        Effect.fail(
          ConfigError.InvalidData(
            path as Array<string>,
            "Invalid request to AWS Secrets Manager",
          ),
        ),
      ),
      Effect.catchAllCause((cause) =>
        Cause.isFailType(cause) && ConfigError.isConfigError(cause.error)
          ? Effect.fail(cause.error)
          : Effect.fail(
              ConfigError.SourceUnavailable(
                path as Array<string>,
                "Failed to load configuration from AWS Secrets Manager",
                cause,
              ),
            ),
      ),
      Effect.flatMap((value) =>
        pipe(
          primitive.parse(value),
          Effect.mapBoth({
            onFailure: ConfigError.prefixed(path as Array<string>),
            onSuccess: Array.of,
          }),
        ),
      ),
      Effect.provide(serviceLayer),
    );
  };

  const enumerateChildren = (
    path: ReadonlyArray<string>,
  ): Effect.Effect<HashSet.HashSet<string>, ConfigError.ConfigError> =>
    SecretsManagerService.listSecrets({}).pipe(
      Effect.flatMap((secrets) => Option.fromNullable(secrets.SecretList)),
      Effect.map(Array.map((secret) => Option.fromNullable(secret.Name))),
      Effect.flatMap(Option.all),
      Effect.orDie,
      Effect.map((keys) => {
        const keyPaths = keys.map(unmakePathString);
        const filteredKeyPaths = keyPaths
          .filter((keyPath) => {
            for (let i = 0; i < path.length; i++) {
              const pathComponent = pipe(path, Array.unsafeGet(i));
              const currentElement = keyPath[i];
              if (
                currentElement === undefined ||
                pathComponent !== currentElement
              ) {
                return false;
              }
            }
            return true;
          })
          .flatMap((keyPath) => keyPath.slice(path.length, path.length + 1));
        return HashSet.fromIterable(filteredKeyPaths);
      }),
      Effect.provide(serviceLayer),
    );

  return ConfigProvider.fromFlat(
    ConfigProvider.makeFlat({
      load,
      enumerateChildren,
      patch: ConfigProviderPathPatch.empty,
    }),
  );
};
