# @effect-aws/client-timestream-influxdb

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-timestream-influxdb?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-timestream-influxdb)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-timestream-influxdb)](https://www.npmjs.com/package/@effect-aws/client-timestream-influxdb)

## Installation

```bash
npm install --save @effect-aws/client-timestream-influxdb
```

## Usage

With default TimestreamInfluxDBClient instance:

```typescript
import { TimestreamInfluxDB } from "@effect-aws/client-timestream-influxdb";

const program = TimestreamInfluxDB.use((svc) => svc.listDbClusters(args));

const result = pipe(
  program,
  Effect.provide(TimestreamInfluxDB.defaultLayer),
  Effect.runPromise,
);
```

With custom TimestreamInfluxDBClient instance:

```typescript
import { TimestreamInfluxDB } from "@effect-aws/client-timestream-influxdb";

const program = TimestreamInfluxDB.use((svc) => svc.listDbClusters(args));

const result = await pipe(
  program,
  Effect.provide(
    TimestreamInfluxDB.baseLayer(() => new TimestreamInfluxDBClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom TimestreamInfluxDBClient configuration:

```typescript
import { TimestreamInfluxDB } from "@effect-aws/client-timestream-influxdb";

const program = TimestreamInfluxDB.use((svc) => svc.listDbClusters(args));

const result = await pipe(
  program,
  Effect.provide(TimestreamInfluxDB.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `TimestreamInfluxDB.baseLayer((default) => new TimestreamInfluxDBClient({ ...default, region: "eu-central-1" }))`
