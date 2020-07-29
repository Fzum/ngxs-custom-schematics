import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  Tree,
  url,
  SchematicsException,
  move,
  template,
} from "@angular-devkit/schematics";
import { experimental, normalize, strings } from "@angular-devkit/core";

//run using: npm run build -> schematics .:hello-component --name mycomp --greeting servus --debug false
export function ngxsSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfig = tree.read("/angular.json");
    if (!workspaceConfig) {
      throw new SchematicsException(
        "Could not find Angular workspace configuration"
      );
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(
      workspaceContent
    );

    if (!_options.project) {
      _options.project = workspace.defaultProject;
    }

    const projectName = _options.project as string;
    const project = workspace.projects[projectName];
    const projectType = project.projectType === "application" ? "app" : "lib";

    if (_options.path === undefined) {
      _options.path = `${project.sourceRoot}/${projectType}`;
    }

    //  const templateSource = apply(url("./files"), [
    //    applyTemplates({
    //     classify: strings.classify,
    //      dasherize: strings.dasherize,
    //      name: _options.name,
    //    }),
    //    move(normalize(_options.path as string)),
    //  ]);

    const templateSource = apply(url("./files"), [
      template({
        ..._options,
        ...strings,
        name,
      }),
      move(normalize(_options.path as string)),
    ]);

    return mergeWith(templateSource)(tree, _context);
  };
}
