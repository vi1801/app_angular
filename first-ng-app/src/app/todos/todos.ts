import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todosService';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService)
  todoItems = signal<Array<Todo>>([]); // Signal to hold the list of todo items
  searchTerms = signal(''); // Signal to hold the search terms
  
  ngOnInit(): void { // Lifecycle hook that is called after data-bound properties are initialized
    this.todoService.getTodosFromApi()
    .pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        throw error; // Return an empty array in case of error
      })
    )
    .subscribe(todos => {
      this.todoItems.set(todos); // Update the signal with fetched todos
    });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) =>
        todo.id === todoItem.id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  }

}
