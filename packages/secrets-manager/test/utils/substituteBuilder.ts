import type { GetSecretValueCommandOutput, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import type { SubstituteOf } from "@fluffy-spoon/substitute";
import { Arg, Substitute } from "@fluffy-spoon/substitute";

export class SubstituteBuilder {
  static forSecretsManager(): SecretsManagerSubstituteBuilder {
    return new SecretsManagerSubstituteBuilder();
  }
}

class SecretsManagerSubstituteBuilder {
  public substitute: SubstituteOf<SecretsManagerClient>;

  constructor() {
    this.substitute = Substitute.for<SecretsManagerClient>();
  }

  mockGetSecretValue() {
    return new GetSecretValueSubstituteBuilder(this.substitute);
  }
}

class GetSecretValueSubstituteBuilder {
  private secretString?: string;

  constructor(
    private readonly substitute: SubstituteOf<SecretsManagerClient>,
  ) {}

  withSecretString(secretString: string) {
    this.secretString = secretString;
    return this;
  }

  failsWith(error: Error) {
    this.substitute.send(Arg.all()).rejects(error);
    return this.substitute;
  }

  succeeds() {
    const substituteResponse = Substitute.for<GetSecretValueCommandOutput>();
    substituteResponse.SecretString?.returns?.(this.secretString);

    this.substitute.send(Arg.all()).resolves(substituteResponse);

    return this.substitute;
  }
}
