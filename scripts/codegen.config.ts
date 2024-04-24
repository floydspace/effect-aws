export const config: Record<string, { command: string; input: string }> = {
  "client-ec2": {
    command: "DescribeInstances",
    input: '{"InstanceIds": ["i-1234567890abcdef0"]}',
  },
  "client-elasticache": {
    command: "DescribeCacheClusters",
    input: '{"ShowCacheNodeInfo": true}',
  },
  "client-iam": {
    command: "ListGroups",
    input: '{"PathPrefix": "admin/"}',
  },
  "client-sns": {
    command: "Publish",
    input: '{"TopicArn": "test", "Message": "test"}',
  },
};
