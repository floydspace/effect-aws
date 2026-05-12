# @effect-aws/cloudfront

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fcloudfront?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/cloudfront)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fcloudfront)](https://www.npmjs.com/package/@effect-aws/cloudfront)

This package provides Effect modules for AWS CloudFront utilities.

## Installation

```bash
npm install --save @effect-aws/cloudfront
```

## Usage

### Signed URL

```ts
import { CloudFrontSigner } from "@effect-aws/cloudfront"
import { Effect } from "effect"

const program = CloudFrontSigner.getSignedUrl({
  url: "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
  dateLessThan: new Date(Date.now() + 60 * 60 * 1000)
})

const result = program.pipe(
  Effect.provide(
    CloudFrontSigner.layer({
      keyPairId: "K2JCJMDEHXQW5F",
      privateKey: "CONTENTS-OF-PRIVATE-KEY"
    })
  ),
  Effect.runPromise
)
```

### Signed Cookies

```ts
import { CloudFrontSigner } from "@effect-aws/cloudfront"
import { Effect } from "effect"

const program = CloudFrontSigner.getSignedCookies({
  url: "https://d111111abcdef8.cloudfront.net/private-content/*",
  dateLessThan: new Date(Date.now() + 60 * 60 * 1000)
})

const result = program.pipe(
  Effect.provide(
    CloudFrontSigner.layer({
      keyPairId: "K2JCJMDEHXQW5F",
      privateKey: "CONTENTS-OF-PRIVATE-KEY"
    })
  ),
  Effect.runPromise
)
```

### Custom Policy

```ts
import { CloudFrontSigner } from "@effect-aws/cloudfront"
import { Effect } from "effect"

const policy = JSON.stringify({
  Statement: [
    {
      Resource: "https://d111111abcdef8.cloudfront.net/private-content/*",
      Condition: {
        DateLessThan: {
          "AWS:EpochTime": Math.floor(Date.now() / 1000) + 3600
        }
      }
    }
  ]
})

const program = CloudFrontSigner.getSignedUrl({ policy })

const result = program.pipe(
  Effect.provide(
    CloudFrontSigner.layer({
      keyPairId: "K2JCJMDEHXQW5F",
      privateKey: "CONTENTS-OF-PRIVATE-KEY"
    })
  ),
  Effect.runPromise
)
```
