import { monorepo } from "@aws/pdk";
import { javascript, YamlFile } from "projen";
import { Changesets, TypeScriptLibProject } from "./projenrc";

const org = "floydspace";
const name = "effect-aws";
const repo = `${org}/${name}`;

const project = new monorepo.MonorepoTsProject({
  name: name,
  description: "Effectful AWS",
  repository: `github:${repo}`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  license: "MIT",
  packageManager: javascript.NodePackageManager.PNPM,
  clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
  depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
  devDeps: ["@types/jest"], // needed for vscode to not complain about jest types
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new Changesets(project, {
  repo: repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

const commonDevDeps = ["aws-sdk-client-mock", "aws-sdk-client-mock-jest"];
const commonPeerDeps = ["@effect/data@^0.18.4", "@effect/io@^0.40.0"];

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  deps: ["@aws-lambda-powertools/logger@^1.9.0"], // lower versions are not supported, raise an issue if you need it
  devDeps: [
    ...commonPeerDeps,
    "@types/aws-lambda", // peer for @aws-lambda-powertools/logger
  ],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-s3",
  deps: ["@aws-sdk/types@^3", "@aws-sdk/client-s3@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sns",
  deps: ["@aws-sdk/types@^3", "@aws-sdk/client-sns@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sqs",
  deps: ["@aws-sdk/types@^3", "@aws-sdk/client-sqs@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder

project.synth();
