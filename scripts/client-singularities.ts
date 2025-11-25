type Singularities = {
  description: string;
  commandToTest: string;
  inputToTest: object | null;
};

export default {
  "client-account": {
    description: "Effectful AWS Account client",
    commandToTest: "ListRegions",
    inputToTest: null,
  },
  "client-api-gateway": {
    description: "Effectful AWS API Gateway client",
    commandToTest: "GetApiKey",
    inputToTest: {
      apiKey: "test",
    },
  },
  "client-api-gateway-v2": {
    description: "Effectful AWS API Gateway V2 client",
    commandToTest: "GetApi",
    inputToTest: {
      ApiId: "test",
    },
  },
  "client-api-gateway-management-api": {
    description: "Effectful AWS API Gateway Management API client",
    commandToTest: "PostToConnection",
    inputToTest: {
      ConnectionId: "test",
      Data: "test",
    },
  },
  "client-athena": {
    description: "Effectful AWS Athena client",
    commandToTest: "StartQueryExecution",
    inputToTest: {
      QueryString: "test",
    },
  },
  "client-auto-scaling": {
    description: "Effectful AWS Auto Scaling client",
    commandToTest: "DescribeAutoScalingGroups",
    inputToTest: null,
  },
  "client-bedrock": {
    description: "Effectful AWS Bedrock client",
    commandToTest: "ListCustomModels",
    inputToTest: null,
  },
  "client-bedrock-runtime": {
    description: "Effectful AWS Bedrock Runtime client",
    commandToTest: "InvokeModel",
    inputToTest: null,
  },
  "client-cloudsearch": {
    description: "Effectful AWS CloudSearch client",
    commandToTest: "DescribeDomains",
    inputToTest: null,
  },
  "client-cloudformation": {
    description: "Effectful AWS CloudFormation client",
    commandToTest: "ListStacks",
    inputToTest: null,
  },
  "client-cloudtrail": {
    description: "Effectful AWS CloudTrail client",
    commandToTest: "ListTrails",
    inputToTest: null,
  },
  "client-cloudwatch": {
    description: "Effectful AWS CloudWatch client",
    commandToTest: "DescribeAlarms",
    inputToTest: null,
  },
  "client-cloudwatch-events": {
    description: "Effectful AWS CloudWatch Events client",
    commandToTest: "ListRules",
    inputToTest: null,
  },
  "client-cloudwatch-logs": {
    description: "Effectful AWS CloudWatch Logs client",
    commandToTest: "DescribeLogGroups",
    inputToTest: null,
  },
  "client-codedeploy": {
    description: "Effectful AWS CodeDeploy client",
    commandToTest: "ListApplications",
    inputToTest: null,
  },
  "client-cognito-identity-provider": {
    description: "Effectful AWS Cognito Identity Provider client",
    commandToTest: "ListUserPools",
    inputToTest: null,
  },
  "client-dsql": {
    description: "Effectful AWS DSQL client",
    commandToTest: "ListClusters",
    inputToTest: null,
  },
  "client-dynamodb": {
    description: "Effectful AWS DynamoDB client",
    commandToTest: "PutItem",
    inputToTest: {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    },
  },
  "client-ec2": {
    description: "Effectful AWS EC2 client",
    commandToTest: "AcceptAddressTransfer",
    inputToTest: null,
  },
  "client-ecr": {
    description: "Effectful AWS ECR client",
    commandToTest: "DescribeRepositories",
    inputToTest: null,
  },
  "client-ecs": {
    description: "Effectful AWS ECS client",
    commandToTest: "ListClusters",
    inputToTest: null,
  },
  "client-elasticache": {
    description: "Effectful AWS ElastiCache client",
    commandToTest: "ListTagsForResource",
    inputToTest: {
      ResourceName: "test",
    },
  },
  "client-eventbridge": {
    description: "Effectful AWS EventBridge client",
    commandToTest: "PutEvents",
    inputToTest: { Entries: [{ Detail: "test" }] },
  },
  "client-firehose": {
    description: "Effectful AWS Firehose client",
    commandToTest: "PutRecord",
    inputToTest: { Record: { Data: Buffer.from("") } },
  },
  "client-iam": {
    description: "Effectful AWS IAM client",
    commandToTest: "CreateRole",
    inputToTest: null,
  },
  "client-iot": {
    description: "Effectful AWS IoT client",
    commandToTest: "DescribeJob",
    inputToTest: null,
  },
  "client-iot-data-plane": {
    description: "Effectful AWS IoT Data Plane client",
    commandToTest: "Publish",
    inputToTest: null,
  },
  "client-iot-events": {
    description: "Effectful AWS IoT Events client",
    commandToTest: "ListInputs",
    inputToTest: null,
  },
  "client-iot-events-data": {
    description: "Effectful AWS IoT Events Data client",
    commandToTest: "DescribeAlarm",
    inputToTest: null,
  },
  "client-iot-jobs-data-plane": {
    description: "Effectful AWS IoT Jobs Data Plane client",
    commandToTest: "StartCommandExecution",
    inputToTest: null,
  },
  "client-iot-wireless": {
    description: "Effectful AWS IoT Wireless client",
    commandToTest: "ListDestinations",
    inputToTest: null,
  },
  "client-ivs": {
    description: "Effectful AWS IVS client",
    commandToTest: "ListChannels",
    inputToTest: null,
  },
  "client-kinesis": {
    description: "Effectful AWS Kinesis client",
    commandToTest: "PutRecord",
    inputToTest: null,
  },
  "client-kms": {
    description: "Effectful AWS KMS client",
    commandToTest: "ListKeys",
    inputToTest: null,
  },
  "client-lambda": {
    description: "Effectful AWS Lambda client",
    commandToTest: "Invoke",
    inputToTest: {
      FunctionName: "test",
      Payload: "test",
    },
  },
  "client-mq": {
    description: "Effectful AWS MQ client",
    commandToTest: "ListBrokers",
    inputToTest: null,
  },
  "client-opensearch": {
    description: "Effectful AWS OpenSearch client",
    commandToTest: "DescribeDomains",
    inputToTest: null,
  },
  "client-opensearch-serverless": {
    description: "Effectful AWS OpenSearch Serverless client",
    commandToTest: "ListCollections",
    inputToTest: null,
  },
  "client-organizations": {
    description: "Effectful AWS Organizations client",
    commandToTest: "DescribeOrganization",
    inputToTest: null,
  },
  "client-rds": {
    description: "Effectful AWS RDS client",
    commandToTest: "DescribeDBClusters",
    inputToTest: null,
  },
  "client-s3": {
    description: "Effectful AWS S3 client",
    commandToTest: "HeadObject",
    inputToTest: {
      Key: "test",
      Bucket: "test",
    },
  },
  "client-scheduler": {
    description: "Effectful AWS Scheduler client",
    commandToTest: "TagResource",
    inputToTest: null,
  },
  "client-secrets-manager": {
    description: "Effectful AWS Secrets Manager client",
    commandToTest: "GetSecretValue",
    inputToTest: {
      SecretId: "test",
    },
  },
  "client-ses": {
    description: "Effectful AWS SES client",
    commandToTest: "SendEmail",
    inputToTest: null,
  },
  "client-sfn": {
    description: "Effectful AWS Step Functions client",
    commandToTest: "StartExecution",
    inputToTest: {
      stateMachineArn: "test",
      input: "test",
    },
  },
  "client-sns": {
    description: "Effectful AWS SNS client",
    commandToTest: "Publish",
    inputToTest: {
      TopicArn: "test",
      Message: "test",
    },
  },
  "client-sqs": {
    description: "Effectful AWS SQS client",
    commandToTest: "SendMessage",
    inputToTest: {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    },
  },
  "client-ssm": {
    description: "Effectful AWS SSM client",
    commandToTest: "DescribeParameters",
    inputToTest: null,
  },
  "client-sts": {
    description: "Effectful AWS STS client",
    commandToTest: "GetCallerIdentity",
    inputToTest: null,
  },
  "client-textract": {
    description: "Effectful AWS Textract client",
    commandToTest: "ListAdapters",
    inputToTest: null,
  },
  "client-timestream-write": {
    description: "Effectful AWS Timestream Write client",
    commandToTest: "ListTables",
    inputToTest: {
      DatabaseName: "test",
    },
  },
  "client-timestream-query": {
    description: "Effectful AWS Timestream Query client",
    commandToTest: "ListScheduledQueries",
    inputToTest: null,
  },
  "client-timestream-influxdb": {
    description: "Effectful AWS Timestream InfluxDB client",
    commandToTest: "ListDbClusters",
    inputToTest: null,
  },
} as Record<string, Singularities>;
