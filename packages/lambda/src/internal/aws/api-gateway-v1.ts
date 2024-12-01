import url from "node:url";

import type { APIGatewayProxyEvent } from "aws-lambda";
import type { EventSource } from "../types";
import { getMultiValueHeaders, getRequestValuesFromEvent } from "../utils";

function getPathWithQueryStringParams(event: APIGatewayProxyEvent) {
  // NOTE: Use `event.pathParameters.proxy` if available ({proxy+}); fall back to `event.path`
  const path =
    (event.pathParameters &&
      event.pathParameters.proxy &&
      `/${event.pathParameters.proxy}`) ||
    event.path;
  return url.format({
    // NOTE: Strip base path for custom domains
    pathname: path.replace(new RegExp(`^`), ""),
    query: event.multiValueQueryStringParameters,
  });
}

const getRequestValuesFromApiGatewayEvent = (event: APIGatewayProxyEvent) =>
  getRequestValuesFromEvent({
    event,
    path: getPathWithQueryStringParams(event),
  });

const getResponseToApiGateway: EventSource<APIGatewayProxyEvent>["getResponse"] =
  ({ statusCode, body, headers, isBase64Encoded }) => {
    const multiValueHeaders = getMultiValueHeaders(headers);
    const transferEncodingHeader = multiValueHeaders["transfer-encoding"];

    // chunked transfer not currently supported by API Gateway
    if (transferEncodingHeader && transferEncodingHeader.includes("chunked")) {
      multiValueHeaders["transfer-encoding"] = transferEncodingHeader.filter(
        (headerValue) => headerValue !== "chunked",
      );
    }

    return {
      statusCode,
      body,
      multiValueHeaders,
      isBase64Encoded,
    };
  };

export default {
  getRequest: getRequestValuesFromApiGatewayEvent,
  getResponse: getResponseToApiGateway,
} as EventSource<APIGatewayProxyEvent>;
