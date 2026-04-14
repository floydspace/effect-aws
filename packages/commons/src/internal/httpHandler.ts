import type { Context } from "effect/Context";
import type { Scope } from "effect/Scope";

export interface RuntimeOptions {
  runtime: Context<never>;
  scope: Scope;
}
