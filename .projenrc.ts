import { Changesets } from "@floydspace/projen-components";
import { YamlFile } from "projen";
import {
  Docgen,
  MonorepoProject,
  TypeScriptLibProject,
  Vitest,
} from "./projenrc";

const org = "floydspace";
const name = "effect-aws";
const repo = `${org}/${name}`;

const project = new MonorepoProject({
  name: name,
  description: "Effectful AWS",
  repository: `github:${repo}`,
  homepage: `https://${org}.github.io/${name}`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  typescriptVersion: "^5.4.2",
  devDeps: ["@floydspace/projen-components", "aws-sdk-client-mock-vitest"],
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new Changesets(project, {
  repo: repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

new Docgen(project);

new Vitest(project, {
  sharedSetupFiles: ["vitest.setup.ts"],
});

project.addScripts({
  "codegen-client": "tsx ./scripts/codegen-client.ts",
});
project.addDeps("effect@^3.0.0", "enquirer@^2.4.1");

const commonDeps: string[] = [];
const commonDevDeps = ["aws-sdk-client-mock", "aws-sdk-client-mock-vitest"];
const commonPeerDeps = ["effect@>=3.0.0 <4.0.0"];

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  devDeps: ["@aws-lambda-powertools/commons@2.0.0"],
  peerDeps: [
    ...commonPeerDeps,
    "@aws-lambda-powertools/logger@>=2.0.0", // lower versions are not supported, raise an issue if you need it
  ],
});

new TypeScriptLibProject({
  parent: project,
  name: "client-api-gateway-management-api",
  deps: [...commonDeps, "@aws-sdk/client-apigatewaymanagementapi@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-codedeploy",
  deps: [...commonDeps, "@aws-sdk/client-codedeploy@^3"],
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
  devDeps: [
    ...commonDevDeps,
    "@effect-aws/client-dynamodb@workspace:^",
    "effect@3.0.0",
  ],
  peerDeps: [...commonPeerDeps, dynamodbClient.package.packageName],
  peerDependencyOptions: { pinnedDevDependency: false },
});

new TypeScriptLibProject({
  parent: project,
  name: "client-eventbridge",
  deps: [...commonDeps, "@aws-sdk/client-eventbridge@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-lambda",
  deps: [...commonDeps, "@aws-sdk/client-lambda@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-s3",
  deps: [
    ...commonDeps,
    "@aws-sdk/client-s3@^3",
    "@aws-sdk/s3-request-presigner@^3",
    "@aws-sdk/types@^3",
  ],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sns",
  deps: [...commonDeps, "@aws-sdk/client-sns@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sqs",
  deps: [...commonDeps, "@aws-sdk/client-sqs@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sfn",
  deps: [...commonDeps, "@aws-sdk/client-sfn@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const ssmClient = new TypeScriptLibProject({
  parent: project,
  name: "client-ssm",
  deps: [...commonDeps, "@aws-sdk/client-ssm@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iam",
  deps: [...commonDeps, "@aws-sdk/client-iam@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-elasticache",
  deps: [...commonDeps, "@aws-sdk/client-elasticache@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ec2",
  deps: [...commonDeps, "@aws-sdk/client-ec2@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ecs",
  deps: [...commonDeps, "@aws-sdk/client-ecs@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const secretsManagerClient = new TypeScriptLibProject({
  parent: project,
  name: "client-secrets-manager",
  deps: [...commonDeps, "@aws-sdk/client-secrets-manager@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-scheduler",
  deps: [...commonDeps, "@aws-sdk/client-scheduler@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-kinesis",
  deps: [...commonDeps, "@aws-sdk/client-kinesis@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-account",
  deps: [...commonDeps, "@aws-sdk/client-account@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudsearch",
  deps: [...commonDeps, "@aws-sdk/client-cloudsearch@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudtrail",
  deps: [...commonDeps, "@aws-sdk/client-cloudtrail@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudwatch",
  deps: [...commonDeps, "@aws-sdk/client-cloudwatch@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudwatch-events",
  deps: [...commonDeps, "@aws-sdk/client-cloudwatch-events@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudwatch-logs",
  deps: [...commonDeps, "@aws-sdk/client-cloudwatch-logs@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cognito-identity-provider",
  deps: [...commonDeps, "@aws-sdk/client-cognito-identity-provider@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-kms",
  deps: [...commonDeps, "@aws-sdk/client-kms@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-mq",
  deps: [...commonDeps, "@aws-sdk/client-mq@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-rds",
  deps: [...commonDeps, "@aws-sdk/client-rds@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sts",
  deps: [...commonDeps, "@aws-sdk/client-sts@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-opensearch",
  deps: [...commonDeps, "@aws-sdk/client-opensearch@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-opensearch-serverless",
  deps: [...commonDeps, "@aws-sdk/client-opensearchserverless@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "lambda",
  devDeps: ["@types/aws-lambda"],
  peerDeps: commonPeerDeps,
});

const secretsManager = new TypeScriptLibProject({
  parent: project,
  name: "secrets-manager",
  devDeps: [
    "@aws-sdk/client-secrets-manager@^3",
    "@effect-aws/client-secrets-manager@workspace:^",
    "@fluffy-spoon/substitute",
    "effect@3.0.0",
  ],
  peerDeps: [...commonPeerDeps, secretsManagerClient.package.packageName],
  peerDependencyOptions: { pinnedDevDependency: false },
});

const ssm = new TypeScriptLibProject({
  parent: project,
  name: "ssm",
  devDeps: [
    "@aws-sdk/client-ssm@^3",
    "@effect-aws/client-ssm@workspace:^",
    "@fluffy-spoon/substitute",
    "effect@3.0.0",
  ],
  peerDeps: [...commonPeerDeps, ssmClient.package.packageName],
  peerDependencyOptions: { pinnedDevDependency: false },
});

new TypeScriptLibProject({
  parent: project,
  name: "client-bedrock",
  deps: [...commonDeps, "@aws-sdk/client-bedrock@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-textract",
  deps: [...commonDeps, "@aws-sdk/client-textract@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ses",
  deps: [...commonDeps, "@aws-sdk/client-ses@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-organizations",
  deps: [...commonDeps, "@aws-sdk/client-organizations@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ecr",
  deps: [...commonDeps, "@aws-sdk/client-ecr@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-auto-scaling",
  deps: [...commonDeps, "@aws-sdk/client-auto-scaling@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot",
  deps: [...commonDeps, "@aws-sdk/client-iot@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-wireless",
  deps: [...commonDeps, "@aws-sdk/client-iot-wireless@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-data-plane",
  deps: [...commonDeps, "@aws-sdk/client-iot-data-plane@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-jobs-data-plane",
  deps: [...commonDeps, "@aws-sdk/client-iot-jobs-data-plane@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-events",
  deps: [...commonDeps, "@aws-sdk/client-iot-events@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-events-data",
  deps: [...commonDeps, "@aws-sdk/client-iot-events-data@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

project.addImplicitDependency(dynamodbLib, dynamodbClient);
project.addImplicitDependency(secretsManager, secretsManagerClient);
project.addImplicitDependency(ssm, ssmClient);

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder
project.addGitIgnore("docs/"); // docs are generated
project.addGitIgnore(".idea");
project.addGitIgnore(".DS_Store");

project.synth();
