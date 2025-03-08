import { HttpBody, HttpClient } from '@effect/platform'
import { RequestError } from '@effect/platform/HttpClientError'
import * as HttpClientRequest from '@effect/platform/HttpClientRequest'
import { AwsV4Signer } from 'aws4fetch'
import * as Effect from 'effect/Effect'
import * as Match from 'effect/Match'
import * as Option from 'effect/Option'
import * as Ref from 'effect/Ref'
import { Credentials } from './Credentials.js'
import { Signer } from './Signer.js'

export class Aws4Fetch extends Effect.Service<Aws4Fetch>()(`@effect-aws/signature-v4/Signer`, {
  effect: Effect.gen(function* () {
    const getBody = Match.type<HttpBody.HttpBody>().pipe(
      Match.tag(`Empty`, (): XMLHttpRequestBodyInit => ``),
      Match.tag(`FormData`, (body): XMLHttpRequestBodyInit => body.formData),
      Match.tag(`Raw`, (body): XMLHttpRequestBodyInit => body.body as string),
      Match.tag(`Stream`, (): XMLHttpRequestBodyInit => ``),
      Match.tag(`Uint8Array`, (body): XMLHttpRequestBodyInit => body.body),
      Match.exhaustive,
    )

    const signRequest = (request: HttpClientRequest.HttpClientRequest) => {
      const body: BodyInit = getBody(request.body)

      return Credentials.pipe(Effect.flatMap(Ref.get)).pipe(
        Effect.andThen(
          Option.match({
            onNone: () => Effect.succeed(request),
            onSome: ({ accessKeyId, secretAccessKey, sessionToken }) => {
              const signer = new AwsV4Signer({
                method: request.method,
                url: request.url,
                headers: request.headers,
                body,
                accessKeyId,
                secretAccessKey,
                sessionToken: sessionToken!,
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
      transformClient: (client: HttpClient.HttpClient) =>
        client.pipe(
          HttpClient.mapRequestEffect((r) => signRequest(r)),
        ),
    } as Signer
  }),
}) {}
