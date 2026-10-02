import * as Context from 'effect/Context'
import * as Effect from 'effect/Effect'
import * as Option from 'effect/Option'
import * as Layer from 'effect/Layer'
import * as Redacted from 'effect/Redacted'
import * as Ref from 'effect/Ref'

export interface AWSCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  expiration?: Date;
}

export interface AWSCredentialsRedacted {
  accessKeyId: string;
  secretAccessKey: Redacted.Redacted<string>;
  sessionToken?: Redacted.Redacted<string>;
  expiration?: Date;
}

const redactCredentials = (creds?: AWSCredentials): Option.Option<AWSCredentialsRedacted> => Option.fromNullable(creds).pipe(
  Option.map((creds) => ({ 
    ...creds, 
    secretAccessKey: 
    Redacted.make(creds.secretAccessKey), 
    sessionToken: Option.fromNullable(creds.sessionToken).pipe(
      Option.map(Redacted.make),
      Option.getOrUndefined
    )
  }))
)

export interface CredentialsType {
  current: Effect.Effect<Option.Option<AWSCredentialsRedacted>>
  update: (credentials?: AWSCredentials) => Effect.Effect<void>
}


export class Credentials extends Context.Tag(`@effect-aws/signature-v4/Credentials`)<Credentials, CredentialsType>() {
  static layer = (credentials?: AWSCredentials) => {
    const ref = Ref.unsafeMake(redactCredentials(credentials))
    const service = {
      current: Ref.get(ref),
      update: (credentials) => Ref.set(ref, redactCredentials(credentials))
    } satisfies CredentialsType

    return Layer.succeed(Credentials, service)
  }

  static current = Credentials.pipe(Effect.flatMap((a) => a.current))
  static update = (credentials?: AWSCredentials) => Credentials.pipe(Effect.flatMap((a) => a.update(credentials)))
}
