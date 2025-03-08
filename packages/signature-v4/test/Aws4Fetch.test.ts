import * as Layer from 'effect/Layer'
import * as Effect from 'effect/Effect'
import { SignatureV4 } from '@effect-aws/signature-v4/Aws4Fetch'
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

    expect(req.headers[`authorization`]).toMatchInlineSnapshot(`"AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20250309/eu-west-1/execute-api/aws4_request, SignedHeaders=accept;host;x-amz-date;x-amz-security-token, Signature=c467cfb4191950cb8e1264c46ad448b847f1264edd9cbe7b84ccbd71144720f7"`)
  }))
)
