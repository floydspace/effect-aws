import type { S3Event } from "../../Types.js";
import type { EventSource } from "../types.js";

const getRequestValuesFromS3 = (event: S3Event) => {
  const method = "POST";
  const headers = { host: "s3.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

const getResponseToS3: EventSource<S3Event>["getResponse"] = ({
  body,
  headers,
  isBase64Encoded,
  statusCode,
}) => ({
  statusCode,
  headers,
  body,
  isBase64Encoded,
});

export default {
  getRequest: getRequestValuesFromS3,
  getResponse: getResponseToS3,
} as EventSource<S3Event>;
