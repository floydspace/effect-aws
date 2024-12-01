import type { SNSEvent } from "aws-lambda";
import type { EventSource } from "../types";
import { emptyResponseMapper } from "../utils";

const getRequestValuesFromSns = (event: SNSEvent) => {
  const method = "POST";
  const headers = { host: "sns.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

export default {
  getRequest: getRequestValuesFromSns,
  getResponse: emptyResponseMapper,
} as EventSource<SNSEvent>;
