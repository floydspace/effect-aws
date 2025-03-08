import * as Context from 'effect/Context'
import * as Option from 'effect/Option'
import * as Ref from 'effect/Ref'

export interface AWSCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  expiration?: Date;
}

export class Credentials extends Context.Tag(`@effect-aws/signature-v4/Credentials`)<Credentials, Ref.Ref<Option.Option<AWSCredentials>>>() {}
