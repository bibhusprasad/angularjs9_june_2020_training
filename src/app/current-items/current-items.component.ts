import { Component, OnInit } from '@angular/core';
import { ToDoItem, todoList } from 'src/_data/data';

@Component({
  selector: 'app-current-items',
  templateUrl: './current-items.component.html',
  styleUrls: ['./current-items.component.scss'],
})
export class CurrentItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  count: number = 0;

  currentItems(): ToDoItem[] {
    return todoList.filter((p) => p.status === 'open');
  }
}
