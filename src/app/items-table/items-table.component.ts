import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem, todoList } from 'src/_data/data';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss'],
})
export class ItemsTableComponent implements OnInit {
  @Input() list: ToDoItem[];

  constructor() {}

  ngOnInit(): void {}
}
