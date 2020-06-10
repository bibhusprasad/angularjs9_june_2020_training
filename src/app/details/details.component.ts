import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.ar.snapshot.paramMap.get('id');
    if (!this.id) {
      console.log('Oops');
    } else {
      console.log('Good', this.id);
    }
  }
}
