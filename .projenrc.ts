import { Changesets } from "@floydspace/projen-components";
import { YamlFile } from "projen";
import { BuildUtils, Docgen, Eslint, MonorepoProject, TypeScriptLibProject, Vitest } from "./projenrc/index.js";

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
  devDeps: ["@floydspace/projen-components@next", "aws-sdk-client-mock-vitest"],
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new BuildUtils(project);

new Changesets(project, {
  repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

new Docgen(project);

new Eslint(project);
new Vitest(project, {
  sharedSetupFiles: ["vitest.setup.ts"],
});

project.addScripts({
  "codegen-client": "tsx ./scripts/codegen-client.ts",
});
project.addDeps("effect@^3.0.0", "enquirer@^2.4.1");
project.addDevDeps("@effect/language-service");
project.tsconfigBase?.file.addOverride("compilerOptions.plugins", [
  { name: "@effect/language-service" },
]);

const commonDeps: Array<string> = [];
const commonDevDeps = ["effect@3.0.0", "aws-sdk-client-mock", "aws-sdk-client-mock-vitest"];
const commonPeerDeps = ["effect@>=3.0.0 <4.0.0"];

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  description: "Effectful AWS Lambda Powertools Logger",
  devDeps: ["@aws-lambda-powertools/commons@2.0.0", "@aws-lambda-powertools/logger@2.0.0", "effect@3.0.0"],
  peerDeps: [...commonPeerDeps, "@aws-lambda-powertools/logger@>=2.0.0"],
});

new TypeScriptLibProject({
  parent: project,
  name: "client-api-gateway-management-api",
  description: "Effectful AWS API Gateway Management API client",
  deps: [...commonDeps, "@aws-sdk/client-apigatewaymanagementapi@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-codedeploy",
  description: "Effectful AWS CodeDeploy client",
  deps: [...commonDeps, "@aws-sdk/client-codedeploy@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const dynamodbClient = new TypeScriptLibProject({
  parent: project,
  name: "client-dynamodb",
  description: "Effectful AWS DynamoDB client",
  deps: [...commonDeps, "@aws-sdk/client-dynamodb@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "lib-dynamodb",
  description: "Effectful AWS DynamoDB library",
  deps: [...commonDeps, "@aws-sdk/client-dynamodb@^3", "@aws-sdk/lib-dynamodb@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
  workspaceDeps: [dynamodbClient],
});

new TypeScriptLibProject({
  parent: project,
  name: "client-eventbridge",
  description: "Effectful AWS EventBridge client",
  deps: [...commonDeps, "@aws-sdk/client-eventbridge@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-lambda",
  description: "Effectful AWS Lambda client",
  deps: [...commonDeps, "@aws-sdk/client-lambda@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-s3",
  description: "Effectful AWS S3 client",
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
  description: "Effectful AWS SNS client",
  deps: [...commonDeps, "@aws-sdk/client-sns@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sqs",
  description: "Effectful AWS SQS client",
  deps: [...commonDeps, "@aws-sdk/client-sqs@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sfn",
  description: "Effectful AWS Step Functions client",
  deps: [...commonDeps, "@aws-sdk/client-sfn@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const ssmClient = new TypeScriptLibProject({
  parent: project,
  name: "client-ssm",
  description: "Effectful AWS SSM client",
  deps: [...commonDeps, "@aws-sdk/client-ssm@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iam",
  description: "Effectful AWS IAM client",
  deps: [...commonDeps, "@aws-sdk/client-iam@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-elasticache",
  description: "Effectful AWS ElastiCache client",
  deps: [...commonDeps, "@aws-sdk/client-elasticache@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ec2",
  description: "Effectful AWS EC2 client",
  deps: [...commonDeps, "@aws-sdk/client-ec2@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ecs",
  description: "Effectful AWS ECS client",
  deps: [...commonDeps, "@aws-sdk/client-ecs@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

const secretsManagerClient = new TypeScriptLibProject({
  parent: project,
  name: "client-secrets-manager",
  description: "Effectful AWS Secrets Manager client",
  deps: [...commonDeps, "@aws-sdk/client-secrets-manager@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-scheduler",
  description: "Effectful AWS Scheduler client",
  deps: [...commonDeps, "@aws-sdk/client-scheduler@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-kinesis",
  description: "Effectful AWS Kinesis client",
  deps: [...commonDeps, "@aws-sdk/client-kinesis@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-account",
  description: "Effectful AWS Account client",
  deps: [...commonDeps, "@aws-sdk/client-account@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudsearch",
  description: "Effectful AWS CloudSearch client",
  deps: [...commonDeps, "@aws-sdk/client-cloudsearch@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudtrail",
  description: "Effectful AWS CloudTrail client",
  deps: [...commonDeps, "@aws-sdk/client-cloudtrail@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudwatch",
  description: "Effectful AWS CloudWatch client",
  deps: [...commonDeps, "@aws-sdk/client-cloudwatch@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudwatch-events",
  description: "Effectful AWS CloudWatch Events client",
  deps: [...commonDeps, "@aws-sdk/client-cloudwatch-events@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cloudwatch-logs",
  description: "Effectful AWS CloudWatch Logs client",
  deps: [...commonDeps, "@aws-sdk/client-cloudwatch-logs@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-cognito-identity-provider",
  description: "Effectful AWS Cognito Identity Provider client",
  deps: [...commonDeps, "@aws-sdk/client-cognito-identity-provider@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-kms",
  description: "Effectful AWS KMS client",
  deps: [...commonDeps, "@aws-sdk/client-kms@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-mq",
  description: "Effectful AWS MQ client",
  deps: [...commonDeps, "@aws-sdk/client-mq@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-rds",
  description: "Effectful AWS RDS client",
  deps: [...commonDeps, "@aws-sdk/client-rds@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sts",
  description: "Effectful AWS STS client",
  deps: [...commonDeps, "@aws-sdk/client-sts@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-opensearch",
  description: "Effectful AWS OpenSearch client",
  deps: [...commonDeps, "@aws-sdk/client-opensearch@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-opensearch-serverless",
  description: "Effectful AWS OpenSearch Serverless client",
  deps: [...commonDeps, "@aws-sdk/client-opensearchserverless@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "lambda",
  description: "Effectful AWS Lambda handler",
  devDeps: ["@types/aws-lambda", "effect@3.0.0"],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "secrets-manager",
  description: "Effectful AWS Secrets Manager functions",
  devDeps: [
    "@aws-sdk/client-secrets-manager@^3",
    "@fluffy-spoon/substitute",
    "effect@3.0.0",
  ],
  peerDeps: commonPeerDeps,
  workspaceDeps: [secretsManagerClient],
});

new TypeScriptLibProject({
  parent: project,
  name: "ssm",
  description: "Effectful AWS SSM functions",
  devDeps: [
    "@aws-sdk/client-ssm@^3",
    "@fluffy-spoon/substitute",
    "effect@3.0.0",
  ],
  peerDeps: commonPeerDeps,
  workspaceDeps: [ssmClient],
});

new TypeScriptLibProject({
  parent: project,
  name: "client-bedrock",
  description: "Effectful AWS Bedrock client",
  deps: [...commonDeps, "@aws-sdk/client-bedrock@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-textract",
  description: "Effectful AWS Textract client",
  deps: [...commonDeps, "@aws-sdk/client-textract@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ses",
  description: "Effectful AWS SES client",
  deps: [...commonDeps, "@aws-sdk/client-ses@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-organizations",
  description: "Effectful AWS Organizations client",
  deps: [...commonDeps, "@aws-sdk/client-organizations@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-ecr",
  description: "Effectful AWS ECR client",
  deps: [...commonDeps, "@aws-sdk/client-ecr@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-auto-scaling",
  description: "Effectful AWS Auto Scaling client",
  deps: [...commonDeps, "@aws-sdk/client-auto-scaling@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot",
  description: "Effectful AWS IoT client",
  deps: [...commonDeps, "@aws-sdk/client-iot@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-wireless",
  description: "Effectful AWS IoT Wireless client",
  deps: [...commonDeps, "@aws-sdk/client-iot-wireless@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-data-plane",
  description: "Effectful AWS IoT Data Plane client",
  deps: [...commonDeps, "@aws-sdk/client-iot-data-plane@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-jobs-data-plane",
  description: "Effectful AWS IoT Jobs Data Plane client",
  deps: [...commonDeps, "@aws-sdk/client-iot-jobs-data-plane@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-events",
  description: "Effectful AWS IoT Events client",
  deps: [...commonDeps, "@aws-sdk/client-iot-events@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-iot-events-data",
  description: "Effectful AWS IoT Events Data client",
  deps: [...commonDeps, "@aws-sdk/client-iot-events-data@^3"],
  devDeps: commonDevDeps,
  peerDeps: commonPeerDeps,
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder
project.addGitIgnore("docs/"); // docs are generated
project.addGitIgnore(".idea");
project.addGitIgnore(".DS_Store");

project.synth();
