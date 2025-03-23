import type { GetObjectCommandOutput, HeadObjectCommandOutput, S3Client } from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import type { SubstituteOf } from "@fluffy-spoon/substitute";
import { Arg, Substitute } from "@fluffy-spoon/substitute";

export class SubstituteBuilder {
  static forS3(): S3SubstituteBuilder {
    return new S3SubstituteBuilder();
  }
}

export class S3SubstituteBuilder {
  public substitute: SubstituteOf<S3Client>;

  constructor() {
    this.substitute = Substitute.for<S3Client>();
  }

  mockGetObject() {
    return new GetObjectSubstituteBuilder(this.substitute);
  }

  mockHeadObject() {
    return new HeadObjectSubstituteBuilder(this.substitute);
  }
}

class GetObjectSubstituteBuilder {
  private textBody?: string;

  constructor(
    private readonly substitute: SubstituteOf<S3Client>,
  ) {}

  withTextBody(body: string) {
    this.textBody = body;
    return this;
  }

  failsWith(error: Error) {
    this.substitute.send(Arg.is((a) => a instanceof GetObjectCommand), Arg.any()).rejects(error);
    return this.substitute;
  }

  succeeds() {
    const substituteResponse = Substitute.for<GetObjectCommandOutput>();
    const substituteBlob = Substitute.for<NonNullable<GetObjectCommandOutput["Body"]>>();
    substituteBlob.transformToByteArray().resolves(Buffer.from(this.textBody!));
    substituteResponse.Body?.returns?.(substituteBlob);

    this.substitute.send(Arg.is((a) => a instanceof GetObjectCommand), Arg.any()).resolves(substituteResponse);

    return this.substitute;
  }
}

class HeadObjectSubstituteBuilder {
  constructor(
    private readonly substitute: SubstituteOf<S3Client>,
  ) {}

  failsWith(error: Error) {
    this.substitute.send(Arg.is((a) => a instanceof HeadObjectCommand), Arg.any()).rejects(error);
    return this.substitute;
  }

  succeeds() {
    const substituteResponse = Substitute.for<HeadObjectCommandOutput>();

    this.substitute.send(Arg.is((a) => a instanceof HeadObjectCommand), Arg.any()).resolves(substituteResponse);

    return this.substitute;
  }
}
