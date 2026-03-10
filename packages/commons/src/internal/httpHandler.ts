import type * as Runtime from "effect/Runtime";
import type * as Scope from "effect/Scope";

export interface RuntimeOptions {
  runtime: Runtime.Runtime<never>;
  scope: Scope.Scope;
}
