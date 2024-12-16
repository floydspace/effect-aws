import type { DynamoDBStreamEvent } from "aws-lambda";
import type { EventSource } from "../types";
import { emptyResponseMapper } from "../utils";

const getRequestValuesFromDynamoDB = (event: DynamoDBStreamEvent) => {
  const method = "POST";
  const headers = { host: "dynamodb.amazonaws.com" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};

export default {
  getRequest: getRequestValuesFromDynamoDB,
  getResponse: emptyResponseMapper,
} as EventSource<DynamoDBStreamEvent>;
