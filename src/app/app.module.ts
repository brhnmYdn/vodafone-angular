import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsModule} from "@ngxs/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodolistLayoutComponent } from './vodafone/layout/todolist-layout/todolist-layout.component';
import {TodolistState} from "./vodafone/store/state/todolist.state";
import {HttpClientModule} from "@angular/common/http";

export const STATE_MODULES = [
  TodolistState
]
@NgModule({
  declarations: [
    AppComponent,
    TodolistLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(STATE_MODULES),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
