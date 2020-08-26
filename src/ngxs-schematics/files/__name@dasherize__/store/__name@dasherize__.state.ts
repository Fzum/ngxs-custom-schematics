import { State, StateContext, Selector } from '@ngxs/store';
import { <%= classify(name) %>ActionPayload } from './<%= dasherize(name) %>.actions';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';

// todo: if this state should be persisted (survive f5 and browser exit),
// todo: add it to NgxsStoragePluginModule.forRoot([..., <%= classify(name) %>State])

export interface <%= classify(name) %>StateModel {
  stuff: string;
}

@State<<%= classify(name) %>StateModel>({
  name: '<%= classify(name) %>',
  defaults: {
    stuff: ''
  },
})
export class <%= classify(name) %>State {
  @Selector()
  static stuff(state: <%= classify(name) %>StateModel): string {
    return state.stuff;
  }

  @Receiver({ action: <%= classify(name) %>ActionPayload})
  public static react(
    ctx: StateContext<<%= classify(name) %>StateModel>,
    { payload }: <%= classify(name) %>ActionPayload
  ): void {
    ctx.patchState({ stuff: payload });
  }

  @Receiver()
  public static fireAction(
      ctx: StateContext<<%= classify(name) %>StateModel>,
      { payload }: EmitterAction<string>
  ): void {
    ctx.patchState({ stuff: payload });
  }
}
