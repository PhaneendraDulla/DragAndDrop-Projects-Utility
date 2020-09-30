/// <reference path="drag-drop-interfaces.ts" />
/// <reference path="project-model.ts" />
/// <reference path="project-state.ts" />
/// <reference path="validation.ts" />
/// <reference path="autobind-decorator.ts" />
/// <reference path="base-component.ts" />
/// <reference path="project-item-component.ts" />
/// <reference path="project-list-component.ts" />
/// <reference path="project-input-component.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
