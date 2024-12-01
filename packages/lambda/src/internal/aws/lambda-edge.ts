import url from "node:url";

import type { CloudFrontRequestEvent } from "aws-lambda";
import type { EventSource } from "../types.js";
import { getEventBody } from "../utils.js";

// Lambda@Edge fails if certain headers are returned
const RESPONSE_HEADERS_DENY_LIST = ["content-length"];

function getRequestValuesFromLambdaEdgeEvent(event: CloudFrontRequestEvent) {
  const cloudFrontRequest = event.Records[0].cf.request;
  const {
    body: requestBodyObject,
    clientIp,
    headers: headersMap,
    method,
    querystring,
    uri,
  } = cloudFrontRequest;
  let body: Buffer | null = null;

  const headers = {} as Record<string, string>;

  Object.entries(headersMap).forEach(([headerKey, headerValue]) => {
    headers[headerKey] = headerValue.map((header) => header.value).join(",");
  });

  if (requestBodyObject?.data) {
    const isBase64Encoded = requestBodyObject.encoding === "base64";
    body = getEventBody({
      body: requestBodyObject.data,
      isBase64Encoded,
    });
    headers["content-length"] = Buffer.byteLength(
      body,
      isBase64Encoded ? "base64" : "utf8",
    ).toString();
  }

  const path = url.format({
    pathname: uri,
    search: querystring,
  });

  const { host } = headers;
  return {
    method,
    path,
    headers,
    body,
    remoteAddress: clientIp,
    host,
    hostname: host, // Alias for host
    // protocol: `${headers['X-Forwarded-Proto']}:`,
    // port: headers['X-Forwarded-Port']
  };
}
const getResponseToLambdaEdge: EventSource<CloudFrontRequestEvent>["getResponse"] = (
  { body, headers, isBase64Encoded, statusCode },
) => {
  const headersMap = {} as Record<string, Array<{ key: string; value: string }>>;
  Object.entries(headers).forEach(([headerKey, headerValue]) => {
    const headerKeyLowerCase = headerKey.toLowerCase();
    if (RESPONSE_HEADERS_DENY_LIST.includes(headerKeyLowerCase)) return;
    if (!headersMap[headerKeyLowerCase]) headersMap[headerKeyLowerCase] = [];

    if (!Array.isArray(headerValue)) {
      headersMap[headerKeyLowerCase].push({
        key: headerKeyLowerCase,
        value: headerValue,
      });
      return;
    }

    const headersArray = headerValue.map((v) => ({
      key: headerKeyLowerCase,
      value: v,
    }));
    // eslint-disable-next-line no-restricted-syntax
    headersMap[headerKeyLowerCase].push(...headersArray);
  });
  const bodyEncoding = isBase64Encoded ? "base64" : "text";
  const responseToService = {
    status: statusCode,
    body,
    headers: headersMap,
    bodyEncoding,
  };

  // TODO: Handle if responseToServiceBytes exceeds Lambda@Edge limits
  // const responseToServiceBytes = (new TextEncoder().encode(JSON.stringify(responseToService))).length

  return responseToService;
};

export default {
  getRequest: getRequestValuesFromLambdaEdgeEvent,
  getResponse: getResponseToLambdaEdge,
} as EventSource<CloudFrontRequestEvent>;
