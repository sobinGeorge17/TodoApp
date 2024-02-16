import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  myTodo: Todo = { title: '', priority: 'low', status: 'pending' }

  listTodo:Todo[]= []

// getPriorityColor(priority: string): string {
//   switch(priority) {
//     case 'high':
//       return 'danger';
//     case 'moderate':
//       return 'warning';
//     case 'low':
//       return 'success';
//     default:
//       return 'secondary';
//   }
// }

// getStatusColor(status: string): string {
//   switch(status) {
//     case 'pending':
//       return 'danger';
//     case 'In progress': 
//       return 'warning';
//     case 'completed':
//       return 'success';
//     default:
//       return 'secondary';
//   }
// }

  constructor(private tododService: TodoService) {

   }
   ngOnInit(): void {
   this.listTodo =  this.tododService.getTodoList()
  
   
   }


  addTodoValue() {
    if (this.myTodo.title.trim()) {
      this.tododService.addTodoList(this.myTodo)
      this.myTodo = {title:'',priority:'low',status:'pending'}
      // console.log(this.listTodo)
      
      
    }
  }

  remove(i:number){
    this.tododService.removeTodo(i)

  }


}
