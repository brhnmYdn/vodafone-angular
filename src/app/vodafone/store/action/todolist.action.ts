export class CreateTodoAction {
  static readonly type = '[TodoList] Create Todo action';
  static readonly desc = 'create todo action';
  constructor(public payload: string) {}
}

export class GetTodoList {
  static readonly type = '[TodoList] Get Todo List action';
  static readonly desc = 'get todo list action';
}

export class DeleteTodo {
  static readonly type = '[TodoList] Delete Todo action';
  static readonly desc = 'delete todo action';
  constructor(public payload: number) {}
}
