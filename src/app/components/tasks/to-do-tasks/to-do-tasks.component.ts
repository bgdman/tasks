import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../tasks.interface';

@Component({
  selector: 'app-to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styleUrls: ['./to-do-tasks.component.scss']
})
export class ToDoTasksComponent {
  @Input() toDoTasks: Task[] = [];

  @Output() moveToComplete = new EventEmitter();
  @Output() clearInToDoTasks = new EventEmitter();
}
