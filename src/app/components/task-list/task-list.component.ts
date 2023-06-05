import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList = [
    {id: 1, title: 'Cats', description: 'Feed them.', completed: false},
  ]

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
    this.tasksService.markComplete(id).pipe().subscribe(res => {
      this.getTasks()
    })
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id).pipe().subscribe(res => {
      this.getTasks()
    })
  }
}
