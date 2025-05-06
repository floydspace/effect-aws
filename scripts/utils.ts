export function normalizeServiceName(serviceName: string) {
  let originalServiceName = serviceName;
  if (serviceName === "api-gateway-v2") {
    originalServiceName = "apigatewayv2";
  }
  if (serviceName === "api-gateway-management-api") {
    originalServiceName = "apigatewaymanagementapi";
  }
  if (serviceName === "opensearch-serverless") {
    originalServiceName = "opensearchserverless";
  }
  return originalServiceName;
}

export function normalizePackageName(packageName: string) {
  return "client-" + normalizeServiceName(packageName.replace(/^client-/, ""));
}
