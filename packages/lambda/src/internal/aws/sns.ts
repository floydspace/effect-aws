import type { SNSEvent } from "../../Types.js";
import type { EventSource } from "../types.js";
import { emptyResponseMapper } from "../utils.js";

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
