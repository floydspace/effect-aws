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

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  deps: ["@aws-lambda-powertools/logger@^1"],
  devDeps: [
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
    "@types/aws-lambda", // peer for @aws-lambda-powertools/logger
  ],
  peerDeps: ["@effect/data@^0.18.4", "@effect/io@^0.40.0"],
  jest: false,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-s3",
  deps: ["@aws-sdk/types@^3", "@aws-sdk/client-s3@^3"],
  devDeps: [
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
    "aws-sdk-client-mock",
    "aws-sdk-client-mock-jest",
  ],
  peerDeps: ["@effect/data@^0.18.4", "@effect/io@^0.40.0"],
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder

project.synth();
