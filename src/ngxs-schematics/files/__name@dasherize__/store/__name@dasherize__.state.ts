import { State, Action, StateContext, Selector } from '@ngxs/store';
import { <%= classify(name) %>ActionPayload } from './<%= dasherize(name) %>.actions';

export interface <%= classify(name) %>StateModel {
}

@State<<%= classify(name) %>StateModel>({
  name: '<%= classify(name) %>',
  defaults: {
  },
})
export class <%= classify(name) %>State {
  @Selector()
  static selectSomething(state: <%= classify(name) %>StateModel): any {
    return undefined;
  }

  @Action(<%= classify(name) %>ActionPayload)
  public react(
    ctx: StateContext<<%= classify(name) %>StateModel>,
    { payload }: <%= classify(name) %>ActionPayload): void {
      ctx.patchState({});
  }


}
