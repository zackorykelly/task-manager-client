import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Array<any> = []

  constructor(private tasksService: TasksService) {

  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.tasksService.getTasks().pipe().subscribe(tasks => {
      this.taskList = tasks
    })
  }

  markComplete(id: number): void {
    this.tasksService.updateTaskStatus(id, true).pipe().subscribe(res => {
      this.getTasks()
    })
  }

  revertComplete(id: number): void {
    this.tasksService.updateTaskStatus(id, false).pipe().subscribe(res => {
      this.getTasks()
    })
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id).pipe().subscribe(res => {
      this.getTasks()
    })
  }
}
