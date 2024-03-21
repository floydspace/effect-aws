import { monorepo } from "@aws/pdk";
import { javascript, YamlFile } from "projen";
import { Changesets, Docgen, TypeScriptLibProject, Vitest } from "./projenrc";

const org = "floydspace";
const name = "effect-aws";
const repo = `${org}/${name}`;

const project = new monorepo.MonorepoTsProject({
  name: name,
  description: "Effectful AWS",
  repository: `github:${repo}`,
  homepage: `https://${org}.github.io/${name}`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  license: "MIT",
  packageManager: javascript.NodePackageManager.PNPM,
  clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
  depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
  monorepoUpgradeDeps: false,
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new Changesets(project, {
  repo: repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

new Docgen(project);

new Vitest(project);

project.addScripts({
  "codegen-clients": "tsx ./scripts/codegen-clients.ts",
});
project.addDeps("effect@^2.3.1", "enquirer@^2.4.1");

const commonPeerDeps = ["effect@>=2.3.1 <2.5.0"];

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  deps: ["@aws-lambda-powertools/logger@^1.9.0"], // lower versions are not supported, raise an issue if you need it
  devDeps: [
    "@types/aws-lambda", // peer for @aws-lambda-powertools/logger
  ],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "lambda",
  devDeps: ["@types/aws-lambda"],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "s3-request-presigner",
  devDeps: ["@types/aws-lambda"],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "polly-request-presigner",
  devDeps: ["@types/aws-lambda"],
  peerDeps: commonPeerDeps,
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder
project.addGitIgnore("docs/"); // docs are generated
project.addGitIgnore("generated/"); // clients are generated

project.synth();
