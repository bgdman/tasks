import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedTasksComponent } from './components/tasks/completed-tasks/completed-tasks.component';
import { TasksComponent } from './components/tasks/tasks/tasks.component';
import { ToDoTasksComponent } from './components/tasks/to-do-tasks/to-do-tasks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompletedTasksComponent,
    TasksComponent,
    ToDoTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
