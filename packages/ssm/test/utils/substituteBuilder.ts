import { Parameter, SSMClient } from "@aws-sdk/client-ssm";
import Substitute, { Arg, SubstituteOf } from "@fluffy-spoon/substitute";

export class SubstituteBuilder {
  static forSSM(): SSMSubstituteBuilder {
    return new SSMSubstituteBuilder();
  }
}

class SSMSubstituteBuilder {
  public substitute: SubstituteOf<SSMClient>;

  constructor() {
    this.substitute = Substitute.for<SSMClient>();
  }

  mockGetParameter() {
    return new GetParameterSubstituteBuilder(this.substitute);
  }
}

class GetParameterSubstituteBuilder {
  private paramValue?: string;

  constructor(private readonly substitute: SubstituteOf<SSMClient>) {}

  withParameterValue(value: string) {
    this.paramValue = value;
    return this;
  }

  failsWith(error: Error) {
    this.substitute.send(Arg.all()).rejects(error);
    return this.substitute;
  }

  succeeds() {
    const substituteResponse = Substitute.for<Parameter>();
    substituteResponse.Value?.returns?.(this.paramValue);

    this.substitute.send(Arg.all()).resolves({
      $metadata: {},
      Parameter: substituteResponse,
    });

    return this.substitute;
  }
}
