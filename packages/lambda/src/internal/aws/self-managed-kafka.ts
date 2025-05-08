import type { SelfManagedKafkaEvent } from "../../Types.js";
import type { EventSource } from "../types.js";
import { emptyResponseMapper } from "../utils.js";

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
