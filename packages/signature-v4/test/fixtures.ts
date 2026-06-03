import * as Effect from 'effect/Effect'
import { HttpBody, HttpClientRequest } from '@effect/platform'
import { AWSCredentials, Credentials } from '../src/Credentials.js' 

export const credentials: AWSCredentials = {
  accessKeyId: `AKIAIOSFODNN7EXAMPLE`,
  secretAccessKey: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`,
  sessionToken: `AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/LTo6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3zrkuWJOgQs8IZZaIv2BXIa2R4Olgk`
}

export const credentialsLayer = Credentials.layer(credentials)

export const request = HttpBody.json(JSON.stringify({ searchText: `needle` })).pipe(
  Effect.andThen((body) => HttpClientRequest.make(`POST`)(`https://api-id1276237.execute-api.eu-west-1.amazonaws.com/search`, { acceptJson: true, body }))
)
