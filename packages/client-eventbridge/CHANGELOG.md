# @effect-aws/client-eventbridge

## 1.5.1

### Patch Changes

- [#75](https://github.com/floydspace/effect-aws/pull/75) [`9dc170d`](https://github.com/floydspace/effect-aws/commit/9dc170d975c04888bbc7ca7b241b4b5265668fb5) Thanks [@godu](https://github.com/godu)! - export the HttpHandlerOptions type

## 1.5.0

### Minor Changes

- [`e540420`](https://github.com/floydspace/effect-aws/commit/e5404208c2438e1e1546637a8edbbdc1c9468850) Thanks [@floydspace](https://github.com/floydspace)! - integrate aws-sdk abort signal with effect interruption

## 1.4.0

### Minor Changes

- [#58](https://github.com/floydspace/effect-aws/pull/58) [`888dc8c`](https://github.com/floydspace/effect-aws/commit/888dc8ca0d7104e33a24426a1aacedb48e8fc3ac) Thanks [@floydspace](https://github.com/floydspace)! - use Effect.Tag instead of Context.GenericTag for service, upgrade sdk, handle only known errors

## 1.3.0

### Minor Changes

- [`0cfcda0`](https://github.com/floydspace/effect-aws/commit/0cfcda0d5617916d966807f5d5120df9ba461c12) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v3

## 1.2.0

### Minor Changes

- [`4b5ee14`](https://github.com/floydspace/effect-aws/commit/4b5ee144d4d2f30e7a841a3cf5ccd7ff87d32132) Thanks [@floydspace](https://github.com/floydspace)! - return proper errors in failure channel in eventbridge and lambda services

## 1.1.1

### Patch Changes

- [`b2f00db`](https://github.com/floydspace/effect-aws/commit/b2f00db5fdffaa74bcb124324db7313bd4f218df) Thanks [@floydspace](https://github.com/floydspace)! - update effect peer version

## 1.1.0

### Minor Changes

- [`82eaea7`](https://github.com/floydspace/effect-aws/commit/82eaea778048c9ebba98682196448b0aa1586d2e) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v2.3 and fix breaking changes

## 1.0.2

### Patch Changes

- [`88676ae`](https://github.com/floydspace/effect-aws/commit/88676ae3a5f7fa514cab58ba83a50a0774be1aa1) Thanks [@floydspace](https://github.com/floydspace)! - use effect@~2.2 as maximum allowed peer version

## 1.0.1

### Patch Changes

- [#29](https://github.com/floydspace/effect-aws/pull/29) [`4b6c521`](https://github.com/floydspace/effect-aws/commit/4b6c521206c8ff76ff878938f6b90ee474cc8da2) Thanks [@godu](https://github.com/godu)! - improve tree shaking by using sideEffects flag

## 1.0.0

### Major Changes

- [`3e5d0b3`](https://github.com/floydspace/effect-aws/commit/3e5d0b3b3882e0aa6d07bc06432990551316ac30) Thanks [@floydspace](https://github.com/floydspace)! - Upgrade to effect v2 and release stable version

## 0.4.0

### Minor Changes

- [`744df3c`](https://github.com/floydspace/effect-aws/commit/744df3ca6406b3a35e3066d5fe11ca7082c4c454) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect dependency

## 0.3.0

### Minor Changes

- [`0a969d8`](https://github.com/floydspace/effect-aws/commit/0a969d8a74c3bf1b87ff6a1c8bf689af849797e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect peer version

## 0.2.2

### Patch Changes

- [`280d8bd`](https://github.com/floydspace/effect-aws/commit/280d8bd6686d6e7a2b73322a047e8eb22263b1e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade dependencies

## 0.2.1

### Patch Changes

- [`6b99904`](https://github.com/floydspace/effect-aws/commit/6b9990497bdb20f240d8261b6382db421e9a3ec2) Thanks [@floydspace](https://github.com/floydspace)! - as @mikearnaldi said: "we should really never do tacit passing"

## 0.2.0

### Minor Changes

- [#14](https://github.com/floydspace/effect-aws/pull/14) [`cddfb74`](https://github.com/floydspace/effect-aws/commit/cddfb74a00b10a13ccfe3749e90961119c4f0906) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect version to the next one

## 0.1.0

### Minor Changes

- [`243882e`](https://github.com/floydspace/effect-aws/commit/243882e1bf71fa2c019f52f9d974f8cf1c433912) Thanks [@floydspace](https://github.com/floydspace)! - implement effectful dynamodb, eventbridge and lambda clients
