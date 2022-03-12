import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodolistComponent} from "./components/todolist.component";

const routes: Routes = [
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
  {
    path:'todo-list',
    component: TodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodolistRoutingModule { }
