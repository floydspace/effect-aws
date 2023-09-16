import { monorepo } from "@aws/pdk";
import { javascript } from "projen";
import { TypeScriptLibProject } from "./projenrc";

const project = new monorepo.MonorepoTsProject({
  name: "effect-aws",
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  packageManager: javascript.NodePackageManager.PNPM,
  devDeps: ["@aws/pdk"],
});

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  devDeps: [
    "@aws-lambda-powertools/logger",
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
  ],
  peerDeps: [
    "@aws-lambda-powertools/logger@^1.6.0",
    "@effect/data@^0.18.4",
    "@effect/io@^0.40.0",
  ],
  jest: false,
});

project.synth();
