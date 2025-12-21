import type { PnpmMonorepoProjectOptions } from "@floydspace/projen-components";
import { GitIdentityFixer, LinkableProject, PnpmMonorepoProject } from "@floydspace/projen-components";
import path from "node:path";
import type { TypescriptConfig } from "projen/lib/javascript";
import { BaseTypescriptConfig } from "./base-typescript-config.js";
import { BuildTypescriptConfig } from "./build-typescript-config.js";
import { TypeScriptLibProject } from "./typescript-project.js";

type PredefinedProps = "packageManager" | "clobber" | "depsUpgrade";
export type MonorepoProjectOptions = Omit<
  PnpmMonorepoProjectOptions,
  PredefinedProps
>;

export class MonorepoProject extends PnpmMonorepoProject {
  readonly tsconfigBase: TypescriptConfig;

  constructor(options: MonorepoProjectOptions) {
    super({
      pnpmVersion: "10.26.1",
      license: "MIT",
      eslint: false,
      prettier: false,
      github: true,
      githubOptions: { mergify: false, pullRequestLint: false },
      release: false,
      buildWorkflow: false,
      pullRequestTemplate: false,
      workflowNodeVersion: "lts/*",
      workflowPackageCache: true,
      clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
      depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
      npmProvenance: false,
      disableTsconfigDev: true, // main tsconfig is used for dev
      ...options,
    });

    this.package.addEngine("pnpm", ">=10 <11");

    new GitIdentityFixer(this, {
      name: "github-actions[bot]",
      email: "github-actions[bot]@users.noreply.github.com",
    });

    this.package.addField("type", "module");

    this.tsconfigBase = new BaseTypescriptConfig(this);

    new BuildTypescriptConfig(this, {
      baseTsConfig: this.tsconfigBase,
      referencedProjectsTsConfigName: "tsconfig.esm.json",
    });
  }

  preSynthesize(): void {
    super.preSynthesize();

    this.subprojects.forEach((subproject) => {
      if (subproject instanceof TypeScriptLibProject) {
        const implDeps = LinkableProject.ensure(subproject).implicitDependencies;

        subproject.tsconfigSrc.addExtends(this.tsconfigBase);
        subproject.tsconfigTst.addExtends(this.tsconfigBase);
        subproject.tsconfigExamples?.addExtends(this.tsconfigBase);
        subproject.tsconfigTst.file.addOverride("compilerOptions.types", ["../../vitest.d.ts"]);

        if (implDeps.length) {
          const depPaths = implDeps.map((d) => path.relative(subproject.outdir, d));

          subproject.tsconfigSrc?.file.addToArray(
            "references",
            ...depPaths.map((path) => ({ path })),
          );
          subproject.tsconfigTst.file.addToArray(
            "references",
            ...depPaths.map((path) => ({ path })),
          );
          subproject.tsconfigEsm.file.addToArray(
            "references",
            ...depPaths.map((path) => ({ path: `${path}/${subproject.tsconfigEsm.fileName}` })),
          );
          subproject.tsconfigCjs.file.addToArray(
            "references",
            ...depPaths.map((path) => ({ path: `${path}/${subproject.tsconfigCjs.fileName}` })),
          );
        }
      }
    });
  }
}
