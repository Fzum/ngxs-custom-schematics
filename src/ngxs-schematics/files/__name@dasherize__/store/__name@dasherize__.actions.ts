export class <%= classify(name) %>ActionPayload  {
  public static readonly type = '[<%= classify(name) %>] With Payload';
  constructor(public payload: string) {}
}
