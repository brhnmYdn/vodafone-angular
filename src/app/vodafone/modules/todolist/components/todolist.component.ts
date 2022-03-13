import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import {
  CreateTodoAction,
  DeleteTodo,
  GetTodoList,
} from '../../../store/action/todolist.action';
import { TodolistState } from '../../../store/state/todolist.state';
import { Observable, Subscription } from 'rxjs';
import { Todolist } from '../../../store/model/todolist';
import { TodoService } from '../services/todo.service';
import { Ecommon } from '../../../core/ecommon';
import MappingTodolist = Ecommon.MappingTodolist;

@Component({
  selector: 'vodafone-todolist',
  templateUrl: './todolist.component.html',
})
export class TodolistComponent implements OnInit, OnDestroy {
  @Select(TodolistState.getTodoList)
  todoList$!: Observable<Todolist.CreateTodoResponse[]>;

  @Select(TodolistState.getDeletedResponse)
  deletedResponse$!: Observable<string>;

  todoList: Ecommon.MappingTodolist[] = [];
  todoForm: FormGroup = this.todoService.getTodoForm();
  extraStyle = { 'text-decoration-line': 'line-through' };
  selectedIdlist: number[] = [];
  _subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private todoService: TodoService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const subscription = this.todoList$.subscribe(
      (item: Todolist.CreateTodoResponse[]) => {
        this.todoList = [];

        item.forEach((todo: Todolist.CreateTodoResponse) => {
          this.todoList.push({ todo: todo, checked: false });
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
    if (this.todoForm.valid) {
      this.store.dispatch(new CreateTodoAction(jobDescription));
      this.store.dispatch(new GetTodoList());
    }
    this.todoForm.reset();
  }

  delete(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  check(event: any, mappingTodolist: MappingTodolist) {
    this.todoList.forEach((item: MappingTodolist) => {
      if (item.todo.id === mappingTodolist.todo.id)
        item.checked = event.srcElement.checked;
    });
  }

  ngOnDestroy(): void {
    for (const subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }
}
