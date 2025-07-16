# AWS Services code generation

**Effect AWS** uses code generation to create the Effectful services. The generated services are based on the AWS SDK v3 specifications which are located in the [`github.com/aws/aws-sdk-js-v3/codegen/sdk-codegen/aws-models`](https://github.com/aws/aws-sdk-js-v3/tree/main/codegen/sdk-codegen/aws-models).

The specs are read by `pnpm codegen-client` cli wizard. This command generates the Effect AWS services in the `packages` directory with the initial AWS client name, then they are published to **npm** as `@effect-aws/<service-name>` packages.

> [!WARNING]
> Some service names are normalized to be more consistent and readable. For example, `apigatewayv2` becomes `api-gateway-v2`, and `apigatewaymanagementapi` becomes `api-gateway-management-api`.

Not all AWS services are generated and published currently, but the goal is to generate all of them.

## How to contribute

To add a new service, follow these steps:

1. Define a new package in [`scripts/client-singularities.ts`](https://github.com/floydspace/effect-aws/tree/main/scripts/client-singularities.ts) (the package must have the same name as the AWS client) and update normalization mapping in [`scripts/utils.ts`](https://github.com/floydspace/effect-aws/tree/main/scripts/utils.ts) if necessary.
2. Run `pnpm default` to generate the packages folder structure using [`projen`](https://github.com/projen/projen).
3. Run `pnpm codegen-client`, select the packages to generate, and follow the prompts to complete the generation process.
4. Commit the changes and open a pull request to the `main` branch.

> [!NOTE]
> The process is not perfect, but at least it reduces creating boilerplate code. In most cases the services generated with the defined steps should work as is, but sometimes it requires some manual adjustments.
