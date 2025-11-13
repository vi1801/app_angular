import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root', // makes the service available application-wide
})
export class TodosService {
  http = inject(HttpClient);
  
  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(url);
  }
}
