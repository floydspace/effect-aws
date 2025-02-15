import path from "node:path";
import type { Project } from "projen";
import { javascript } from "projen";

export interface BuildTypescriptConfigOptions extends Omit<javascript.TypescriptConfigOptions, "fileName" | "extends"> {
  baseTsConfig: javascript.TypescriptConfig;
  referencedProjectsTsConfigName?: string;
}

export class BuildTypescriptConfig extends javascript.TypescriptConfig {
  constructor(project: Project, private options: BuildTypescriptConfigOptions) {
    super(project, {
      ...options,
      fileName: "tsconfig.build.json",
      extends: javascript.TypescriptConfigExtends.fromTypescriptConfigs([
        options.baseTsConfig,
      ]),
    });

    this.file.addDeletionOverride("exclude");
    this.file.addOverride("include", []);

    this.project.buildTask.prependExec(`tsc -b ${this.fileName}`);
  }

  preSynthesize(): void {
    super.preSynthesize();

    if (this.project.subprojects.length) {
      this.file.addOverride(
        "references",
        this.project.subprojects.map((p) => ({
          path: `${path.relative(process.cwd(), p.outdir)}/${
            this.options.referencedProjectsTsConfigName ?? this.fileName
          }`,
        })),
      );
    }
  }
}
