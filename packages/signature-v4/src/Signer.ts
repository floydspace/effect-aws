import { HttpClient, HttpClientError, HttpClientRequest } from '@effect/platform'
import { RequestError } from '@effect/platform/HttpClientError'
import * as Effect from 'effect/Effect'
import { Credentials } from './Credentials.js'
import { Scope } from 'effect/Scope'

export interface Signer {
  signRequest: (request: HttpClientRequest.HttpClientRequest) => Effect.Effect<HttpClientRequest.HttpClientRequest, RequestError, Credentials>
  transformClient: (client: HttpClient.HttpClient) => HttpClient.HttpClient<HttpClientError.HttpClientError, Scope | Credentials>
}
