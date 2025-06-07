import type { javascript, Project } from "projen";
import { Component, TextFile } from "projen";
import singularities from "../scripts/client-singularities.js";
import { normalizeServiceName } from "../scripts/utils.js";

export interface ReadmeOptions {
  readonly org: string;
}

export class Readme extends Component {
  public static of(project: Project): Readme | undefined {
    const isBuildUtils = (o: Component): o is Readme => o instanceof Readme;
    return project.components.find(isBuildUtils);
  }

  constructor(project: javascript.NodeProject, { org }: ReadmeOptions) {
    super(project);

    const repo = `${org}/${project.name}`;

    const genVersionBadge = (pkgName: string) =>
      `[![npm version](https://img.shields.io/npm/v/%40${project.name}%2F${pkgName}?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@${project.name}/${pkgName})`;
    const genDownloadsBadge = (pkgName: string) =>
      `[![npm downloads](https://img.shields.io/npm/dm/%40${project.name}%2F${pkgName})](https://www.npmjs.com/package/@${project.name}/${pkgName})`;
    const genBadges = (pkgName: string) => `${genVersionBadge(pkgName)} ${genDownloadsBadge(pkgName)}`;

    new TextFile(project, "README.md", {
      lines: [
        `# Effect AWS Monorepo`,
        "",
        "> A collection of libraries simplifying AWS integrations within the Effect ecosystem",
        "",
        "[![Watch the video](https://img.youtube.com/vi/Cg8Hv5nN1-A/0.jpg)](https://www.youtube.com/watch?v=Cg8Hv5nN1-A)",
        "",
        "## Monorepo Structure",
        "",
        "The Effect AWS monorepo is organized into clients (having same name as native AWS clients) and helper packages. Below is an overview of the packages included:",
        "",
        "| Package                           | Description                                                                                 |                                       |                                                             |",
        "|-----------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------|-------------------------------------------------------------|",
        `| \`@effect-aws/commons\`             | Common utilities for Effectful AWS clients                                                             | ${
          genBadges("commons")
        } | [README](https://github.com/${repo}/blob/main/packages/commons/README.md) |`,
        ...Object.keys(singularities).map((pkgName) =>
          `| \`@${project.name}/${pkgName}\` | Effectful [${
            singularities[pkgName].description.replace(/^Effectful /, "")
          }](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/${
            normalizeServiceName(pkgName.replace(/^client-/, ""))
          }) | ${genBadges(pkgName)} | [README](https://github.com/${repo}/blob/main/packages/${pkgName}/README.md) |`
        ),
        `| \`@${project.name}/http-handler\`                 | Effectful HttpHandler for AWS SDK                                                                 | ${
          genBadges("http-handler")
        } | [README](https://github.com/${repo}/blob/main/packages/http-handler/README.md) |`,
        `| \`@${project.name}/lambda\`                 | Effectful AWS Lambda handler                                                                 | ${
          genBadges("lambda")
        } | [README](https://github.com/${repo}/blob/main/packages/lambda/README.md) |`,
        `| \`@${project.name}/powertools-logger\`       | Effectful [Powertools Logger for AWS Lambda](https://docs.powertools.aws.dev/lambda/typescript/latest/core/logger/) | ${
          genBadges("powertools-logger")
        } | [README](https://github.com/${repo}/blob/main/packages/powertools-logger/README.md) |`,
        `| \`@${project.name}/powertools-tracer\`       | Effectful [Powertools Tracer for AWS Lambda](https://docs.powertools.aws.dev/lambda/typescript/latest/core/tracer/) | ${
          genBadges("powertools-tracer")
        } | [README](https://github.com/${repo}/blob/main/packages/powertools-tracer/README.md) |`,
        `| \`@${project.name}/s3\`         | Effectful AWS S3 functions                                                       | ${
          genBadges("s3")
        } | [README](https://github.com/${repo}/blob/main/packages/s3/README.md) |`,
        `| \`@${project.name}/secrets-manager\`         | Effectful AWS Secrets Manager functions                                                       | ${
          genBadges("secrets-manager")
        } | [README](https://github.com/${repo}/blob/main/packages/secrets-manager/README.md) |`,
        `| \`@${project.name}/ssm\`                     | Effectful AWS SSM functions                                                                   | ${
          genBadges("ssm")
        } | [README](https://github.com/${repo}/blob/main/packages/ssm/README.md) |`,
        "",
        "# Documentation",
        "",
        "## API Reference",
        "",
        `For a complete API reference of the \`effect-aws\` packages, see the [Effect AWS API documentation](https://${org}.github.io/${project.name}).`,
        "",
        "# Contributing Guidelines",
        "",
        "Thank you for considering contributing to our project! Here are some guidelines to help you get started:",
        "",
        "## Reporting Bugs",
        "",
        `If you have found a bug, please open an issue on our [issue tracker](https://github.com/${repo}/issues) and provide as much detail as possible. This should include:`,
        "",
        "- A clear and concise description of the problem",
        "- Steps to reproduce the problem",
        "- The expected behavior",
        "- The actual behavior",
        "- Any relevant error messages or logs",
        "",
        "## Suggesting Enhancements",
        "",
        `If you have an idea for an enhancement or a new feature, please open an issue on our [issue tracker](https://github.com/${repo}/issues) and provide as much detail as possible. This should include:`,
        "",
        "- A clear and concise description of the enhancement or feature",
        "- Any potential benefits or use cases",
        "- Any potential drawbacks or trade-offs",
        "",
        "## Pull Requests",
        "",
        "We welcome contributions via pull requests! Here are some guidelines to help you get started:",
        "",
        "1. Fork the repository and clone it to your local machine.",
        "2. Create a new branch for your changes: `git checkout -b my-new-feature`",
        "3. Install dependencies: `pnpm install` (`pnpm@9.x`, using `corepack` or `nix` preferred)",
        "    - if you introduce new dependencies, please use `.projenrc.ts` to add them",
        "    - then run `pnpm default` to update the project",
        "4. Make your changes and add tests if applicable.",
        "5. Run the tests: `pnpm test`",
        "6. Commit your changes: `git commit -am 'Add some feature'`",
        "7. Push your changes to your fork: `git push origin my-new-feature`",
        "8. Open a pull request against our `main` branch.",
        "",
        "### Pull Request Guidelines",
        "",
        "- Please make sure your changes are consistent with the project's existing style and conventions.",
        "- Please write clear commit messages and include a summary of your changes in the pull request description.",
        "- Please make sure all tests pass and add new tests as necessary.",
        "- If your change requires documentation, please update the relevant documentation.",
        "- Please be patient! We will do our best to review your pull request as soon as possible.",
        "",
        "## License",
        "",
        "By contributing to this project, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).",
        "",
      ],
    });
  }
}
