import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { mapTo, Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetTodoList } from '../../../store/action/todolist.action';

@Injectable({
  providedIn: 'root',
})
export class TodolistResolver implements Resolve<null> {
  constructor(private store: Store) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<null> {
    return this.store.dispatch(new GetTodoList()).pipe(mapTo(null));
  }
}
