import { CloudFrontSigner } from "@effect-aws/cloudfront";
import { Cause, Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { describe, expect, it } from "vitest";

const testPrivateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIkujotZTYElMo
Gd4lVpikdunqOFWBRBYDvkI3AHCmh6nTzZZY4OBInqpgWyVMyUKxp9TxGvENsDeR
5AWCmlKepRmoQkw+jE6jKVOjIrxBgBxO1yDlusbvktmOA72q6cGRGnnC6oIIk3u1
UsBN7fy9Uj/AfbyEAMdylqIHKj2TQVQSSx1DPd2461g+beyyv5FRuJTH9i3gNqKg
4f6n4IFeVpmQnSvyuPApOT9GRFCDXrwhAWI0aDsR70EsvQ7rX5orY/VsP6WZnt3K
+5DRCFNiGL+JfAitoBgr4s2jaNImnbgz4dhGHoefz2WmnrVW5gtiist6r5u/eAlc
QxK8UTFNAgMBAAECggEAAI4LfLO35P5T+/a3J+iv6zb0mbQsysenie+2Ti5ybiHo
JRDBO2vpb7n+Par/roRmBCJmbLS6Evzrgm9PjP3Xs0TaQWsBiMpcxodgPSf+iyEL
TJqJJqmLUFfAwbhRh4E2PfkFRwLc3jo0nuexZkwwvuaIP535bgh0hMtVSNDKMwSV
F1dV3MDl5v0FuN8goVicRxL/VWCHYVwmnEiQbJO+0y5iO8wZB8K28MQ5/BHaf9AQ
JeSuBG6gDcxreH1b6843KD6X2FCuSHVUScw8L8xjBPiyVey3A+Lov+ci7RBNgsOl
8NeetxYb5lgtDcPIwI8/CounPsQ87LbzrV+B2C0JHwKBgQDyvm3EdcMwXyi93CO/
yREuUuNN/7bkDcIRP/MGh7I8HBiWEchhtLZPZcOhDOzceB8GWBCbhJxzFNxUirT2
s13oZvr0F0L6LUBo2qL7yi8833zh8Jl2SWuI76+fypPKgdJgI0AfXPvKHcvdxL2h
8kq2CdS/aU9axNR6jZpAA9G59wKBgQDThvFAY+puQJdhWMJWCj3QlxWnZpaclSEo
swIFVybIrj/4OeFRboU9GewDwPu3KakaPdEhvtg6C+/zHWaLNSGEf26rC6qiMJ98
PkG6rjXVMUDr1B5iqcihSsNyeKHzW21LyzcssA5JFOYFotltRvTay2ARZ9DN90h+
ZH9I7lL92wKBgQDW7Hhv2/yoVXjTMZiNdE87/rO3GdQq82uCrmZUv8y1oAK8zJ3o
tII+plGhxLnrMof1q/94Ut/anPu/9tfnHkTlQliryfTJYUuICx0HZqqQcSg3PDoE
G1mU8vNCvbBBOtSzvkJGAqQE/oDEqC9mtgokR2wQ1gMm0ON4ZuvOBhOpXQKBgEg2
CAQIWA6dZFBqQaWnx2R/P3gvcHkx++jt+2GhV+8odVQjRkVLapbqU4UQi54CzeTU
d6GCikR+sMKZJdmeILwf2MLxr6XA3aFHi57UPDJ0pwobFuhtt71ATaq1fewbKRu3
2zUZQTc3uDLyXjGNCKfsx/YJL+IwagIkAsP+AD0DAoGAK2dtCpMI3DbPHxdOLKcS
0guCZtNlxBnC8uVCPBh6f6dYF4leREMl34mTv0zvS3S6IvHLUUJVJPzpMz6yoof5
a4rvL+vauvR8bKtsUMcoaTLXgqZeo22evsJLWFAwUJ4lK8i+3MXvTQUKTIlVjkMu
dltFF4PcpRyh00WqTLx6i9o=
-----END PRIVATE KEY-----`;

describe("CloudFrontSigner", () => {
  const layer = CloudFrontSigner.layer({
    keyPairId: "K2JCJMDEHXQW5F",
    privateKey: testPrivateKey,
  });

  describe("getSignedUrl", () => {
    it("should generate a signed URL with canned policy", async () => {
      const result = await pipe(
        CloudFrontSigner.use((svc) =>
          svc.getSignedUrl({
            url: "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
            dateLessThan: new Date(Date.now() + 60 * 60 * 1000),
          })
        ),
        Effect.provide(layer),
        Effect.runPromiseExit,
      );

      expect(result).satisfies(Exit.isSuccess);
      if (Exit.isSuccess(result)) {
        expect(result.value).toContain(
          "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
        );
        expect(result.value).toContain("Expires=");
        expect(result.value).toContain("Signature=");
        expect(result.value).toContain("Key-Pair-Id=K2JCJMDEHXQW5F");
      }
    });

    it("should generate a signed URL with custom policy", async () => {
      const url = "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg";
      const policy = JSON.stringify({
        Statement: [
          {
            Resource: url,
            Condition: {
              DateLessThan: {
                "AWS:EpochTime": Math.floor(Date.now() / 1000) + 3600,
              },
            },
          },
        ],
      });

      const result = await pipe(
        CloudFrontSigner.use((svc) =>
          svc.getSignedUrl({
            url,
            policy,
          })
        ),
        Effect.provide(layer),
        Effect.runPromiseExit,
      );

      expect(result).satisfies(Exit.isSuccess);
      if (Exit.isSuccess(result)) {
        expect(result.value).toContain(url);
        expect(result.value).toContain("Policy=");
        expect(result.value).toContain("Signature=");
        expect(result.value).toContain("Key-Pair-Id=K2JCJMDEHXQW5F");
      }
    });

    it("should use the policy resource when url is omitted", async () => {
      const url = "https://d111111abcdef8.cloudfront.net/private-content/*";
      const policy = JSON.stringify({
        Statement: [
          {
            Resource: url,
            Condition: {
              DateLessThan: {
                "AWS:EpochTime": Math.floor(Date.now() / 1000) + 3600,
              },
            },
          },
        ],
      });

      const result = await pipe(
        CloudFrontSigner.use((svc) =>
          svc.getSignedUrl({
            policy,
          })
        ),
        Effect.provide(layer),
        Effect.runPromiseExit,
      );

      expect(result).satisfies(Exit.isSuccess);
      if (Exit.isSuccess(result)) {
        expect(result.value).toContain(url);
        expect(result.value).toContain("Policy=");
        expect(result.value).toContain("Key-Pair-Id=K2JCJMDEHXQW5F");
      }
    });

    it("should fail when the private key is invalid", async () => {
      const invalidLayer = CloudFrontSigner.layer({
        keyPairId: "K2JCJMDEHXQW5F",
        privateKey: "not-a-private-key",
      });

      const result = await pipe(
        CloudFrontSigner.use((svc) =>
          svc.getSignedUrl({
            url: "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
            dateLessThan: new Date(Date.now() + 60 * 60 * 1000),
          })
        ),
        Effect.provide(invalidLayer),
        Effect.runPromiseExit,
      );

      expect(result).satisfies(Exit.isFailure);
      if (Exit.isFailure(result)) {
        expect(Cause.squash(result.cause)).toBeInstanceOf(Error);
      }
    });
  });

  describe("getSignedCookies", () => {
    it("should generate signed cookies with canned policy", async () => {
      const result = await pipe(
        CloudFrontSigner.use((svc) =>
          svc.getSignedCookies({
            url: "https://d111111abcdef8.cloudfront.net/private-content/*",
            dateLessThan: new Date(Date.now() + 60 * 60 * 1000),
          })
        ),
        Effect.provide(layer),
        Effect.runPromiseExit,
      );

      expect(result).satisfies(Exit.isSuccess);
      if (Exit.isSuccess(result)) {
        expect(result.value).toHaveProperty(
          "CloudFront-Key-Pair-Id",
          "K2JCJMDEHXQW5F",
        );
        expect(result.value).toHaveProperty("CloudFront-Signature");
        expect(result.value).toHaveProperty("CloudFront-Expires");
      }
    });

    it("should generate signed cookies with custom policy", async () => {
      const url = "https://d111111abcdef8.cloudfront.net/private-content/*";
      const policy = JSON.stringify({
        Statement: [
          {
            Resource: url,
            Condition: {
              DateLessThan: {
                "AWS:EpochTime": Math.floor(Date.now() / 1000) + 3600,
              },
            },
          },
        ],
      });

      const result = await pipe(
        CloudFrontSigner.use((svc) =>
          svc.getSignedCookies({
            policy,
          })
        ),
        Effect.provide(layer),
        Effect.runPromiseExit,
      );

      expect(result).satisfies(Exit.isSuccess);
      if (Exit.isSuccess(result)) {
        expect(result.value).toHaveProperty(
          "CloudFront-Key-Pair-Id",
          "K2JCJMDEHXQW5F",
        );
        expect(result.value).toHaveProperty("CloudFront-Signature");
        expect(result.value).toHaveProperty("CloudFront-Policy");
      }
    });
  });
});
