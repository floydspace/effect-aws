## Installation

```bash
npm install --save @effect-aws/signature-v4
```

_Note_: depending on the chosen implementation either `aws4fetch` or `@smithy/signature-v4` dependency is required

## Usage

1. Let's start with creating AWS credentials layer.  
Credentials have type `Ref<Option<AWSCredentials>>`, making it possible to update it's value at any moment during app lifetime

```typescript
import { Credentials } from '@effect-aws/signature-v4/Credentials'
import awsCredentials from './credentials.ts'


const CredentialsLayer = Credentials.layer(awsCredentials)

/**
 * We can access or modify credentials directly from within our Effect app like this
 * 
 */
Effect.gen(function* () {
  /**
   * Get credentials
   */
  const credentials: Option<AWSCredentials> = yield* Credentials.pipe(
    Effect.andThen(Ref.get)
  )
  /**
   * Populate credentials with new value
   */
  yield* Credentials.pipe(
    Effect.andThen(Ref.set(Option.some(newCredentials)))
  )

  // or via handy API
  const credentials = yield* Credentials.current
  yield* Credentials.update(newCredentials)
}).pipe(
  Effect.provide(CredentialsLayer)
)
```

_Note_: secretAccessKey and sessionToken credentials values are wrapped with `Redacted`

2. Use signer of choice to sign HttpClientRequest
```typescript
import { SignatureV4 } from '@effect-aws/signature-v4/Smithy'
// or
import { SignatureV4 } from '@effect-aws/signature-v4/Aws4Fetch'
```

_Note_: avoid importing an implementation via barrel-import due to different set of peer dependencies

```typescript
const SigV4 = SignatureV4.Default.pipe(
  Effect.provideMerge(CredentialsLayer) // or Effect.provide if you're not planning to access credentials directly in your code
)

Effect.gen(function* () {
  // you got a hold of an HttpClientRequest
  const signedRequest = yield* SignatureV4.signRequest(request)

  // or use transformClient to modify and HttpClient to automatically sign requests

  const { transformClient } = yield* SignatureV4

  const apiClient = yield* HttpApiClient.make(Api, {
    baseUrl,
    transformClient,
  })
}).pipe(
  Layer.provide(SigV4)
)
```
