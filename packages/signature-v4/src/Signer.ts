import { HttpClient, HttpClientError, HttpClientRequest } from '@effect/platform'
import { RequestError } from '@effect/platform/HttpClientError'
import * as Effect from 'effect/Effect'
import { Credentials } from './Credentials.js'
import { Scope } from 'effect/Scope'

export interface SignerOptions {
  service: string
  region: string
}

export interface Signer {
  signRequest: (request: HttpClientRequest.HttpClientRequest, options?: SignerOptions) => Effect.Effect<HttpClientRequest.HttpClientRequest, RequestError, Credentials>
  transformClient: (client: HttpClient.HttpClient, options?: SignerOptions) => HttpClient.HttpClient<HttpClientError.HttpClientError, Scope | Credentials>
}
