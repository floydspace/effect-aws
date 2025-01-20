import type { SelfManagedKafkaEvent } from "aws-lambda";
import type { EventSource } from "../types";
import { emptyResponseMapper } from "../utils";

const getRequestValuesFromSelfManagedKafka = (event: SelfManagedKafkaEvent) => {
  const method = "POST";
  const headers = { host: "self-managed-kafka" };
  const body = event;

  return {
    method,
    headers,
    body,
  };
};
export default {
  getRequest: getRequestValuesFromSelfManagedKafka,
  getResponse: emptyResponseMapper,
} as EventSource<SelfManagedKafkaEvent>;
