import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodolistLayoutComponent} from "./vodafone/layout/todolist-layout/todolist-layout.component";

const routes: Routes = [
  {
    path: '',
    component: TodolistLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () =>
          import('../app/vodafone/modules/todolist/todolist.module').then((m) => m.TodolistModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
