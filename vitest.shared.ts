import path from "node:path";
import type { UserConfig } from "vitest/config";

const alias = (pkg: string, dir = pkg) => {
  const name = `@effect-aws/${pkg}`
  const target = process.env.TEST_DIST !== undefined ? "dist/dist/esm" : "src"
  return ({
    [`${name}/test`]: path.join(__dirname, "packages", dir, "test"),
    [`${name}`]: path.join(__dirname, "packages", dir, target)
  })
}

const config: UserConfig = {
  esbuild: {
    target: "es2020"
  },
  test: {
    setupFiles: [path.join(__dirname, "vitest.setup.ts")],
    include: ["test/**/*.test.ts"],
    alias: {
      ...alias("commons"),
      ...alias("powertools-logger"),
      ...alias("client-api-gateway-management-api"),
      ...alias("client-codedeploy"),
      ...alias("client-dynamodb"),
      ...alias("lib-dynamodb"),
      ...alias("client-eventbridge"),
      ...alias("client-lambda"),
      ...alias("client-s3"),
      ...alias("client-sns"),
      ...alias("client-sqs"),
      ...alias("client-sfn"),
      ...alias("client-ssm"),
      ...alias("client-iam"),
      ...alias("client-elasticache"),
      ...alias("client-ec2"),
      ...alias("client-ecs"),
      ...alias("client-secrets-manager"),
      ...alias("client-scheduler"),
      ...alias("client-kinesis"),
      ...alias("client-account"),
      ...alias("client-cloudsearch"),
      ...alias("client-cloudtrail"),
      ...alias("client-cloudwatch"),
      ...alias("client-cloudwatch-events"),
      ...alias("client-cloudwatch-logs"),
      ...alias("client-cognito-identity-provider"),
      ...alias("client-kms"),
      ...alias("client-mq"),
      ...alias("client-rds"),
      ...alias("client-sts"),
      ...alias("client-opensearch"),
      ...alias("client-opensearch-serverless"),
      ...alias("lambda"),
      ...alias("secrets-manager"),
      ...alias("ssm"),
      ...alias("client-bedrock"),
      ...alias("client-textract"),
      ...alias("client-ses"),
      ...alias("client-organizations"),
      ...alias("client-ecr"),
      ...alias("client-auto-scaling"),
      ...alias("client-iot"),
      ...alias("client-iot-wireless"),
      ...alias("client-iot-data-plane"),
      ...alias("client-iot-jobs-data-plane"),
      ...alias("client-iot-events"),
      ...alias("client-iot-events-data"),
    }
  }
}

export default config;