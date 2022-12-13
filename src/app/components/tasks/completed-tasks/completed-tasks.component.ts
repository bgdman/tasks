import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../tasks.interface';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {
  @Input() completedTasks: Task[] = [];

  @Output() moveInToDo = new EventEmitter();
  @Output() clearCompletedTasks = new EventEmitter();
}
