import { javascript, typescript } from "projen";

type PredefinedProps = "defaultReleaseBranch" | "authorName" | "authorEmail";

export type TypeScriptLibProjectOptions =
  & Omit<
    typescript.TypeScriptProjectOptions,
    PredefinedProps
  >
  & Partial<Pick<typescript.TypeScriptProjectOptions, PredefinedProps>>;

export class TypeScriptLibProject extends typescript.TypeScriptProject {
  constructor({
    jestOptions: { jestConfig: _, ...jestOptions } = {},
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
      name: `@${parent?.name}/${options.name}`,
    });

    this.package.addField("main", `${this.libdir}/cjs/index.js`);
    this.package.addField("types", `${this.libdir}/dts/index.d.ts`);
    this.package.addField("type", "module");

    this.tsconfig?.file.addOverride("references", [
      { path: "tsconfig.src.json" },
      { path: this.tsconfigDev.fileName },
    ]);

    this.addFields({
      // Reference to esm index for root imports
      module: `${this.libdir}/esm/index.js`,
      publishConfig: { access: "public" },
      sideEffects: [],
    });
  }
}
