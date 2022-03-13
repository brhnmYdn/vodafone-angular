import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Todolist } from '../model/todolist';
import DeleteResponse = Todolist.DeleteResponse;

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private http: HttpClient) {}

  createTodo(jobDescription: string): Observable<Todolist.CreateTodoResponse> {
    const request = { jobDescription: jobDescription };
    return this.http.post<Todolist.CreateTodoResponse>(
      environment.url + 'todolists',
      request
    );
  }

  getTodoList(): Observable<Todolist.CreateTodoResponse[]> {
    return this.http.get<Todolist.CreateTodoResponse[]>(
      environment.url + 'todolists'
    );
  }

  deleteTodo(id: number): Observable<null> {
    return this.http.delete<null>(environment.url + 'todolists/' + id);
  }
}
