import { Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { <%= classify(name) %>State, <%= classify(name) %>StateModel } from './<%= dasherize(name) %>.state';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Emittable, Emitter } from '@ngxs-labs/emitter';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>FacadeService {
  @Select(<%= classify(name) %>State)
  <%= dasherize(name) %>State$: Observable<<%= classify(name) %>StateModel>;

  @Select(<%= classify(name) %>State.stuff)
  <%= dasherize(name) %>Stuff$: Observable<string>;

  @SelectSnapshot(<%= classify(name) %>State.stuff)
  <%= dasherize(name) %>Stuff: string;

  @Emitter(<%= classify(name) %>State.fireAction)
  fireAction: Emittable<string>;
}
