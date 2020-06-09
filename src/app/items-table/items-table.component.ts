import { Component, OnInit } from '@angular/core';
import { ToDoItem, todoList } from 'src/_data/data';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss'],
})
export class ItemsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentItems(): ToDoItem[] {
    return todoList.filter((p) => p.status === 'open');
  }
}
