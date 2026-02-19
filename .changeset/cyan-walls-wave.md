---
"@effect-aws/lambda": patch
---

fix multi-value cookie header to be properly typed and handled in the codebase. This ensures that when a response contains multiple "Set-Cookie" headers, instead of returning comma-separated value
