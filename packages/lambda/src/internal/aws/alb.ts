import url from "node:url";

import type { ALBEvent, ALBResult } from "aws-lambda";
import type { EventSource } from "../types.js";
import { getMultiValueHeaders, getRequestValuesFromEvent } from "../utils.js";

function getPathWithQueryStringUseUnescapeParams({
  event,
  // NOTE: Use `event.pathParameters.proxy` if available ({proxy+}); fall back to `event.path`
  path = (event.pathParameters &&
    event.pathParameters.proxy &&
    `/${event.pathParameters.proxy}`) ||
    event.path,
  // NOTE: Strip base path for custom domains
  stripBasePath = "",
  replaceRegex = new RegExp(`^${stripBasePath}`),
}: {
  event: ALBEvent & { pathParameters?: { proxy?: string } };
  path?: string;
  stripBasePath?: string;
  replaceRegex?: RegExp;
}) {
  const query = {} as Record<string, string | Array<string>>;
  // decode everything back into utf-8 text.
  if (event.multiValueQueryStringParameters) {
    for (const key in event.multiValueQueryStringParameters) {
      const formattedKey = decodeUrlencoded(key);
      query[formattedKey] = event.multiValueQueryStringParameters[key]!.map(
        (value) => decodeUrlencoded(value),
      );
    }
  } else {
    for (const key in event.queryStringParameters) {
      const formattedKey = decodeUrlencoded(key);
      query[formattedKey] = decodeUrlencoded(event.queryStringParameters[key]!);
    }
  }

  return url.format({
    pathname: path.replace(replaceRegex, ""),
    query,
  });
}

// Decode an "application/x-www-form-urlencoded" encoded string.
function decodeUrlencoded(val: string) {
  return decodeURIComponent(val.replace(/\+/g, "%20"));
}

const getRequestValuesFromAlbEvent = (event: ALBEvent) => {
  const values = getRequestValuesFromEvent({
    event,
    path: getPathWithQueryStringUseUnescapeParams({ event }),
  });
  return values;
};

const getResponseToAlb: EventSource<ALBEvent, ALBResult>["getResponse"] = ({
  body,
  event,
  headers: responseHeaders,
  isBase64Encoded,
  statusCode,
}) => {
  const multiValueHeaders = !event.headers
    ? getMultiValueHeaders(responseHeaders)
    : undefined;
  const headers = event.headers
    ? Object.entries(responseHeaders).reduce(
      (acc, [k, v]) => {
        acc[k] = Array.isArray(v) ? v[0] : v;
        return acc;
      },
      {} as Record<string, string>,
    )
    : undefined;

  return {
    statusCode,
    body,
    headers,
    multiValueHeaders,
    isBase64Encoded,
  };
};

export default {
  getRequest: getRequestValuesFromAlbEvent,
  getResponse: getResponseToAlb,
} as EventSource<ALBEvent, ALBResult>;
