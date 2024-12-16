import type { KinesisStreamEvent } from "aws-lambda";
import type { EventSource } from "../types";
import { emptyResponseMapper } from "../utils";

const getRequestValuesFromKinesis = (event: KinesisStreamEvent) => {
  const method = "POST";
  const headers = { host: "kinesis.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

export default {
  getRequest: getRequestValuesFromKinesis,
  getResponse: emptyResponseMapper,
} as EventSource<KinesisStreamEvent>;
