import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../_services/todo.service';
import { ToDoItem } from 'src/_data/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number;
  item: ToDoItem;

  constructor(private ar: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    this.id = +this.ar.snapshot.paramMap.get('id');
    if (!this.id) {
      console.log('Oops');
    } else {
      this.item = this.todoService.getItem(this.id);
    }
  }
}
