import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../shared/todos.service";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }
}
