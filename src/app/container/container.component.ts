import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  price = 100.25;
  title = 'Hello friends!';
  isActive = false;
  today = new Date();
  pi = 3.14159265358979323846;

  constructor() {}
  ngOnInit(): void {}
}
