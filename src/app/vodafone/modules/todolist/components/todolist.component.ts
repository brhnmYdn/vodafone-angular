import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import {
  CheckedTodo,
  CreateTodoAction,
  GetTodoList,
} from '../../../store/action/todolist.action';
import { TodolistState } from '../../../store/state/todolist.state';
import { Observable, Subscription } from 'rxjs';
import { Todolist } from '../../../store/model/todolist';
import { TodoService } from '../services/todo.service';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'vodafone-todolist',
  templateUrl: './todolist.component.html',
})
export class TodolistComponent implements OnInit, OnDestroy {
  @Select(TodolistState.getTodoList)
  todoList$!: Observable<Todolist.TodoResponse[]>;

  @Select(TodolistState.getDeletedResponse)
  deletedResponse$!: Observable<string>;

  todoList: Todolist.TodoResponse[] = [];
  todoForm: FormGroup = this.todoService.getTodoForm();
  extraStyle = { 'text-decoration-line': 'line-through' };
  _subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private todoService: TodoService,
    private cd: ChangeDetectorRef,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    const subscription = this.todoList$.subscribe(
      (item: Todolist.TodoResponse[]) => {
        this.todoList = [];

        item.forEach((todo: Todolist.TodoResponse) => {
          this.todoList.push(todo);
          this.cd.detectChanges();
        });
      }
    );
    const subscription2 = this.deletedResponse$.subscribe((item: string) => {
      if (item) {
        this.store.dispatch(new GetTodoList());
      }
    });
    this._subscriptions.push(subscription, subscription2);
  }

  createTodo() {
    const jobDescription = this.todoForm.get('jobDescription')?.value;
    const findTodo = this.todoList.find(
      (item: Todolist.TodoResponse) =>
        item.jobDescription?.toUpperCase() === jobDescription?.toUpperCase()
    );
    if (findTodo)
      this.modalService.openModalWithComponent(
        'Böyle Bir çalışma hali hazırda var',
        'modal-body alert-danger'
      );

    if (!findTodo && this.todoForm.valid) {
      this.store.dispatch(new CreateTodoAction(jobDescription));
      setTimeout(() => {
        this.store.dispatch(new GetTodoList());
      }, 100);
      this.todoForm.reset();
    }
  }

  delete(id: number) {
    this.todoService.delete(id);
  }

  check(event: any, todo: Todolist.TodoResponse) {
    const request: Todolist.TodoPutRequest = {
      id: todo.id,
      jobDescription: todo.jobDescription,
      checked: event.srcElement.checked,
    };
    this.store.dispatch(new CheckedTodo(request));
    setTimeout(() => {
      this.store.dispatch(new GetTodoList());
    }, 100);
  }

  ngOnDestroy(): void {
    for (const subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }
}
