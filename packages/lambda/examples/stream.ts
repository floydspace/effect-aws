import { LambdaHandler } from "@effect-aws/lambda";
import { Stream } from "effect";

const streamHandler = () => {
  return Stream.make("1", "2", "3");
};

export const handler = LambdaHandler.stream(streamHandler);
