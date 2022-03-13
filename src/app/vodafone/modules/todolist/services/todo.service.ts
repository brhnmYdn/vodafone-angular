import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeleteTodo } from '../../../store/action/todolist.action';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private store: Store) {}

  getTodoForm(): FormGroup {
    return new FormGroup({
      jobDescription: new FormControl('', Validators.required),
    });
  }

  delete(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }
}
