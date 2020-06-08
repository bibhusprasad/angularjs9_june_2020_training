import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  clickHandler() {
    console.log('Button is clicked!..');
  }

  inputHandler(args) {
    console.log('input handler is called!..', args.target.value);
  }
}
