import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  taskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private tasksService: TasksService, private router: Router) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    //Incase submit is triggered with invalid form, return prematurely
    if (this.taskForm.invalid) {
      return
    }

    const {title, description} = this.taskForm.value;

    this.tasksService.createTask({title, description}).pipe().subscribe(res => {
      //Go back to home after new task created
      this.router.navigate(['/'])
    }, err => {
      console.error(err)
    })

    this.taskForm.reset();
  }
}
