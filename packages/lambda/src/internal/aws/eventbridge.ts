import type { EventBridgeEvent } from "aws-lambda";
import type { EventSource } from "../types";
import { emptyResponseMapper } from "../utils";

const getRequestValuesFromEventBridge = (
  event: EventBridgeEvent<string, unknown>,
) => {
  const method = "POST";
  const headers = { host: "events.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

export default {
  getRequest: getRequestValuesFromEventBridge,
  getResponse: emptyResponseMapper,
} as EventSource<EventBridgeEvent<string, unknown>>;
