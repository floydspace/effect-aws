import { HttpClient } from '@effect/platform'
import { RequestError } from '@effect/platform/HttpClientError'
import * as HttpClientRequest from '@effect/platform/HttpClientRequest'
import { AwsV4Signer } from 'aws4fetch'
import * as Effect from 'effect/Effect'
import * as Redacted from 'effect/Redacted'
import * as Option from 'effect/Option'
import * as Ref from 'effect/Ref'
import { Credentials } from './Credentials.js'
import { Signer, SignerOptions } from './Signer.js'
import { getBody } from './helpers.js'

/**
 * AWS Signature v4 implementation using aws4fetch package
 */
export class SignatureV4 extends Effect.Service<SignatureV4>()(`@effect-aws/signature-v4/SignatureV4`, {
  accessors: true,
  effect: Effect.gen(function* () {
    const signRequest = (request: HttpClientRequest.HttpClientRequest, options?: SignerOptions) => {
      const body: BodyInit = getBody(request.body)

      return Credentials.pipe(Effect.flatMap(Ref.get)).pipe(
        Effect.andThen(
          Option.match({
            onNone: () => Effect.succeed(request),
            onSome: ({ accessKeyId, secretAccessKey, sessionToken }) => {
              const signer = new AwsV4Signer({
                ...options,
                method: request.method,
                url: request.url,
                headers: request.headers,
                body,
                accessKeyId,
                secretAccessKey: secretAccessKey.pipe(Redacted.value),
                sessionToken: sessionToken?.pipe(Redacted.value),
                allHeaders: true
              })

              return Effect.tryPromise(() => signer.sign()).pipe(
                Effect.andThen((result) =>
                  request.pipe(HttpClientRequest.setHeaders(result.headers), HttpClientRequest.setUrl(result.url)),
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
