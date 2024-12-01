import type { EventSource, StepFunctionsLikeEvent } from "../types.js";

const getRequestValuesFromStepFunctions = (event: StepFunctionsLikeEvent) => {
  const method = "POST";
  const headers = { host: "stepfunctions.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

const getResponseToStepFunctions: EventSource<StepFunctionsLikeEvent>["getResponse"] = (
  { body, isBase64Encoded = false },
) => {
  if (isBase64Encoded) {
    throw new Error("base64 encoding is not supported");
  }

  return JSON.parse(body);
};

export default {
  getRequest: getRequestValuesFromStepFunctions,
  getResponse: getResponseToStepFunctions,
} as EventSource<StepFunctionsLikeEvent>;
