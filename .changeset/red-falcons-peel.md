---
"@effect-aws/commons": minor
"@effect-aws/client-api-gateway-management-api": patch
"@effect-aws/client-cognito-identity-provider": patch
"@effect-aws/client-opensearch-serverless": patch
"@effect-aws/client-iot-jobs-data-plane": patch
"@effect-aws/client-cloudwatch-events": patch
"@effect-aws/client-bedrock-runtime": patch
"@effect-aws/client-cloudwatch-logs": patch
"@effect-aws/client-iot-events-data": patch
"@effect-aws/client-secrets-manager": patch
"@effect-aws/client-iot-data-plane": patch
"@effect-aws/client-organizations": patch
"@effect-aws/client-auto-scaling": patch
"@effect-aws/client-iot-wireless": patch
"@effect-aws/client-cloudsearch": patch
"@effect-aws/client-elasticache": patch
"@effect-aws/client-eventbridge": patch
"@effect-aws/client-cloudtrail": patch
"@effect-aws/client-cloudwatch": patch
"@effect-aws/client-codedeploy": patch
"@effect-aws/client-iot-events": patch
"@effect-aws/client-opensearch": patch
"@effect-aws/client-scheduler": patch
"@effect-aws/client-dynamodb": patch
"@effect-aws/client-textract": patch
"@effect-aws/client-account": patch
"@effect-aws/client-bedrock": patch
"@effect-aws/client-kinesis": patch
"@effect-aws/client-lambda": patch
"@effect-aws/lib-dynamodb": patch
"@effect-aws/client-ec2": patch
"@effect-aws/client-ecr": patch
"@effect-aws/client-ecs": patch
"@effect-aws/client-iam": patch
"@effect-aws/client-iot": patch
"@effect-aws/client-kms": patch
"@effect-aws/client-rds": patch
"@effect-aws/client-ses": patch
"@effect-aws/client-sfn": patch
"@effect-aws/client-sns": patch
"@effect-aws/client-sqs": patch
"@effect-aws/client-ssm": patch
"@effect-aws/client-sts": patch
"@effect-aws/client-mq": patch
"@effect-aws/client-s3": patch
---

fix service logger, so it respect loglevel configuration within current scope

For example this snipped produced following output Before/After

```typescript
import { S3 } from "@effect-aws/client-s3"
import { Effect, Logger, LogLevel } from "effect"

S3.listBuckets({}).pipe(
  Logger.withMinimumLogLevel(LogLevel.Warning),
  Effect.tap(() => Effect.logInfo("Done")),
  Effect.provide(Logger.structured),
  Effect.provide(S3.layer({ logger: true })),
  Effect.runPromise
)
```

Before

```log
timestamp=2025-03-12T22:49:37.007Z level=INFO fiber=#5 message="{
  \"clientName\": \"S3Client\",
  \"commandName\": \"ListBucketsCommand\",
  \"input\": {},
  \"output\": {
    \"Buckets\": [],
    \"Owner\": {
      \"ID\": \"<REDACTED>\"
    }
  },
  \"metadata\": {
    \"httpStatusCode\": 200,
    \"requestId\": \"<REDACTED>\",
    \"extendedRequestId\": \"<REDACTED>\",
    \"attempts\": 1,
    \"totalRetryDelay\": 0
  }
}"
{
  message: 'Done',
  logLevel: 'INFO',
  timestamp: '2025-03-12T22:49:37.009Z',
  cause: undefined,
  annotations: {},
  spans: {},
  fiberId: '#0'
}
```

After

```log
{
  message: 'Done',
  logLevel: 'INFO',
  timestamp: '2025-03-12T22:51:13.799Z',
  cause: undefined,
  annotations: {},
  spans: {},
  fiberId: '#0'
}
```

closes #92
