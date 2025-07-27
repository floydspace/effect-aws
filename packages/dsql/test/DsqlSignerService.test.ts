import { DsqlSigner } from "@effect-aws/dsql";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { describe, expect, it } from "vitest";

describe("DsqlSigner", () => {
  it("layer", async () => {
    const layer = DsqlSigner.layer({
      hostname: "localhost",
      region: "us-east-1",
      credentials: {
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey",
      },
    });

    const adminToken = await pipe(
      DsqlSigner.getDbConnectAdminAuthToken(),
      Effect.provide(layer),
      Effect.runPromiseExit,
    );
    expect(adminToken).satisfies(Exit.isSuccess);
    expect(adminToken).has.property("value").match(
      /^localhost\/\?Action=DbConnectAdmin&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=.+&X-Amz-Date=.+&X-Amz-Expires=.+&X-Amz-Signature=.+&X-Amz-SignedHeaders=host$/,
    );

    const token = await pipe(
      DsqlSigner.getDbConnectAuthToken(),
      Effect.provide(layer),
      Effect.runPromiseExit,
    );
    expect(token).satisfies(Exit.isSuccess);
    expect(token).has.property("value").match(
      /^localhost\/\?Action=DbConnect&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=.+&X-Amz-Date=.+&X-Amz-Expires=.+&X-Amz-Signature=.+&X-Amz-SignedHeaders=host$/,
    );
  });
});
