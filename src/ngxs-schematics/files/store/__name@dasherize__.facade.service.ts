import { Select, Store } from "@ngxs/store";
import { <%= classify(name) %>State, <%= classify(name) %>StateModel } from "./store/state-<%= name %>";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class <%= classify(name) %>FacadeService {
  constructor() {}

  @Selector(<%= classify(name) %>State)
  <%= name %>state$: Observable<<%= classify(name) %>StateModel>;
}
