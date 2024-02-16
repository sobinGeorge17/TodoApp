import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrl: './inprogress.component.css'
})
export class InprogressComponent implements OnInit{

  inprogress:Todo[]=[]

  getPriorityColor(priority: string): string {
    switch(priority) {
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

  constructor(private TodoService:TodoService){
    

  }
  ngOnInit(): void {
    this.inprogress = this.TodoService.getonProgressList()
  }
  deleteTodo(index:number){

    this.TodoService.removeTodo(index)
    this.inprogress = this.TodoService.getonProgressList()
 
   }

   updateStatus(index:number,newStatus:string){
    this.inprogress[index].status = newStatus
    this.inprogress = this.TodoService.getonProgressList()
   }


}
