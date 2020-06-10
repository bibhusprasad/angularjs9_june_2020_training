import { Component, OnInit } from '@angular/core';
import { AppStatistics } from 'src/_data/data';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statistics: AppStatistics;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.statistics = this.todoService.getStatistics();
  }
}
