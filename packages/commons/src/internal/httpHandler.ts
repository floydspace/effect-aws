import type { Scope, ServiceMap } from "effect";

export interface RuntimeOptions {
  runtime: ServiceMap.ServiceMap<never>;
  scope: Scope.Scope;
}
