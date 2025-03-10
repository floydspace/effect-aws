import * as Layer from 'effect/Layer'
import * as Effect from 'effect/Effect'
import { SignatureV4 } from '@effect-aws/signature-v4/Smithy'
import { it } from '@effect/vitest'
import { expect } from 'vitest'
import { credentialsLayer, request } from './fixtures.js'

const credsLayer = Layer.mergeAll(
  SignatureV4.Default,
  credentialsLayer
)

it.layer(credsLayer)(({ effect }) => 
  effect(`Appends AWS v4 signature headers to the request`, () => Effect.gen(function* () {
    const signer = yield* SignatureV4
    const req = yield* request.pipe(
      Effect.andThen(signer.signRequest)
    )

    expect(req.headers[`authorization`]).toEqual(
      expect.stringContaining(`AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20250309/eu-west-1/execute-api/aws4_request, SignedHeaders=accept;content-length;content-type;x-amz-content-sha256;x-amz-date;x-amz-security-token`)
    )
  }))
)
