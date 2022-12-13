import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/tasks.service';
import { Task } from '../tasks.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  completedTasks: Task[] = [];
  toDoTasks: Task[] = [];
  reader = new FileReader();
  noTasksStored: boolean = false;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.setTasks();
  }

  setTasks(): void {
    const localStorageTasks: Task[] = this.localStorageService.getAllTasks()
    if (localStorageTasks) {
      this.completedTasks = localStorageTasks.filter(task => task.isDone);
      this.toDoTasks = localStorageTasks.filter(task => !task.isDone);
      this.noTasksStored = false;
      return;
    }
    this.noTasksStored = true
  }

  loadDefaultTasks() {
    this.clearTasks();
    this.httpClient.get("assets/tasks.json").pipe(
      finalize(() => { this.noTasksStored = false; this.setTasks() })
    ).subscribe((tasks: any) => {
      tasks.forEach((task: Task) => {
        this.localStorageService.addTask(task)
      });
    })
  }

  updateTask(taskId: number) {
    this.localStorageService.updateTask(taskId);
    this.setTasks();
  }

  clearTasks() {
    this.localStorageService.removeAllTaks();
    this.noTasksStored = true;
  }

  clearTasksPartially(isDone: boolean) {
    this.localStorageService.removeTasksPartially(isDone);
    this.setTasks();
  }
}
