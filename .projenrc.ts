import { monorepo } from "@aws/pdk";
import { javascript } from "projen";
import { Changesets, TypeScriptLibProject } from "./projenrc";

const project = new monorepo.MonorepoTsProject({
  name: "effect-aws",
  description: "Effectful AWS",
  repository: "https://github.com/floydspace/effect-aws",
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  license: "MIT",
  packageManager: javascript.NodePackageManager.PNPM,
  clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
  depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
});

new Changesets(project, {
  repo: "floydspace/effect-aws",
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  devDeps: [
    "@aws-lambda-powertools/logger",
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
    "@types/aws-lambda",
  ],
  peerDeps: [
    "@aws-lambda-powertools/logger@^1.6.0",
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
  ],
  jest: false,
});

project.addGitIgnore(".direnv/");

project.synth();
