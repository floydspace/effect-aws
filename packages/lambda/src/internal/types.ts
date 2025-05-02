import type { LambdaHandler } from "../LambdaHandler.js";

export type BatchLikeEvent<R = unknown> = { Records: Array<R> };

export type RequestValues = {
  method: string;
  headers: Record<string, string>;
  body: any;
  remoteAddress?: string;
  path?: string;
};

export type ResponseValues<TEvent> = {
  event: TEvent;
  statusCode: number;
  body: string;
  headers: Record<string, string>;
  isBase64Encoded: boolean;
  response?: any;
};

export type EventSource<TEvent extends LambdaHandler.Event, TResult extends LambdaHandler.Result = void> = {
  getRequest: (event: TEvent) => RequestValues;
  getResponse: (response: ResponseValues<TEvent>) => TResult;
};
