import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList:Todo[]=[]


  constructor() { }

  getpendingList():Todo[]{
    return this.todoList.filter(data=>data.status ==='pending')
  }
  getonProgressList():Todo[]{
    return this.todoList.filter(data =>data.status==='inprogress')

  }
  getCompletedTask(){
    return this.todoList.filter(data => data.status === 'completed')
  }
  

  getTodoList():Todo[]{

    return this.todoList

  }

  addTodoList(todo:Todo){
    return this.todoList.push(todo)
  }

  removeTodo(index:number){
     return this.todoList.splice(index,1)
  }

 


}
