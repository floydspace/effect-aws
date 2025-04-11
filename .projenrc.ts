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
  homepage: `https://${org}.github.io/${name}`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  typescriptVersion: "^5.4.2",
  devDeps: ["@floydspace/projen-components@next"],
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new BuildUtils(project);

new Changesets(project, {
  repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
  linked: [`@${name}/client-*`, `@${name}/lib-*`],
});
project.package.manifest.pnpm.patchedDependencies = {
  "@changesets/assemble-release-plan": "patches/@changesets__assemble-release-plan.patch",
};

new Docgen(project);
new Readme(project, { org });

new Eslint(project);
new Vitest(project, { sharedSetupFiles: ["vitest.setup.ts"] });
project.addDevDeps("vitest-mock-extended@^2.0.2");
project.addDevDeps("aws-sdk-client-mock", "aws-sdk-client-mock-vitest@4.0.0");

const effectDeps = ["effect@3.10.16"];

project.addScripts({ "codegen-client": "tsx ./scripts/codegen-cli.ts" });
project.addDeps(...effectDeps, "@effect/cli@0.48.25", "@effect/platform@0.69.25", "@effect/platform-node@0.64.27");
project.addDevDeps("@effect/language-service", "@effect/vitest@0.13.16");
project.tsconfigBase?.file.addOverride("compilerOptions.plugins", [
  { name: "@effect/language-service" },
]);

const commonDevDeps = [...effectDeps];
const commonPeerDeps = ["effect@>=3.0.4 <4.0.0"];

const commons = new TypeScriptLibProject({
  parent: project,
  name: "commons",
  description: "Effectful AWS common library",
  deps: ["@smithy/types", "@smithy/smithy-client"],
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

new TypeScriptLibProject({
  parent: project,
  name: "lib-dynamodb",
  description: "Effectful AWS DynamoDB library",
  deps: ["@aws-sdk/client-dynamodb@^3", "@aws-sdk/lib-dynamodb@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
  workspaceDeps: [commons],
  workspacePeerDeps: [dynamodbClient],
});

const lambda = new TypeScriptLibProject({
  parent: project,
  name: "lambda",
  description: "Effectful AWS Lambda handler",
  devDeps: [...effectDeps, "@types/aws-lambda"],
  peerDeps: commonPeerDeps,
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
    `${lambda.package.packageName}@workspace:^`,
    "@aws-lambda-powertools/commons@2.0.0",
    "@aws-lambda-powertools/tracer@2.0.0",
    "@types/aws-lambda",
  ],
  peerDeps: [...commonPeerDeps, "@aws-lambda-powertools/tracer@>=2.0.0"],
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

const proj = new TypeScriptLibProject({
  parent: project,
  name: "signature-v4",
  description: "AWS Signature V4 for Effect HttpClientRequest",
  peerDeps: [...commonPeerDeps, "@smithy/signature-v4@^5", "@smithy/types@^4", "aws4fetch@^1", "@aws-crypto/sha256-js@^5"]
});


proj.addFields({
  peerDependenciesMeta: {
    '@smithy/signature-v4': { optional: true },
    '@smithy/types': { optional: true },
    'aws4fetch': { optional: true },
    '@aws-crypto/sha256-js': { optional: true },
  }
})

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
  deps: ["@effect/platform@0.69.25"],
  devDeps: [...effectDeps, "@aws-sdk/client-s3@^3"],
  peerDeps: commonPeerDeps,
  workspacePeerDeps: [s3Client],
  addExamples: true,
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder
project.addGitIgnore("docs/"); // docs are generated
project.addGitIgnore(".idea");
project.addGitIgnore(".DS_Store");

project.synth();
