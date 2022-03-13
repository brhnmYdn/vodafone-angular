import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Todolist } from '../model/todolist';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private http: HttpClient) {}

  createTodo(jobDescription: string): Observable<Todolist.TodoResponse> {
    const request = { jobDescription: jobDescription, checked: false };
    return this.http.post<Todolist.TodoResponse>(
      environment.url + 'todolists',
      request
    );
  }

  checkedTodo(
    todoRequest: Todolist.TodoPutRequest
  ): Observable<Todolist.TodoResponse> {
    return this.http.put<Todolist.TodoResponse>(
      environment.url + 'todolists/' + todoRequest.id,
      todoRequest
    );
  }

  getTodoList(): Observable<Todolist.TodoResponse[]> {
    return this.http.get<Todolist.TodoResponse[]>(
      environment.url + 'todolists'
    );
  }

  deleteTodo(id: number): Observable<null> {
    return this.http.delete<null>(environment.url + 'todolists/' + id);
  }
}
