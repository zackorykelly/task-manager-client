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

  markComplete(task: any): void {
    this.tasksService.updateTaskStatus(task.id, true).pipe().subscribe(res => {
      task.completed = true
    })
  }

  revertComplete(task: any): void {
    this.tasksService.updateTaskStatus(task.id, false).pipe().subscribe(res => {
      task.completed = false
    })
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id).pipe().subscribe(res => {
      this.taskList = this.taskList.filter((task) => task.id !== id)
    })
  }
}
