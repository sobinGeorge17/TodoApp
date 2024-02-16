import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent implements OnInit {
  completed: Todo[] = []
  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'moderate':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'secondary';
    }
  }
  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.completed = this.TodoService.getCompletedTask()
  }
  deleteTodo(index: number) {
    this.TodoService.removeTodo(index)
    this.completed = this.TodoService.getCompletedTask()

  }

}
