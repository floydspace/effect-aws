import fs from "node:fs";
import path from "node:path";

import { Component, JsonFile, Project, javascript } from "projen";

export interface ChangesetsOptions {
  /**
   * The GitHub repository in "org/repo" format.
   */
  repo: string;

  /**
   * If true, only update peer dependencies when they are out of range.
   */
  onlyUpdatePeerDependentsWhenOutOfRange?: boolean;
}

export class Changesets extends Component {
  public static of(project: Project): Changesets | undefined {
    const isChangesets = (o: Component): o is Changesets =>
      o instanceof Changesets;
    return project.components.find(isChangesets);
  }

  private readonly nodeProject: javascript.NodeProject;

  constructor(project: javascript.NodeProject, options: ChangesetsOptions) {
    super(project);

    this.nodeProject = project;

    project.addDevDeps("@changesets/changelog-github", "@changesets/cli");

    project.addTask("bump", {
      description: "Bump package versions with changesets",
      steps: [{ exec: "changeset version" }, { spawn: "install" }],
    });

    project.addScripts({ changeset: "changeset" });

    new JsonFile(project, ".changeset/config.json", {
      obj: {
        $schema: "https://unpkg.com/@changesets/config@2.3.1/schema.json",
        changelog: ["@changesets/changelog-github", { repo: options.repo }],
        commit: false,
        fixed: [],
        linked: [],
        access: "restricted",
        baseBranch: project.release?.branches?.[0] ?? "main", // assume the first branch is the default release branches
        updateInternalDependencies: "patch",
        ignore: [],
        ___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH: {
          ...(options.onlyUpdatePeerDependentsWhenOutOfRange
            ? { onlyUpdatePeerDependentsWhenOutOfRange: true }
            : {}),
        },
      },
      omitEmpty: true,
    });
  }

  preSynthesize(): void {
    for (const subproject of this.nodeProject.subprojects) {
      if (subproject instanceof javascript.NodeProject) {
        // preserve the version number set by @changesets/cli
        const prev = this.readProjectPackageJson(subproject) ?? {};
        subproject.package.addVersion(prev?.version ?? "0.0.0");
      }
    }
  }

  private readProjectPackageJson(project: javascript.NodeProject) {
    const file = path.join(project.outdir, "package.json");
    if (!fs.existsSync(file)) {
      return undefined;
    }

    return JSON.parse(fs.readFileSync(file, "utf-8"));
  }
}
