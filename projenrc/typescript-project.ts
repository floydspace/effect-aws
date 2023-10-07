import path from "node:path";

import { JsonFile, javascript, typescript } from "projen";

type PredefinedProps = "defaultReleaseBranch" | "authorName" | "authorEmail";

export type TypeScriptLibProjectOptions = Omit<
  typescript.TypeScriptProjectOptions,
  PredefinedProps
> &
  Partial<Pick<typescript.TypeScriptProjectOptions, PredefinedProps>>;

export class TypeScriptLibProject extends typescript.TypeScriptProject {
  constructor({
    jestOptions: { jestConfig, ...jestOptions } = {},
    ...options
  }: TypeScriptLibProjectOptions) {
    super({
      defaultReleaseBranch: "main",
      authorEmail: "ifloydrose@gmail.com",
      authorName: "Victor Korzunin",
      license: "MIT",
      packageManager: javascript.NodePackageManager.PNPM,
      outdir: `packages/${options.name}`,
      prettier: true, // Monorepo prettier doesn't work for some reason
      package: false, // It will be created by @changesets/cli
      depsUpgrade: false, // Updates are handled by monorepo task
      jest: true,
      jestOptions: {
        ...jestOptions,
        configFilePath: "jest.config.json",
        junitReporting: false,
        jestConfig: {
          ...jestConfig,
          transform: {
            "^.+\\.tsx?$": new javascript.Transform("ts-jest", {
              tsconfig: "tsconfig.dev.json",
            }),
          },
        },
      },
      tsconfig: {
        compilerOptions: {
          moduleResolution: javascript.TypeScriptModuleResolution.NODE,
          lib: ["es2019", "dom"],
        },
      },
      ...options,
      name: `@effect-aws/${options.name}`,
    });

    if (options.jest ?? true) {
      const jestConfigFile = this.jest?.file as JsonFile;
      jestConfigFile.addDeletionOverride("globals");
      if (!jestConfig?.preset) {
        // See why https://kulshekhar.github.io/ts-jest/docs/getting-started/options
        jestConfigFile.addDeletionOverride("preset");
      }
    }

    // Add tsconfig for esm
    new JsonFile(this, `${path.dirname(this.srcdir)}/tsconfig.esm.json`, {
      obj: {
        extends: "./tsconfig.json",
        compilerOptions: {
          outDir: "./lib/esm",
          module: "es6", // esm
          resolveJsonModule: false, // JSON modules are not supported in esm
          declaration: false, // Declaration are generated for cjs
        },
      },
    });

    // Reference to esm index for root imports
    this.package.addField("module", "lib/esm/index.js");

    // Build both cjs and esm
    this.compileTask.reset("tsc -b ./tsconfig.json ./tsconfig.esm.json");

    this.npmignore?.addPatterns("/tsconfig.esm.json");

    this.package.addField("publishConfig", { access: "public" });
  }
}
