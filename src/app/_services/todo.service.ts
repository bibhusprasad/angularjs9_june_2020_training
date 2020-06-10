import { Injectable } from '@angular/core';
import { todoList, ToDoItem, AppStatistics } from 'src/_data/data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private list = todoList;

  currentItems = todoList.filter((el) => el.status === 'open');
  pastItems = todoList.filter((el) => el.status !== 'open');

  constructor() {}

  getItem(id: number): ToDoItem {
    return todoList.find((el) => el.id === id);
  }

  getStatistics(): AppStatistics {
    let open = 0;
    let completed = 0;
    let cancelled = 0;
    let done = 0;

    todoList.forEach((el) => {
      if (el.status === 'open') {
        open++;
      }
      if (el.status === 'completed') {
        completed++;
      }
      if (el.status === 'cancelled') {
        cancelled++;
      }
      if (el.status === 'done') {
        done++;
      }
    });

    return {
      open,
      completed,
      cancelled,
      done,
    };
  }
}
