import url from "node:url";

import { Record } from "effect";
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "../../Types.js";
import type { EventSource } from "../types.js";
import { getMultiValueHeaders, getRequestValuesFromEvent } from "../utils.js";

function getPathWithQueryStringParams(event: APIGatewayProxyEvent) {
  // NOTE: Use `event.pathParameters.proxy` if available ({proxy+}); fall back to `event.path`
  const path = (event.pathParameters &&
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

const getResponseToApiGateway: EventSource<APIGatewayProxyEvent, APIGatewayProxyResult>["getResponse"] = (
  { body, headers, isBase64Encoded, statusCode },
) => {
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
    headers: Record.map(headers, String),
    multiValueHeaders,
    isBase64Encoded,
  };
};

export default {
  getRequest: getRequestValuesFromApiGatewayEvent,
  getResponse: getResponseToApiGateway,
} as EventSource<APIGatewayProxyEvent, APIGatewayProxyResult>;
