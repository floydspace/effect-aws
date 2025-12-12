import { Changesets } from "@floydspace/projen-components";
import path from "node:path";
import { YamlFile } from "projen";
import { BuildUtils, Docgen, Eslint, MonorepoProject, TypeScriptLibProject, Vitest } from "./projenrc/index.js";
import { Readme } from "./projenrc/readme.js";
import singularities from "./scripts/client-singularities.js";
import { normalizePackageName } from "./scripts/utils.js";

const org = "floydspace";
const name = "effect-aws";
const repo = `${org}/${name}`;

const project = new MonorepoProject({
  name,
  description: "Effectful AWS",
  repository: `github:${repo}`,
  homepage: `https://${name}.website`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  typescriptVersion: "^5.4.2",
  devDeps: ["@floydspace/projen-components"],
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new BuildUtils(project);

new Changesets(project, {
  repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
  linked: [`@${name}/client-*`],
  ignore: [`@${name}/lib-*`],
});
project.package.manifest.pnpm.patchedDependencies = {
  "@changesets/assemble-release-plan": "patches/@changesets__assemble-release-plan.patch",
};

new Docgen(project);
new Readme(project, { org });

new Eslint(project);
new Vitest(project, { sharedSetupFiles: ["vitest.setup.ts"] });
project.addDevDeps("vitest-mock-extended");
project.addDevDeps("aws-sdk-client-mock", "aws-sdk-client-mock-vitest");

const effectDeps = ["effect"];

project.addScripts({ "codegen-client": "tsx ./scripts/codegen-cli.ts" });
project.addDeps(...effectDeps, "@effect/cli", "@effect/platform", "@effect/platform-node");
project.addDevDeps("@effect/language-service", "@effect/vitest");
project.tsconfigBase?.file.addOverride("compilerOptions.plugins", [
  { name: "@effect/language-service" },
]);

// Pages
project.addDevDeps("vitepress", "vitepress-plugin-group-icons");
project.addTask("pages:dev", { exec: "vitepress dev pages" });
project.addTask("pages:build", { exec: "vitepress build pages" });
project.addTask("pages:preview", { exec: "vitepress preview pages" });

const commonDevDeps = [...effectDeps];
const commonPeerDeps = ["effect@>=3.0.4 <4.0.0"];

const commons = new TypeScriptLibProject({
  parent: project,
  name: "commons",
  description: "Effectful AWS common library",
  deps: ["@smithy/types", "@smithy/smithy-client", "@smithy/protocol-http"],
  devDeps: [...effectDeps, "@aws-sdk/middleware-logger"],
  peerDeps: commonPeerDeps,
});

const s3Client = new TypeScriptLibProject({
  parent: project,
  name: "client-s3",
  description: singularities["client-s3"].description,
  deps: ["@aws-sdk/client-s3@^3", "@aws-sdk/s3-request-presigner@^3", "@aws-sdk/types@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
  workspaceDeps: [commons],
});

const allClients = Object.keys(singularities).filter((sn) => sn !== "client-s3");

allClients.forEach((name) => {
  new TypeScriptLibProject({
    parent: project,
    name,
    description: singularities[name].description,
    deps: [`@aws-sdk/${normalizePackageName(name)}@^3`],
    devDeps: commonDevDeps,
    peerDeps: commonPeerDeps,
    workspaceDeps: [commons],
  });
});

const dynamodbClient = TypeScriptLibProject.childOf(project, "client-dynamodb");
const secretsManagerClient = TypeScriptLibProject.childOf(project, "client-secrets-manager");
const ssmClient = TypeScriptLibProject.childOf(project, "client-ssm");

const dynamodb = new TypeScriptLibProject({
  parent: project,
  name: "dynamodb",
  description: "Effectful AWS DynamoDB library & functions",
  deps: ["@aws-sdk/client-dynamodb@^3", "@aws-sdk/lib-dynamodb@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
  workspaceDeps: [commons],
  workspacePeerDeps: [dynamodbClient],
});

new TypeScriptLibProject({
  parent: project,
  name: "lib-dynamodb",
  description: "DEPRECATED Effectful AWS DynamoDB library",
  devDeps: ["@aws-sdk/client-dynamodb@^3", "@aws-sdk/lib-dynamodb@^3"],
  workspaceDeps: [dynamodb],
});

const lambda = new TypeScriptLibProject({
  parent: project,
  name: "lambda",
  description: "Effectful AWS Lambda handler",
  devDeps: [...effectDeps, "@effect/platform", "@effect/platform-node-shared", "@types/aws-lambda"],
  peerDeps: ["effect@>=3.15.5 <4.0.0", "@effect/platform@>=0.83.0", "@effect/platform-node-shared@>=0.36.0"],
  addExamples: true,
});

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  description: "Effectful AWS Lambda Powertools Logger",
  devDeps: [...effectDeps, "@aws-lambda-powertools/commons@2.0.0", "@aws-lambda-powertools/logger@2.0.0"],
  peerDeps: [...commonPeerDeps, "@aws-lambda-powertools/logger@>=2.0.0"],
});

const tracer = new TypeScriptLibProject({
  parent: project,
  name: "powertools-tracer",
  description: "Effectful AWS Lambda Powertools Tracer",
  deps: ["aws-xray-sdk-core@^3.5.3"],
  devDeps: [
    ...effectDeps,
    "@aws-lambda-powertools/commons@2.0.0",
    "@aws-lambda-powertools/tracer@2.0.0",
    "@types/aws-lambda",
  ],
  peerDeps: [...commonPeerDeps, "@aws-lambda-powertools/tracer@>=2.0.0"],
  workspaceDeps: [lambda],
  addExamples: true,
});

tracer.tsconfigExamples?.file.addToArray(
  "references",
  { path: path.relative(tracer.outdir, lambda.outdir) },
);

new TypeScriptLibProject({
  parent: project,
  name: "secrets-manager",
  description: "Effectful AWS Secrets Manager functions",
  devDeps: [...effectDeps, "@aws-sdk/client-secrets-manager@^3", "@fluffy-spoon/substitute"],
  peerDeps: commonPeerDeps,
  workspacePeerDeps: [secretsManagerClient],
});

new TypeScriptLibProject({
  parent: project,
  name: "ssm",
  description: "Effectful AWS SSM functions",
  devDeps: [...effectDeps, "@aws-sdk/client-ssm@^3", "@fluffy-spoon/substitute"],
  peerDeps: commonPeerDeps,
  workspacePeerDeps: [ssmClient],
});

new TypeScriptLibProject({
  parent: project,
  name: "s3",
  description: "Effectful AWS S3 functions",
  devDeps: [...effectDeps, "@effect/platform", "@aws-sdk/client-s3@^3"],
  peerDeps: ["effect@>=3.15.5 <4.0.0", "@effect/platform@>=0.83.0"],
  workspacePeerDeps: [s3Client],
  addExamples: true,
});

new TypeScriptLibProject({
  parent: project,
  name: "http-handler",
  description: "Effectful AWS HTTP handler",
  deps: ["@smithy/types", "@smithy/protocol-http", "@smithy/querystring-builder"],
  devDeps: [...effectDeps, "@effect/platform"],
  peerDeps: ["effect@>=3.15.5 <4.0.0", "@effect/platform@>=0.83.0"],
  workspacePeerDeps: [commons],
});

new TypeScriptLibProject({
  parent: project,
  name: "dsql",
  description: "Effectful AWS Aurora DSQL modules",
  deps: ["@aws-sdk/dsql-signer@^3"],
  devDeps: [...effectDeps],
  peerDeps: ["effect@>=3.15.5 <4.0.0"],
});

project.addGitIgnore("/.direnv"); // flake environment creates .direnv folder
project.addGitIgnore("/docs"); // docs are generated
project.addGitIgnore(".idea");
project.addGitIgnore(".DS_Store");

project.synth();
