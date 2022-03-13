import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todolist } from '../model/todolist';
import { TODOLIST_DEFAULT } from '../default/todolist.default';
import { TodolistService } from '../service/todolist.service';
import {
  CheckedTodo,
  CreateTodoAction,
  DeleteTodo,
  GetTodoList,
} from '../action/todolist.action';
import { tap } from 'rxjs';
import { ModalService } from '../../shared/services/modal.service';

@State<Todolist.State>({
  name: 'TodolistState',
  defaults: TODOLIST_DEFAULT,
})
@Injectable()
export class TodolistState {
  constructor(
    private todoListService: TodolistService,
    private modalService: ModalService
  ) {}

  @Selector()
  static getTodoList({ todoListResponse }: Todolist.State) {
    return todoListResponse;
  }

  @Selector()
  static getUpdated({ updatedResponse }: Todolist.State) {
    return updatedResponse;
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
    return this.todoListService.createTodo(payload).pipe(
      tap((response: Todolist.TodoResponse) =>
        patchState({ createTodoResponse: response })
      ),
      tap(() => {
        this.modalService.openModalWithComponent(
          'Başarılı',
          'modal-body alert-success'
        );
      })
    );
  }

  @Action(GetTodoList)
  getTodoList({ patchState }: StateContext<Todolist.State>) {
    return this.todoListService
      .getTodoList()
      .pipe(
        tap((response: Todolist.TodoResponse[]) =>
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

  @Action(CheckedTodo)
  checkedTodo(
    { patchState }: StateContext<Todolist.State>,
    { payload }: CheckedTodo
  ) {
    return this.todoListService
      .checkedTodo(payload)
      .pipe(
        tap((response: Todolist.TodoResponse) =>
          patchState({ updatedResponse: response })
        )
      );
  }
}
