import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodolistRoutingModule} from "./todolist.routing.module";
import {TodolistComponent} from "./components/todolist.component";

@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
  ]
})
export class TodolistModule { }
