---
"@effect-aws/commons": minor
---

accept an `abortSignal` in `HttpHandlerOptions`, so streaming responses that outlive the effect (event streams, S3 object bodies) can tear down their connection early
