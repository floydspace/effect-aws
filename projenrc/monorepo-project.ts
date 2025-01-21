import { MonorepoTsProject, MonorepoTsProjectOptions } from "@aws/pdk/monorepo";
import pdkPackage from "@aws/pdk/package.json";
import { NodePackageManager } from "projen/lib/javascript";

type PredefinedProps =
  | "defaultReleaseBranch"
  | "packageManager"
  | "clobber"
  | "depsUpgrade";
export type MonorepoProjectOptions = Omit<
  MonorepoTsProjectOptions,
  PredefinedProps
>;

export class MonorepoProject extends MonorepoTsProject {
  constructor(options: MonorepoProjectOptions) {
    super({
      packageManager: NodePackageManager.PNPM,
      pnpmVersion: "9.12.3",
      license: "MIT",
      licenseOptions: {
        disableDefaultLicenses: true,
      },
      clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
      depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
      monorepoUpgradeDeps: false,
      npmProvenance: false,
      ...options,
      devDeps: [...(options.devDeps ?? []), "only-allow"],
    });

    this.addScripts({
      preinstall: `npx only-allow ${this.package.packageManager}`,
    });

    this.package.addEngine("pnpm", ">=9 <10");
    this.package.addField("packageManager", "pnpm@9.12.3");

    // pdk set it as latest which leads to peer warnings, so we need to set as matching the pdk peer version
    this.addDeps(
      `@aws-cdk/aws-cognito-identitypool-alpha@${pdkPackage.peerDependencies["@aws-cdk/aws-cognito-identitypool-alpha"]}`,
    );
  }
}
