import type { SQSEvent } from "../../Types.js";
import type { EventSource } from "../types.js";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) { /* empty */ }
};

export default {
  getRequest: getRequestValuesFromSqs,
  getResponse: getResponseToSqs,
} as EventSource<SQSEvent>;
