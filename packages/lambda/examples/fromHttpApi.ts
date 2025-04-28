import { LambdaHandler } from "@effect-aws/lambda";
import {
  FetchHttpClient,
  HttpApi,
  HttpApiBuilder,
  HttpApiEndpoint,
  HttpApiGroup,
  HttpApiSchema,
  HttpClient,
  HttpClientResponse,
  HttpServer,
} from "@effect/platform";
import { Effect, Layer, Schema } from "effect";

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

const symbolParam = HttpApiSchema.param("symbol", Schema.String);

const getQuote = HttpApiEndpoint.get(
  "getQuote",
)`/quote/${symbolParam}`.addSuccess(YahooResponse);

const quotesGroup = HttpApiGroup.make("quotes").add(getQuote);

const MyApi = HttpApi.make("MyApi").add(quotesGroup);

// Implement the "quotes" group
const QuotesLive = HttpApiBuilder.group(
  MyApi,
  "quotes",
  (handlers) =>
    handlers.handle(
      "getQuote",
      ({ path }) =>
        HttpClient.get(`https://query2.finance.yahoo.com/v8/finance/chart/${path.symbol}`, {
          urlParams: { interval: "1d" },
        }).pipe(
          Effect.andThen(HttpClientResponse.schemaBodyJson(YahooResponse)),
          Effect.orDie,
        ),
    ),
);

// Provide the implementation for the API
const MyApiLive = HttpApiBuilder.api(MyApi).pipe(
  Layer.provide(QuotesLive),
  Layer.provide(FetchHttpClient.layer),
);

// Create the Lambda handler
export const handler = LambdaHandler.fromHttpApi(
  Layer.mergeAll(
    MyApiLive,
    // you could also use NodeHttpServer.layerContext, depending on your
    // server's platform
    HttpServer.layerContext,
  ),
);
