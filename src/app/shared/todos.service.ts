import {Injectable} from "@angular/core";


export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn:'root'})
export class TodosService {
  public todos: Todo[] = [
    {id: 1, title: "Купить хлеб", completed: false, date: Date.now()},
    {id: 2, title: "Купить молоко", completed: true, date: Date.now()},
    {id: 3, title: "Купить чай", completed: false, date: Date.now()}
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
}
