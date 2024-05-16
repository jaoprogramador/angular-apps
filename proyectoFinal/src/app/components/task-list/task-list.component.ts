import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from '../../models/interfaces/Task_interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  //TODO reformular con una lista de tareas
  tarea1: ITask={
    title:'Crear proyecto final',
    description:'Crear el proyecto y bajar dependencias',
    completed:true,
    level:Levels.Info
  }
  tarea2: ITask={
    title:'Crear Componentes',
    description:'crear componentes de la app',
    completed:true,
    level:Levels.Urgent
  }
  tarea3: ITask={
    title:'Crear estilos CSS',
    description:'crear estilos para las pantallas',
    completed:false,
    level:Levels.Blocking
  }
  tarea4: ITask={
    title:'Diseñar FRONT html',
    description:'crear html para las pantallas',
    completed:false,
    level:Levels.Blocking
  }
  tarea5: ITask={
    title:'Diseñar formularios html',
    description:'crear formularios para las pantallas',
    completed:false,
    level:Levels.Blocking
  }

  constructor(){}

  ngOnInit(): void {
    console.log('TaskListComponent::ngOnInit');
  }
  deleteTask(task:ITask){
    alert(`Se elimina la tarea ${task.title}`);
  }

}
