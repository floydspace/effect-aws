export type BatchLikeEvent<R = unknown> = { Records: R[] };
export type StepFunctionsLikeEvent = {
  context: { Execution: unknown; State: unknown; StateMachine: unknown };
};

export type RequestValues = {
  method: string;
  headers: Record<string, string>;
  body: any;
  remoteAddress?: string;
  path?: string;
};

export type ResponseValues = {
  statusCode?: number;
  body: string;
  headers?: Record<string, any>;
  multiValueHeaders?: Record<string, string[]>;
  cookies?: string[];
  isBase64Encoded?: boolean;
};

export type EventSource<TEvent> = {
  getRequest: (event: TEvent) => RequestValues;
  getResponse: (response: {
    event: TEvent;
    statusCode: number;
    body: string;
    headers: Record<string, string>;
    isBase64Encoded: boolean;
    response?: any;
  }) => ResponseValues | void;
};
