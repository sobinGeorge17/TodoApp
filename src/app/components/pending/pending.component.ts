import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})
export class PendingComponent implements OnInit {
  pending: Todo[] = []

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

  constructor(private Todoservice: TodoService) { }
  ngOnInit(): void {
    this.pending = this.Todoservice.getpendingList()
  }


  deleteTodo(index: number) {
    this.Todoservice.removeTodo(index)
    this.pending = this.Todoservice.getpendingList()
  }
  updateStatus(index: number, newStatus: string): void {
    this.pending[index].status = newStatus;
    this.pending = this.Todoservice.getpendingList()
  }




}
