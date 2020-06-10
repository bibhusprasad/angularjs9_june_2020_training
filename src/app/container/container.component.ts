import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { todoList, ToDoItem } from 'src/_data/data';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  currentItems: ToDoItem[];
  pastItems: ToDoItem[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.currentItems = this.todoService.currentItems;
    this.pastItems = this.todoService.pastItems;
  }
}
