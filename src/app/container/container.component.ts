import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDoItem, todoList } from 'src/_data/data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  currentItems = todoList.filter((p) => p.status === 'open');
  pastItmes = todoList.filter((p) => p.status !== 'open');
}
