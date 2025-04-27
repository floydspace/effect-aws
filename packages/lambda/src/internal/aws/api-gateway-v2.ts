import url from "node:url";

import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import type { EventSource } from "../types.js";
import { getCommaDelimitedHeaders, getEventBody } from "../utils.js";

function getRequestValuesFromApiGatewayEvent(
  event: APIGatewayProxyEventV2 & { requestPath?: string },
) {
  const { cookies, rawPath, rawQueryString, requestContext, requestPath } = event;
  const method = requestContext.http.method;
  const requestPathOrRawPath = requestPath || rawPath;
  const basePath = ""; // TODO: Test with custom domain
  const stripBasePathRegex = new RegExp(`^${basePath}`);
  const path = url.format({
    pathname: requestPathOrRawPath.replace(stripBasePathRegex, ""),
    search: rawQueryString,
  });

  const headers = {} as Record<string, string>;

  if (cookies) {
    headers.cookie = cookies.join("; ");
  }

  Object.entries(event.headers).forEach(([headerKey, headerValue]) => {
    headers[headerKey.toLowerCase()] = headerValue!;
  });

  let body: Buffer | undefined;

  if (event.body) {
    body = getEventBody({
      body: event.body,
      isBase64Encoded: event.isBase64Encoded,
    });
    headers["content-length"] = Buffer.byteLength(
      body,
      event.isBase64Encoded ? "base64" : "utf8",
    ).toString();
  }

  return {
    method,
    headers,
    body,
    remoteAddress: requestContext.http.sourceIp,
    path,
  };
}

const getResponseToApiGateway: EventSource<APIGatewayProxyEventV2, APIGatewayProxyResultV2>["getResponse"] = ({
  body,
  headers = {},
  isBase64Encoded = false,
  response = {},
  statusCode,
}) => {
  if (
    headers["transfer-encoding"] === "chunked" ||
    response.chunkedEncoding
  ) {
    throw new Error("chunked encoding is not supported by API Gateway");
  }

  const responseToApiGateway: APIGatewayProxyResultV2 = {
    statusCode,
    body,
    isBase64Encoded,
  };

  const cookies = headers["set-cookie"];
  if (cookies) {
    responseToApiGateway.cookies = Array.isArray(cookies)
      ? cookies
      : [cookies];
    delete headers["set-cookie"];
  }

  responseToApiGateway.headers = getCommaDelimitedHeaders({
    headersMap: headers,
  });

  return responseToApiGateway;
};

export default {
  getRequest: getRequestValuesFromApiGatewayEvent,
  getResponse: getResponseToApiGateway,
} as EventSource<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;
