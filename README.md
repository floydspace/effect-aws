WIP.

Effect Docs: https://www.effect.website<br>

`@effect-aws` is a collection of libraries for working with AWS services wrapped in the Effect type, to make them easier to use with the Effect ecosystem.

# Roadmap

- [x] PowerTools Logger
- [x] S3 Client
- [x] IAM Client
- [x] DynamoDB Client
- [x] DynamoDB Document Client (lib-dynamodb)
- [x] SQS Client
- [x] SNS Client
- [x] EventBridge Client
- [x] Lambda Client
- [x] Step Functions Client
- [x] CodeDeploy Client
- [ ] Other AWS Clients (By Request)

# Contributing Guidelines

Thank you for considering contributing to our project! Here are some guidelines to help you get started:

## Reporting Bugs

If you have found a bug, please open an issue on our [issue tracker](https://github.com/floydspace/effect-aws/issues) and provide as much detail as possible. This should include:

- A clear and concise description of the problem
- Steps to reproduce the problem
- The expected behavior
- The actual behavior
- Any relevant error messages or logs

## Suggesting Enhancements

If you have an idea for an enhancement or a new feature, please open an issue on our [issue tracker](https://github.com/floydspace/effect-aws/issues) and provide as much detail as possible. This should include:

- A clear and concise description of the enhancement or feature
- Any potential benefits or use cases
- Any potential drawbacks or trade-offs

## Pull Requests

We welcome contributions via pull requests! Here are some guidelines to help you get started:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your changes: `git checkout -b my-new-feature`
3. Install dependencies: `pnpm install` (`pnpm@8.x`, using `corepack` or `nix` preferred)
4. Make your changes and add tests if applicable.
5. Run the tests: `pnpm test`
6. Commit your changes: `git commit -am 'Add some feature'`
7. Push your changes to your fork: `git push origin my-new-feature`
8. Open a pull request against our `main` branch.

### Pull Request Guidelines

- Please make sure your changes are consistent with the project's existing style and conventions.
- Please write clear commit messages and include a summary of your changes in the pull request description.
- Please make sure all tests pass and add new tests as necessary.
- If your change requires documentation, please update the relevant documentation.
- Please be patient! We will do our best to review your pull request as soon as possible.

## License

By contributing to this project, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).
