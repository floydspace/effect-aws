import type { Runtime, Scope } from "effect";

export interface RuntimeOptions {
  runtime: Runtime.Runtime<never>;
  scope: Scope.Scope;
}
