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
      typescriptVersion: parent?.deps.getDependency("typescript").version,
      package: false, // It will be created by @changesets/cli
      depsUpgrade: false, // Updates are handled by monorepo task
      jest: false,
      jestOptions: {
        ...jestOptions,
        configFilePath: "jest.config.json",
        junitReporting: false,
      },
      libdir: "build",
      tsconfig: {
        compilerOptions: {
          moduleResolution: javascript.TypeScriptModuleResolution.NODE_NEXT,
          module: javascript.TypeScriptModuleResolution.NODE_NEXT,
          lib: ["es2019", "dom"],
          outDir: "build/cjs",
          declaration: false, // Declaration is set in esm tsconfig
        },
      },
      tsconfigDev: { compilerOptions: { outDir: undefined } },
      ...options,
      name: `@effect-aws/${options.name}`,
    });

    this.package.addField("main", `${this.libdir}/cjs/index.js`);
    this.package.addField("types", `${this.libdir}/dts/index.d.ts`);
    this.package.addField("type", "module");

    // Add tsconfig for esm
    new JsonFile(this, "tsconfig.esm.json", {
      obj: {
        extends: "./tsconfig.json",
        compilerOptions: {
          outDir: `${this.libdir}/esm`,
          resolveJsonModule: false, // JSON modules are not supported in esm
          declaration: true,
          declarationDir: `${this.libdir}/dts`,
        },
      },
    });

    // Add tsconfig for cjs
    new JsonFile(this, "tsconfig.cjs.json", {
      obj: {
        extends: "./tsconfig.json",
        compilerOptions: {
          outDir: `${this.libdir}/cjs`,
          moduleResolution: javascript.TypeScriptModuleResolution.NODE,
          module: "CommonJS",
        },
      },
    });

    // Build both cjs and esm
    this.compileTask.reset("tsc -b ./tsconfig.cjs.json ./tsconfig.esm.json");

    this.addPackageIgnore("/tsconfig.cjs.json");
    this.addPackageIgnore("/tsconfig.esm.json");

    this.addFields({
      // Reference to esm index for root imports
      module: `${this.libdir}/esm/index.js`,
      publishConfig: { access: "public" },
      sideEffects: [],
    });
  }
}
