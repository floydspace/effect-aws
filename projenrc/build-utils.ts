import type { Project } from "projen";
import { Component, javascript } from "projen";

export class BuildUtils extends Component {
  public static of(project: Project): BuildUtils | undefined {
    const isBuildUtils = (o: Component): o is BuildUtils => o instanceof BuildUtils;
    return project.components.find(isBuildUtils);
  }

  constructor(project: javascript.NodeProject) {
    super(project);

    project.addDevDeps("@effect/build-utils");
  }

  preSynthesize(): void {
    this.project.subprojects.forEach((subproject) => {
      if (subproject instanceof javascript.NodeProject) {
        subproject.packageTask.exec("build-utils pack-v2");

        subproject.addFields({
          publishConfig: { access: "public", directory: "dist" },
        });
      }
    });
  }
}
