import assert from "node:assert";

import { LinkableProject } from "@floydspace/projen-components";
import type { Construct } from "constructs";
import type { Project } from "projen";
import { javascript, typescript } from "projen";

type PredefinedProps = "defaultReleaseBranch" | "authorName" | "authorEmail";

export type TypeScriptLibProjectOptions =
  & Omit<typescript.TypeScriptProjectOptions, PredefinedProps>
  & Partial<Pick<typescript.TypeScriptProjectOptions, PredefinedProps>>
  & {
    workspaceDeps?: Array<javascript.NodeProject>;
    workspacePeerDeps?: Array<javascript.NodeProject>;
  };

export class TypeScriptLibProject extends typescript.TypeScriptProject {
  public static childOf(project: Project, projectName: string): TypeScriptLibProject {
    const assertTypeScriptLibProject: (o: Construct) => asserts o is TypeScriptLibProject = (o) => {
      assert(o instanceof TypeScriptLibProject);
    };
    const construct = project.node.findChild(
      `TypeScriptLibProject#@${project.name}--${projectName}@packages--${projectName}`,
    );

    assertTypeScriptLibProject(construct);

    return construct;
  }

  public readonly tsconfigSrc: javascript.TypescriptConfig;
  public readonly tsconfigTst: javascript.TypescriptConfig;
  public readonly tsconfigEsm: javascript.TypescriptConfig;
  public readonly tsconfigCjs: javascript.TypescriptConfig;

  constructor({
    workspaceDeps,
    workspacePeerDeps,
    ...options
  }: TypeScriptLibProjectOptions) {
    const parent = options.parent as javascript.NodeProject | undefined;
    super({
      defaultReleaseBranch: "main",
      authorEmail: "ifloydrose@gmail.com",
      authorName: "Victor Korzunin",
      repository: parent?.package.manifest.repository.url,
      repositoryDirectory: `packages/${options.name}`,
      homepage: `${parent?.package.manifest.homepage}/docs/${options.name}`,
      license: "MIT",
      packageManager: javascript.NodePackageManager.PNPM,
      outdir: `packages/${options.name}`,
      prettier: false,
      projenVersion: parent?.deps.getDependency("projen").version,
      typescriptVersion: parent?.deps.getDependency("typescript").version,
      package: false, // It will be created by @changesets/cli
      depsUpgrade: false, // Updates are handled by monorepo task
      eslint: false,
      jest: false,
      libdir: "build",
      disableTsconfigDev: true, // no dev ts files
      ...options,
      name: `@${parent?.name}/${options.name}`,
      peerDependencyOptions: { pinnedDevDependency: false },
    });

    if (workspaceDeps?.length) {
      LinkableProject.ensure(this).addImplicitDependency(...workspaceDeps.map((dep) => dep.outdir));
      this.addDeps(...workspaceDeps.map((dep) => `${dep.package.packageName}@workspace:^`));
    }

    if (workspacePeerDeps?.length) {
      LinkableProject.ensure(this).addImplicitDependency(...workspacePeerDeps.map((dep) => dep.outdir));
      this.addPeerDeps(...workspacePeerDeps.map((dep) => `${dep.package.packageName}@workspace:^`));
      this.addDevDeps(...workspacePeerDeps.map((dep) => `${dep.package.packageName}@workspace:^`));
    }

    this.package.addField("main", `${this.libdir}/cjs/index.js`);
    this.package.addField("types", `${this.libdir}/dts/index.d.ts`);
    this.package.addField("type", "module");

    this.tsconfigSrc = this.makeTsconfig("tsconfig.src.json", this.srcdir);
    this.tsconfigTst = this.makeTsconfig("tsconfig.dev.json", this.testdir, {
      noEmit: true,
    });
    this.tsconfigTst.file.addToArray("references", { path: this.tsconfigSrc.fileName });

    // Add references in main tsconfig to both src and test
    this.tsconfig?.file.addOverride("references", [
      { path: this.tsconfigSrc.fileName },
      { path: this.tsconfigTst.fileName },
    ]);

    // Add tsconfig for building esm
    this.tsconfigEsm = this.makeBaseTsconfig("tsconfig.esm.json", "esm", {
      declarationDir: `${this.libdir}/dts`,
      stripInternal: true,
    });
    this.tsconfigEsm.addExtends(this.tsconfigSrc);

    // Add tsconfig for building cjs
    this.tsconfigCjs = this.makeBaseTsconfig("tsconfig.cjs.json", "cjs", {
      moduleResolution: javascript.TypeScriptModuleResolution.NODE,
      module: "CommonJS",
    });
    this.tsconfigCjs.addExtends(this.tsconfigSrc);

    // Build both cjs and esm
    this.compileTask.reset(
      `tsc -b ./${this.tsconfigCjs.fileName} ./${this.tsconfigEsm.fileName}`,
    );

    this.addFields({
      // Reference to esm index for root imports
      module: `${this.libdir}/esm/index.js`,
      publishConfig: { access: "public" },
      sideEffects: [],
    });
  }

  private makeBaseTsconfig(
    fileName: string,
    srcdir: string,
    { noEmit, ...extraCompilerOptions }: javascript.TypeScriptCompilerOptions = {},
  ): javascript.TypescriptConfig {
    const tsconfig = new javascript.TypescriptConfig(this, {
      fileName,
      compilerOptions: {
        tsBuildInfoFile: `.tsbuildinfo/${srcdir}.tsbuildinfo`,
        ...(noEmit ? { noEmit } : { outDir: `${this.libdir}/${srcdir}` }),
        ...extraCompilerOptions,
      },
    });
    tsconfig.file.addDeletionOverride("include");
    tsconfig.file.addDeletionOverride("exclude");

    return tsconfig;
  }

  private makeTsconfig(
    fileName: string,
    srcdir: string,
    extraCompilerOptions?: javascript.TypeScriptCompilerOptions,
  ): javascript.TypescriptConfig {
    const tsconfig = this.makeBaseTsconfig(fileName, srcdir, {
      rootDir: srcdir,
      ...extraCompilerOptions,
    });
    tsconfig.file.addOverride("include", [srcdir]);

    return tsconfig;
  }
}
