export class <%= classify(name) %>ActionPayload  {
  public static readonly type = '[<%= classify(name) %>] With Payload';
  constructor(public payload: any) {}
}

export class <%= classify(name) %>Action  {
  public static readonly type = '[<%= classify(name) %>] Without Payload';
}