import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksUrl = `http://localhost:8000/tasks`

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.tasksUrl}`);
  }

  updateTaskStatus(id: number, status: boolean): Observable<any> {
    return this.http.patch<any>(`${this.tasksUrl}/${id}`, {completed: status});
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.tasksUrl}/${id}`)
  }

  createTask(form: any): Observable<any> {
    return this.http.post<any>(`${this.tasksUrl}`, form)
  }
}
