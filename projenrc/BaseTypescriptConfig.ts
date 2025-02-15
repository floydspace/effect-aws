import path from "node:path";
import { javascript, typescript } from "projen";

export class BaseTypescriptConfig extends javascript.TypescriptConfig {
  constructor(project: typescript.TypeScriptProject, options?: javascript.TypescriptConfigOptions) {
    super(project, {
      ...options,
      fileName: "tsconfig.base.json",
      compilerOptions: project.tsconfig?.compilerOptions,
    });

    this.file.addOverride("compilerOptions", {
      baseUrl: ".",
      checkJs: false,
      composite: true,
      sourceMap: true,
      inlineSourceMap: undefined,
      inlineSources: undefined,
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
    this.file.addDeletionOverride("exclude");
    this.file.addDeletionOverride("include");

    // Fix default tsconfig.json by extending this base config
    project.tsconfig?.addExtends(this);
    project.tsconfig?.file.addDeletionOverride("compilerOptions");
    project.tsconfig?.file.addDeletionOverride("exclude");
    // project.tsconfig?.file.addOverride("include", []);
  }

  preSynthesize(): void {
    super.preSynthesize();

    if (this.project.subprojects.length) {
      this.file.addOverride(
        "compilerOptions.paths",
        this.project.subprojects
          .map((p) => [
            {
              alias: `${p.name}`,
              path: `./${path.relative(process.cwd(), p.outdir)}/src/index.js`,
            },
            {
              alias: `${p.name}/*`,
              path: `./${path.relative(process.cwd(), p.outdir)}/src/*.js`,
            },
            {
              alias: `${p.name}/test/*`,
              path: `./${path.relative(process.cwd(), p.outdir)}/test/*.js`,
            },
          ])
          .flat()
          .reduce((acc, { alias, path }) => ({ ...acc, [alias]: [path] }), {}),
      );

      // Add references to sub projects
      (this.project as typescript.TypeScriptProject).tsconfig?.file.addOverride(
        "references",
        this.project.subprojects.map((p) => ({ path: path.relative(process.cwd(), p.outdir) })),
      );
    }

    // Fix sub projects tsconfig.json by extending this base config
    this.project.subprojects.forEach((subProject) => {
      if (subProject instanceof typescript.TypeScriptProject) {
        subProject.tsconfig?.addExtends(this);
        subProject.tsconfig?.file.addDeletionOverride("compilerOptions");
        subProject.tsconfig?.file.addDeletionOverride("exclude");
        subProject.tsconfig?.file.addOverride("include", []);
      }
    });
  }
}
