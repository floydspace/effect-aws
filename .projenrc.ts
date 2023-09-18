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
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new Changesets(project, {
  repo: repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  devDeps: [
    "@aws-lambda-powertools/logger",
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
    "@types/aws-lambda", // peer for @aws-lambda-powertools/logger
  ],
  peerDeps: [
    "@aws-lambda-powertools/logger@^1.6.0",
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
  ],
  jest: false,
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder

project.synth();
