import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodoForm(): FormGroup {
    return new FormGroup({
      jobDescription: new FormControl('', Validators.required),
    });
  }
}
