import { monorepo } from "@aws/pdk";
import { javascript, YamlFile } from "projen";
import { Changesets, Docgen, TypeScriptLibProject, Vitest } from "./projenrc";

const org = "floydspace";
const name = "effect-aws";
const repo = `${org}/${name}`;

const project = new monorepo.MonorepoTsProject({
  name: name,
  description: "Effectful AWS",
  repository: `github:${repo}`,
  homepage: `https://${org}.github.io/${name}`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  license: "MIT",
  packageManager: javascript.NodePackageManager.PNPM,
  clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
  depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
  monorepoUpgradeDeps: false,
  typescriptVersion: "^5.4.2",
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new Changesets(project, {
  repo: repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

new Docgen(project);

new Vitest(project);

project.addScripts({
  "codegen-client": "tsx ./scripts/codegen-client.ts",
});
project.addDeps("effect@^3.0.0", "enquirer@^2.4.1");

const commonDeps = ["@aws-sdk/types@^3"];
const commonDevDeps = ["aws-sdk-client-mock", "aws-sdk-client-mock-jest"];
const commonPeerDeps = ["effect@>=3.0.0 <4.0.0"];

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  deps: ["@aws-lambda-powertools/logger@^1.9.0"], // lower versions are not supported, raise an issue if you need it
  devDeps: [
    "@types/aws-lambda", // peer for @aws-lambda-powertools/logger
  ],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-api-gateway-management-api",
  deps: [...commonDeps, "@aws-sdk/client-apigatewaymanagementapi@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const dynamodbClient = new TypeScriptLibProject({
  parent: project,
  name: "client-dynamodb",
  deps: [...commonDeps, "@aws-sdk/client-dynamodb@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const dynamodbLib = new TypeScriptLibProject({
  parent: project,
  name: "lib-dynamodb",
  deps: [
    ...commonDeps,
    "@aws-sdk/client-dynamodb@^3",
    "@aws-sdk/lib-dynamodb@^3",
  ],
  devDeps: commonDevDeps,
  peerDeps: [...commonPeerDeps, dynamodbClient.package.packageName],
});

const clients = [
  {name: 'ec2'},
  {name: 'elasticache'},
  {name: 'eventbridge'},
  {name: 'iam'},
  {name: 'lambda'},
  {name: 's3', extraDeps: ['@aws-sdk/s3-request-presigner@^3']},
  {name: 'sfn'},
  {name: 'sns'},
  {name: 'sqs'},
];

for (const {name, extraDeps = []} of clients) {
  new TypeScriptLibProject({
    parent: project,
    name: `client-${name}`,
    deps: [...commonDeps, `@aws-sdk/client-${name}@^3`, ...extraDeps],
    devDeps: commonDevDeps,
    peerDeps: commonPeerDeps,
  });
}

new TypeScriptLibProject({
  parent: project,
  name: "lambda",
  devDeps: ["@types/aws-lambda"],
  peerDeps: commonPeerDeps,
});

project.addImplicitDependency(dynamodbLib, dynamodbClient);

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder
project.addGitIgnore("docs/"); // docs are generated

project.synth();
