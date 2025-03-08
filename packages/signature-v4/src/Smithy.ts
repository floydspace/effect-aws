import { HttpClient } from '@effect/platform'
import { RequestError } from '@effect/platform/HttpClientError'
import * as HttpClientRequest from '@effect/platform/HttpClientRequest'
import { Sha256 } from "@aws-crypto/sha256-js"
import { SignatureV4 as AwsSignatureV4 } from '@smithy/signature-v4'
import * as Effect from 'effect/Effect'
import * as Option from 'effect/Option'
import * as Ref from 'effect/Ref'
import { Credentials } from './Credentials.js'
import { Signer, SignerOptions } from './Signer.js'
import { getBody, guessServiceRegion } from './helpers.js'
import { HttpRequest } from '@smithy/types'

/**
 * AWS Signature v4 implementation @smithy/signature-4
 */
export class SignatureV4 extends Effect.Service<SignatureV4>()(`@effect-aws/signature-v4/SignatureV4`, {
  scoped: Effect.gen(function* () {
    const signRequest = (request: HttpClientRequest.HttpClientRequest, options?: SignerOptions) => {
      return Credentials.pipe(Effect.flatMap(Ref.get)).pipe(
        Effect.andThen(
          Option.match({
            onNone: () => Effect.succeed(request),
            onSome: (credentials) => {
              const url = new URL(request.url)
              const [service, region] = options
                ? [options.region, options.service]
                : guessServiceRegion(url, request.headers)

              const signer = new AwsSignatureV4({
                credentials,
                service,
                region,
                sha256: Sha256,
              })

              const requestAlike = {
                body: getBody(request.body),
                headers: request.headers,
                path: url.pathname,
              } as unknown as HttpRequest


              return Effect.tryPromise(() => signer.sign(requestAlike)).pipe(
                Effect.andThen((result) =>
                  request.pipe(HttpClientRequest.setHeaders(result.headers)),
                ),
                Effect.mapError(() => new RequestError({ reason: `Encode`, request, description: `Failed to sign request` }))
              )
            },
          }),
        ),
      )
    }

    return {
      signRequest,
      transformClient: (client: HttpClient.HttpClient, options?: SignerOptions) => HttpClient.mapRequestEffect(client, (r) => signRequest(r, options)),
    } as Signer
  }),
}) {}
