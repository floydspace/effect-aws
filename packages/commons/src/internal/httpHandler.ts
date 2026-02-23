import type { Scope } from "effect/Scope";
import type { ServiceMap } from "effect/ServiceMap";

export interface RuntimeOptions {
  runtime: ServiceMap<never>;
  scope: Scope;
}
