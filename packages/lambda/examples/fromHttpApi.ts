import { LambdaHandler } from "@effect-aws/lambda";
import { Effect, Layer, Schema } from "effect";
import { FetchHttpClient, HttpClient, HttpClientResponse, HttpServer } from "effect/unstable/http";
import { HttpApi, HttpApiBuilder, HttpApiEndpoint, HttpApiGroup } from "effect/unstable/httpapi";

const YahooResponse = Schema.Struct({
  chart: Schema.Struct({
    result: Schema.Array(Schema.Struct({
      indicators: Schema.Struct({
        quote: Schema.Array(Schema.Struct({
          close: Schema.Array(Schema.Number),
          high: Schema.Array(Schema.Number),
          low: Schema.Array(Schema.Number),
          open: Schema.Array(Schema.Number),
          volume: Schema.Array(Schema.Number),
        })),
      }),
      timestamp: Schema.Array(Schema.Number),
    })),
  }),
});

const getQuote = HttpApiEndpoint.get(
  "getQuote",
  `/quote/:symbol`,
  { success: YahooResponse, params: { symbol: Schema.String } },
);

const quotesGroup = HttpApiGroup.make("quotes").add(getQuote);

const MyApi = HttpApi.make("MyApi").add(quotesGroup);

// Implement the "quotes" group
const QuotesLive = HttpApiBuilder.group(
  MyApi,
  "quotes",
  (handlers) =>
    handlers.handle(
      "getQuote",
      ({ params }) =>
        HttpClient.get(`https://query2.finance.yahoo.com/v8/finance/chart/${params.symbol}`, {
          urlParams: { interval: "1d" },
        }).pipe(
          Effect.andThen(HttpClientResponse.schemaBodyJson(YahooResponse)),
          Effect.orDie,
        ),
    ),
);

// Provide the implementation for the API
const MyApiLive = HttpApiBuilder.layer(MyApi).pipe(
  Layer.provide(QuotesLive),
  Layer.provide(FetchHttpClient.layer),
  Layer.provide(HttpServer.layerServices),
);

// Create the Lambda handler
export const handler = LambdaHandler.fromHttpApi(MyApiLive);
