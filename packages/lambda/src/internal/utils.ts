import type { ALBEvent, APIGatewayProxyEvent } from "aws-lambda";

export function getEventBody({
  body,
  isBase64Encoded,
}: {
  body: string;
  isBase64Encoded: boolean;
}) {
  return Buffer.from(body ?? "", isBase64Encoded ? "base64" : "utf8");
}

export function getRequestValuesFromEvent<
  TEvent extends ALBEvent | APIGatewayProxyEvent,
>({ event, path }: { event: TEvent; path: string }) {
  let headers = {} as Record<string, string | undefined>;

  if (event.multiValueHeaders) {
    headers = getCommaDelimitedHeaders({
      headersMap: event.multiValueHeaders,
      lowerCaseKey: true,
    });
  } else if (event.headers) {
    headers = event.headers;
  }

  let body;

  if (event.body) {
    body = getEventBody({
      body: event.body,
      isBase64Encoded: event.isBase64Encoded,
    });
    const { isBase64Encoded } = event;
    headers["content-length"] = Buffer.byteLength(
      body,
      isBase64Encoded ? "base64" : "utf8",
    ).toString();
  }

  const remoteAddress = (event &&
    event.requestContext && "identity" in event.requestContext &&
    event.requestContext.identity?.sourceIp) ||
    (event && event.requestContext && "domainName" in event.requestContext
      && event.requestContext.domainName)
    || (event.headers?.["host"] ?? event.multiValueHeaders?.["host"]?.[0]);

  return {
    method: event.httpMethod,
    headers,
    body,
    remoteAddress,
    path,
  };
}

export function getMultiValueHeaders(headers: Record<string, string>) {
  const multiValueHeaders = {} as Record<string, Array<string>>;

  Object.entries(headers).forEach(([headerKey, headerValue]) => {
    const headerArray = Array.isArray(headerValue)
      ? headerValue.map(String)
      : [String(headerValue)];

    multiValueHeaders[headerKey.toLowerCase()] = headerArray;
  });

  return multiValueHeaders;
}

export function getCommaDelimitedHeaders({
  headersMap,
  lowerCaseKey = false,
  separator = ",",
}: {
  headersMap: Record<string, string | Array<string> | undefined>;
  separator?: string;
  lowerCaseKey?: boolean;
}) {
  const commaDelimitedHeaders = {} as Record<string, string>;

  Object.entries(headersMap).forEach(([headerKey, headerValue]) => {
    const newKey = lowerCaseKey ? headerKey.toLowerCase() : headerKey;
    if (Array.isArray(headerValue)) {
      commaDelimitedHeaders[newKey] = headerValue.join(separator);
    } else {
      commaDelimitedHeaders[newKey] = headerValue ?? "";
    }
  });

  return commaDelimitedHeaders;
}

export const emptyResponseMapper = () => {};

// This approach is written in MDN.
// btoa does not support utf-8 characters. So we need a little bit hack.
export const encodeBase64 = (buf: ArrayBufferLike): string => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

export const isContentTypeBinary = (contentType: string) => {
  return !/^(text\/(plain|html|css|javascript|csv).*|application\/(.*json|.*xml).*|image\/svg\+xml.*)$/.test(
    contentType,
  );
};

export const isContentEncodingBinary = (contentEncoding: string | null) => {
  if (contentEncoding === null) {
    return false;
  }
  return /^(gzip|deflate|compress|br)/.test(contentEncoding);
};
