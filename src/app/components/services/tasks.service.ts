import { Injectable } from '@angular/core';
import { Task } from '../tasks/tasks.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly tasks: string = 'tasks';

  addTask(task: any): void {
    const existingTasks = this.getAllTasks();
    let finalTasksToAdd = [];
    let taskAlreadyPresent: boolean = false;

    if (existingTasks) {
      existingTasks.forEach((el: Task) => {
        el.id === task.id && (taskAlreadyPresent = true);
      })
      if (taskAlreadyPresent) return;
      finalTasksToAdd = [...existingTasks, task]
    } else {
      finalTasksToAdd = [task]
    }

    localStorage.setItem(this.tasks, JSON.stringify(finalTasksToAdd));
  }

  getAllTasks(): any {
    const tasks = localStorage.getItem(this.tasks);

    return tasks ? JSON.parse(tasks) : null;
  }

  removeAllTaks(): void {
    localStorage.clear();
  }

  updateTask(value: any) {
    const existingTasks = this.getAllTasks();
    existingTasks.forEach((el: any) => {
      el.id === value && (el.isDone = !el.isDone);
    })
    localStorage.setItem(this.tasks, JSON.stringify(existingTasks));
  }

  removeTasksPartially(isDone: boolean) {
    const existingTasks = this.getAllTasks();
    const completedTaks: Task[] = []
    const inProgressTaks: Task[] = []
    existingTasks.forEach((el: any) => {
      el.isDone ? completedTaks.push(el) : inProgressTaks.push(el)
    })
    localStorage.setItem(this.tasks, JSON.stringify(isDone ? completedTaks : inProgressTaks));
  }
}

