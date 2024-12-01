import type { SQSEvent } from "aws-lambda";
import type { EventSource } from "../types";

const getRequestValuesFromSqs = (event: SQSEvent) => {
  const method = "POST";
  const headers = { host: "sqs.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

const getResponseToSqs: EventSource<SQSEvent>["getResponse"] = ({ body }) => {
  try {
    return JSON.parse(body);
  } catch (error) {}
};

export default {
  getRequest: getRequestValuesFromSqs,
  getResponse: getResponseToSqs,
} as EventSource<SQSEvent>;
