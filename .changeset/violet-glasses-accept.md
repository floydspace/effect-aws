---
"@effect-aws/client-api-gateway-management-api": minor
"@effect-aws/client-cognito-identity-provider": minor
"@effect-aws/client-opensearch-serverless": minor
"@effect-aws/client-iot-jobs-data-plane": minor
"@effect-aws/client-cloudwatch-events": minor
"@effect-aws/client-cloudwatch-logs": minor
"@effect-aws/client-iot-events-data": minor
"@effect-aws/client-secrets-manager": minor
"@effect-aws/client-iot-data-plane": minor
"@effect-aws/client-organizations": minor
"@effect-aws/client-auto-scaling": minor
"@effect-aws/client-iot-wireless": minor
"@effect-aws/client-cloudsearch": minor
"@effect-aws/client-elasticache": minor
"@effect-aws/client-eventbridge": minor
"@effect-aws/client-cloudtrail": minor
"@effect-aws/client-cloudwatch": minor
"@effect-aws/client-codedeploy": minor
"@effect-aws/client-iot-events": minor
"@effect-aws/client-opensearch": minor
"@effect-aws/client-scheduler": minor
"@effect-aws/client-dynamodb": minor
"@effect-aws/client-textract": minor
"@effect-aws/client-account": minor
"@effect-aws/client-bedrock": minor
"@effect-aws/client-kinesis": minor
"@effect-aws/client-lambda": minor
"@effect-aws/lib-dynamodb": minor
"@effect-aws/client-ec2": minor
"@effect-aws/client-ecr": minor
"@effect-aws/client-ecs": minor
"@effect-aws/client-iam": minor
"@effect-aws/client-iot": minor
"@effect-aws/client-kms": minor
"@effect-aws/client-rds": minor
"@effect-aws/client-ses": minor
"@effect-aws/client-sfn": minor
"@effect-aws/client-sns": minor
"@effect-aws/client-sqs": minor
"@effect-aws/client-ssm": minor
"@effect-aws/client-sts": minor
"@effect-aws/client-mq": minor
"@effect-aws/client-s3": minor
---

## Refactored service configuration and layer management

Since this version the effectful logger is not added into native AWS client constructor. Providing logger by default causes risk of logging sensitive information. The logger should be added explicitly by the choice of a user. It can be done by using extended `logger` option:

```ts
import { DynamoDB } from "@effect-aws/client-dynamodb"

// using default logger
DynamoDB.layer({ logger: true })

// or using custom logger (the same as default)
DynamoDB.layer({
  logger: {
    trace: Effect.logTrace,
    debug: Effect.logDebug,
    info: Effect.logInfo,
    warn: Effect.logWarning,
    error: Effect.logError
  }
})

// and you could remap logger methods as you want
DynamoDB.layer({
  logger: {
    debug: Effect.logDebug,
    info: Effect.logDebug,
    warn: Effect.logWarning,
    error: Effect.logError
  }
})
```

Additionally to that, the whole service configuration was refactored in better way, now it is not a strict layer dependency, but the global value which defaults to empty object. The global value can be configured by using the effect higher order function or the layer setter.

```ts
import { DynamoDBServiceConfig } from "@effect-aws/client-dynamodb"

// using effect higher order function
DynamoDBServiceConfig.withDynamoDBServiceConfig({ logger: true })

// or using layer setter
Layer.provide(DynamoDBServiceConfig.setDynamoDBServiceConfig({ logger: true }))
```

### Breaking changes

This release is not a breaking change if you just use service methods and service layer, which in most cases should be the case.

If you had to use custom configuration, you should update your code to use new configuration methods.
