import type { PnpmMonorepoProjectOptions } from "@floydspace/projen-components";
import { LinkableProject, PnpmMonorepoProject } from "@floydspace/projen-components";
import { github, JsonPatch, typescript } from "projen";
import type { GitIdentity } from "projen/lib/github/task-workflow.js";
import { TypescriptConfig, TypescriptConfigExtends, TypeScriptModuleResolution } from "projen/lib/javascript";

type PredefinedProps = "packageManager" | "clobber" | "depsUpgrade";
export type MonorepoProjectOptions = Omit<
  PnpmMonorepoProjectOptions,
  PredefinedProps
>;

export class MonorepoProject extends PnpmMonorepoProject {
  readonly tsconfigBase: TypescriptConfig;
  readonly tsconfigBuild: TypescriptConfig;

  constructor(options: MonorepoProjectOptions) {
    super({
      pnpmVersion: "9.15.4",
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
      disableTsconfigDev: true,
      ...options,
    });

    this.package.addField("type", "module");

    this.buildTask.prependExec("tsc -b tsconfig.build.json");

    this.tsconfigBase = new TypescriptConfig(this, {
      fileName: "tsconfig.base.json",
      compilerOptions: this.tsconfig?.compilerOptions,
    });
    this.tsconfigBase.file.addOverride("compilerOptions", {
      baseUrl: ".",
      checkJs: false,
      composite: true,
      declarationMap: true,
      downlevelIteration: true,
      emitDecoratorMetadata: true,
      forceConsistentCasingInFileNames: true,
      lib: ["ES2022", "DOM", "DOM.Iterable"],
      incremental: true,
      isolatedModules: true,
      module: "NodeNext",
      moduleDetection: "force",
      moduleResolution: "NodeNext",
      noErrorTruncation: false,
      noUncheckedIndexedAccess: false,
      removeComments: false,
      skipLibCheck: true,
      target: "ES2022",
    });
    this.tsconfigBase.file.addDeletionOverride("exclude");
    this.tsconfigBase.file.addDeletionOverride("include");

    this.tsconfigBuild = new TypescriptConfig(this, {
      fileName: "tsconfig.build.json",
      extends: TypescriptConfigExtends.fromTypescriptConfigs([
        this.tsconfigBase,
      ]),
    });
    this.tsconfigBuild.file.addDeletionOverride("exclude");
    this.tsconfigBuild.file.addOverride("include", []);
  }

  preSynthesize(): void {
    super.preSynthesize();

    // Set git identity for release workflow to keep the bot's commits consistent
    const releaseWorkflow = this.node.tryFindChild(`GithubWorkflow#release`) as github.GithubWorkflow;
    if (releaseWorkflow) {
      // @ts-ignore - `jobs` is private
      const jobStep = releaseWorkflow.jobs.release.steps.find((s) => s.name === "Set git identity");
      const gitIdentity: GitIdentity = {
        name: "github-actions[bot]",
        email: "github-actions[bot]@users.noreply.github.com",
      };
      jobStep.run = github.WorkflowSteps.setupGitIdentity({ gitIdentity }).run;
    }

    this.tsconfig?.addExtends(this.tsconfigBase);
    this.tsconfig?.file.addDeletionOverride("compilerOptions");
    this.tsconfig?.file.addDeletionOverride("exclude");
    // this.tsconfig?.file.addOverride("include", []);

    if (this.subprojects.length) {
      this.tsconfigBase.file.addOverride(
        "compilerOptions.paths",
        this.subprojects
          .map((p) => [
            {
              alias: `${p.name}`,
              path: `./packages/${p.outdir.split("/").pop()}/src/index.js`,
            },
            {
              alias: `${p.name}/*`,
              path: `./packages/${p.outdir.split("/").pop()}/src/*.js`,
            },
            {
              alias: `${p.name}/test/*`,
              path: `./packages/${p.outdir.split("/").pop()}/test/*.js`,
            },
          ])
          .flat()
          .reduce((acc, { alias, path }) => ({ ...acc, [alias]: [path] }), {}),
      );
      this.tsconfig?.file.addOverride(
        "references",
        this.subprojects.map((p) => ({
          path: `packages/${p.outdir.split("/").pop()}`,
        })),
      );
      this.tsconfigBuild?.file.addOverride(
        "references",
        this.subprojects.map((p) => ({
          path: `packages/${p.outdir.split("/").pop()}/tsconfig.esm.json`,
        })),
      );
    }

    this.subprojects.forEach((subproject) => {
      if (subproject instanceof typescript.TypeScriptProject) {
        const implDeps = LinkableProject.ensure(subproject).implicitDependencies;

        subproject.tsconfig?.addExtends(this.tsconfigBase);
        subproject.tsconfig?.file.addDeletionOverride("compilerOptions");
        subproject.tsconfig?.file.addDeletionOverride("exclude");
        subproject.tsconfig?.file.addOverride("include", []);

        const tsconfigSrc = new TypescriptConfig(subproject, {
          fileName: "tsconfig.src.json",
          include: ["src"],
          compilerOptions: {
            types: ["node"],
            outDir: "build/src",
            tsBuildInfoFile: ".tsbuildinfo/src.tsbuildinfo",
            rootDir: "src",
          },
        });
        tsconfigSrc.addExtends(this.tsconfigBase);
        tsconfigSrc.file.addDeletionOverride("exclude");
        if (implDeps.length) {
          tsconfigSrc?.file.addToArray(
            "references",
            ...implDeps.map((d) => ({ path: `../${d.split("/").pop()}` })),
          );
        }

        subproject.tsconfigDev?.addExtends(this.tsconfigBase);
        subproject.tsconfigDev?.file.patch(
          JsonPatch.replace("/compilerOptions", {
            types: ["node"],
            tsBuildInfoFile: ".tsbuildinfo/test.tsbuildinfo",
            rootDir: "test",
            noEmit: true,
          }),
        );
        subproject.tsconfigDev?.file.addDeletionOverride("exclude");
        subproject.tsconfigDev?.file.addOverride("include", ["test"]);
        subproject.tsconfigDev?.file.addToArray("references", {
          path: tsconfigSrc.fileName,
        });
        if (implDeps.length) {
          subproject.tsconfigDev?.file.addToArray(
            "references",
            ...implDeps.map((d) => ({ path: `../${d.split("/").pop()}` })),
          );
        }

        // Add tsconfig for esm
        const tsconfigEsm = new TypescriptConfig(subproject, {
          fileName: "tsconfig.esm.json",
          compilerOptions: {
            types: ["node"],
            tsBuildInfoFile: ".tsbuildinfo/build.tsbuildinfo",
            outDir: "build/esm",
            declarationDir: "build/dts",
            stripInternal: true,
          },
        });
        tsconfigEsm.addExtends(tsconfigSrc);
        tsconfigEsm.file.addDeletionOverride("exclude");
        tsconfigEsm.file.addDeletionOverride("include");
        if (implDeps.length) {
          tsconfigEsm?.file.addToArray(
            "references",
            ...implDeps.map((d) => ({
              path: `../${d.split("/").pop()}/${tsconfigEsm.fileName}`,
            })),
          );
        }

        // Add tsconfig for cjs
        const tsconfigCjs = new TypescriptConfig(subproject, {
          fileName: "tsconfig.cjs.json",
          compilerOptions: {
            outDir: "build/cjs",
            moduleResolution: TypeScriptModuleResolution.NODE,
            module: "CommonJS",
          },
        });
        tsconfigCjs.addExtends(tsconfigSrc);
        tsconfigCjs.file.addDeletionOverride("exclude");
        tsconfigCjs.file.addDeletionOverride("include");
        if (implDeps.length) {
          tsconfigCjs?.file.addToArray(
            "references",
            ...implDeps.map((d) => ({
              path: `../${d.split("/").pop()}/${tsconfigCjs.fileName}`,
            })),
          );
        }

        // Build both cjs and esm
        subproject.compileTask.reset(
          "tsc -b ./tsconfig.cjs.json ./tsconfig.esm.json",
        );
        subproject.addPackageIgnore("/tsconfig.cjs.json");
        subproject.addPackageIgnore("/tsconfig.esm.json");
      }
    });
  }
}
