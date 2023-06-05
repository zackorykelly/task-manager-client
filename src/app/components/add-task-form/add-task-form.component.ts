import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  taskTitle = '';
  taskDescription = '';

  constructor(private tasksService: TasksService, private router: Router) {}

  submitForm(): void {
    this.tasksService.createTask({
      title: this.taskTitle,
      description: this.taskDescription,
    }).pipe().subscribe(res => {
      this.router.navigate(['/'])
    })
  }
}
