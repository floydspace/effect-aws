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
      ...alias("client-s3"),
      ...alias("client-account"),
      ...alias("client-api-gateway"),
      ...alias("client-api-gateway-v2"),
      ...alias("client-api-gateway-management-api"),
      ...alias("client-athena"),
      ...alias("client-auto-scaling"),
      ...alias("client-bedrock"),
      ...alias("client-bedrock-runtime"),
      ...alias("client-cloudsearch"),
      ...alias("client-cloudtrail"),
      ...alias("client-cloudwatch"),
      ...alias("client-cloudwatch-events"),
      ...alias("client-cloudwatch-logs"),
      ...alias("client-codedeploy"),
      ...alias("client-cognito-identity-provider"),
      ...alias("client-dynamodb"),
      ...alias("client-ec2"),
      ...alias("client-ecr"),
      ...alias("client-ecs"),
      ...alias("client-elasticache"),
      ...alias("client-eventbridge"),
      ...alias("client-firehose"),
      ...alias("client-iam"),
      ...alias("client-iot"),
      ...alias("client-iot-data-plane"),
      ...alias("client-iot-events"),
      ...alias("client-iot-events-data"),
      ...alias("client-iot-jobs-data-plane"),
      ...alias("client-iot-wireless"),
      ...alias("client-kinesis"),
      ...alias("client-kms"),
      ...alias("client-lambda"),
      ...alias("client-mq"),
      ...alias("client-opensearch"),
      ...alias("client-opensearch-serverless"),
      ...alias("client-organizations"),
      ...alias("client-rds"),
      ...alias("client-scheduler"),
      ...alias("client-secrets-manager"),
      ...alias("client-ses"),
      ...alias("client-sfn"),
      ...alias("client-sns"),
      ...alias("client-sqs"),
      ...alias("client-ssm"),
      ...alias("client-sts"),
      ...alias("client-textract"),
      ...alias("client-timestream-write"),
      ...alias("client-timestream-query"),
      ...alias("client-timestream-influxdb"),
      ...alias("dynamodb"),
      ...alias("lib-dynamodb"),
      ...alias("lambda"),
      ...alias("powertools-logger"),
      ...alias("powertools-tracer"),
      ...alias("secrets-manager"),
      ...alias("ssm"),
      ...alias("s3"),
      ...alias("http-handler"),
    }
  }
}

export default config;