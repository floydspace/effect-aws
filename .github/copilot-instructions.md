# Effect AWS - Copilot Instructions

Monorepo of Effect-based wrappers for AWS SDK v3 clients (pnpm@10.x, TypeScript ESM).

See [AGENTS.md](../../AGENTS.md) for critical rules and commands. Detailed guides:

- [Code style & formatting](agents/code-style.md)
- [Effect patterns](agents/effect-patterns.md)
- [Testing patterns](agents/testing.md)
- [Code generation & Projen](agents/codegen.md)

## Architecture

- `packages/client-*` -- auto-generated Effect wrappers for 57+ AWS SDK v3 clients (**do not edit src/**)
- `packages/commons` -- shared utilities: `Service.ts` (command execution), `ServiceLogger.ts`, errors
- `packages/{dynamodb,s3,lambda,...}` -- higher-level helper libraries
- `packages/http-handler` -- Effect-based HTTP handler for AWS SDK middleware
- `packages/powertools-logger` / `powertools-tracer` -- AWS Lambda Powertools integration
- `scripts/` -- code generation tooling
- `projenrc/` -- Projen components for monorepo config

## Workspace Dependencies

In `.projenrc.ts`:
- `workspaceDeps: [commons]` for internal compile-time dependencies
- `workspacePeerDeps: [clientPackage]` for helper packages (e.g., `dynamodb` depends on `client-dynamodb`)
- Effect peer dep range: `"effect@>=3.0.4 <4.0.0"`
