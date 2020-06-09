import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';

  parentName: string = '';

  constructor() {}

  eventHandler(args) {
    this.parentName = args.toUpperCase();
  }
}
