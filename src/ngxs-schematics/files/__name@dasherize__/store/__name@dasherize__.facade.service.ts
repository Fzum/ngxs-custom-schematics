import { Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  <%= classify(name) %>State,
  <%= classify(name) %>StateModel,
} from './<%= dasherize(name) %>.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { <%= classify(name) %>Action() } from './<%= dasherize(name) %>.actions';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>FacadeService {
  @Select(<%= classify(name) %>State)
  <%= dasherize(name) %>state$: Observable<<%= classify(name) %>StateModel>;

  @Dispatch()
  dispatchAction = () => new <%= classify(name) %>Action();
}
