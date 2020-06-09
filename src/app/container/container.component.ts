import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Input() currentScore: number;

  constructor() {}

  ngOnInit(): void {}
}
