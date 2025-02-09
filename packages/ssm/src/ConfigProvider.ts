/**
 * @since 1.0.0
 */
import { SSMService } from "@effect-aws/client-ssm";
import type { Config, Layer } from "effect";
import {
  Array,
  Cause,
  ConfigError,
  ConfigProvider,
  ConfigProviderPathPatch,
  Effect,
  HashSet,
  Option,
  pipe,
} from "effect";

/**
 * A config provider that loads configuration from AWS Systems Manager Parameter Store.
 *
 * @since 1.0.0
 * @category constructors
 */
export const fromParameterStore = (config?: {
  pathDelim?: string;
  serviceLayer?: Layer.Layer<SSMService, never, never>;
}): ConfigProvider.ConfigProvider => {
  const { pathDelim, serviceLayer } = Object.assign(
    {},
    { pathDelim: "_", serviceLayer: SSMService.defaultLayer },
    config,
  );
  const makePathString = (path: ReadonlyArray<string>): string => pipe(path, Array.join(pathDelim));
  const unmakePathString = (pathString: string): ReadonlyArray<string> => pathString.split(pathDelim);

  const load = <A>(
    path: ReadonlyArray<string>,
    primitive: Config.Config.Primitive<A>,
  ): Effect.Effect<Array<A>, ConfigError.ConfigError> => {
    const pathString = makePathString(path);
    return SSMService.getParameter({
      Name: pathString,
      WithDecryption: true,
    }).pipe(
      Effect.flatMap((value) => Option.fromNullable(value.Parameter?.Value)),
      Effect.catchTag("ParameterNotFound", () =>
        Effect.fail(
          ConfigError.MissingData(
            path as Array<string>,
            `Expected ${pathString} parameter to exist in AWS Systems Manager Parameter Store`,
          ),
        )),
      Effect.catchTag("ParameterVersionNotFound", () =>
        Effect.fail(
          ConfigError.MissingData(
            path as Array<string>,
            `Expected ${pathString} parameter version to exist in AWS Systems Manager Parameter Store`,
          ),
        )),
      Effect.catchTag("NoSuchElementException", () =>
        Effect.fail(
          ConfigError.MissingData(
            path as Array<string>,
            `Expected ${pathString} to exist in AWS Systems Manager Parameter Store`,
          ),
        )),
      Effect.catchTag("InvalidKeyId", () =>
        Effect.fail(
          ConfigError.InvalidData(
            path as Array<string>,
            "Invalid key ID when retrieving configuration from AWS Systems Manager Parameter Store",
          ),
        )),
      Effect.catchAllCause((cause) =>
        Cause.isFailType(cause) && ConfigError.isConfigError(cause.error)
          ? Effect.fail(cause.error)
          : Effect.fail(
            ConfigError.SourceUnavailable(
              path as Array<string>,
              "Failed to load configuration from AWS Systems Manager Parameter Store",
              cause,
            ),
          )
      ),
      Effect.flatMap((value) =>
        pipe(
          primitive.parse(value),
          Effect.mapBoth({
            onFailure: ConfigError.prefixed(path as Array<string>),
            onSuccess: Array.of,
          }),
        )
      ),
      Effect.provide(serviceLayer),
    );
  };

  const enumerateChildren = (
    path: ReadonlyArray<string>,
  ): Effect.Effect<HashSet.HashSet<string>, ConfigError.ConfigError> =>
    SSMService.describeParameters({}).pipe(
      Effect.flatMap((params) => Option.fromNullable(params.Parameters)),
      Effect.map(Array.map((param) => Option.fromNullable(param.Name))),
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
