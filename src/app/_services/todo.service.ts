import { Injectable } from '@angular/core';
import { todoList, ToDoItem } from 'src/_data/data';

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
}
