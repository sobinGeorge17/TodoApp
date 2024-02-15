import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList:Todo[]=[]

  constructor() { }

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
