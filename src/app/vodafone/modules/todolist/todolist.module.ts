import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistRoutingModule } from './todolist.routing.module';
import { TodolistComponent } from './components/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TodolistModule {}
