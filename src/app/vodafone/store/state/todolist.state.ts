import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todolist } from '../model/todolist';
import { TODOLIST_DEFAULT } from '../default/todolist.default';
import { TodolistService } from '../service/todolist.service';
import {
  CreateTodoAction,
  DeleteTodo,
  GetTodoList,
} from '../action/todolist.action';
import { tap } from 'rxjs';
import CreateTodoResponse = Todolist.CreateTodoResponse;
import DeleteResponse = Todolist.DeleteResponse;

@State<Todolist.State>({
  name: 'TodolistState',
  defaults: TODOLIST_DEFAULT,
})
@Injectable()
export class TodolistState {
  constructor(private todoListService: TodolistService) {}

  @Selector()
  static getTodoList({ todoListResponse }: Todolist.State) {
    return todoListResponse;
  }

  @Selector()
  static getDeletedResponse({ deletedId }: Todolist.State) {
    return deletedId;
  }

  @Action(CreateTodoAction)
  createTodo(
    { patchState }: StateContext<Todolist.State>,
    { payload }: CreateTodoAction
  ) {
    return this.todoListService
      .createTodo(payload)
      .pipe(
        tap((response: CreateTodoResponse) =>
          patchState({ createTodoResponse: response })
        )
      );
  }

  @Action(GetTodoList)
  getTodoList({ patchState }: StateContext<Todolist.State>) {
    return this.todoListService
      .getTodoList()
      .pipe(
        tap((response: CreateTodoResponse[]) =>
          patchState({ todoListResponse: response })
        )
      );
  }

  @Action(DeleteTodo)
  deleteTodo(
    { patchState }: StateContext<Todolist.State>,
    { payload }: DeleteTodo
  ) {
    return this.todoListService
      .deleteTodo(payload)
      .pipe(tap(() => patchState({ deletedId: payload })));
  }
}
