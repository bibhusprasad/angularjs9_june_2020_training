import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  cssClass = {
    'font-weight-bold': true,
    'text-danger': true,
  };
  myStyle = {
    color: 'blue',
    border: '1px solid blue',
  };
  constructor() {}
  ngOnInit(): void {}
}
