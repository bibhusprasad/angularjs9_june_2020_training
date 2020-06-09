import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Output() customEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  inputLocalHandler(args) {
    this.customEvent.emit(args.target.value);
  }
}
