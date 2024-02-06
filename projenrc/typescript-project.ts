import path from "node:path";

import { JsonFile, javascript, typescript } from "projen";
import { Docgen } from "./docgen";

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
    const parent = options.parent as javascript.NodeProject | undefined;
    super({
      defaultReleaseBranch: "main",
      authorEmail: "ifloydrose@gmail.com",
      authorName: "Victor Korzunin",
      homepage: parent?.package.manifest.homepage,
      license: "MIT",
      packageManager: javascript.NodePackageManager.PNPM,
      outdir: `packages/${options.name}`,
      prettier: true, // Monorepo prettier doesn't work for some reason
      projenVersion: parent?.deps.getDependency("projen").version,
      package: false, // It will be created by @changesets/cli
      depsUpgrade: false, // Updates are handled by monorepo task
      jest: true,
      jestOptions: {
        ...jestOptions,
        configFilePath: "jest.config.json",
        junitReporting: false,
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

    // Build both cjs and esm
    this.compileTask.reset("tsc -b ./tsconfig.json ./tsconfig.esm.json");

    this.npmignore?.addPatterns("/tsconfig.esm.json");

    this.addFields({
      // Reference to esm index for root imports
      module: "lib/esm/index.js",
      publishConfig: { access: "public" },
      sideEffects: [],
    });

    new Docgen(this);
  }
}
