import { Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  <%= classify(name) %>State,
  <%= classify(name) %>StateModel,
} from './<%= dasherize(name) %>.state';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>FacadeService {
  constructor() {}

  @Select(<%= classify(name) %>State)
  <%= dasherize(name) %>state$: Observable<<%= classify(name) %>StateModel>;
}
