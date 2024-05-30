import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from '../../models/task.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrl: './kaban-tasks.component.scss'
})

export class KabanTasksComponent {
  todoTasks: ITask[] = [
    {
      title: 'FRONT',
      description: 'Programar componentes Pantallas',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'FRONT',
      description: 'Hacer el routing de las pantallas',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'FRONT',
      description: 'Crear servicios HTTP',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'FROM',
      description: 'Maquetar componentes Pantallas',
      completed: false,
      level: LEVELS.BLOCKING
    }
  ];
 doneTasks: ITask[] = [
    {
      title: 'BACK',
      description: 'Generar APIs CRUD',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'BACK',
      description: 'Prohgramar Controllers',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'BACK',
      description: 'Crear el Modelo de datos',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'CONFIGURACION',
      description: 'Configurar proyecto con Maven',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'CONFIGURACION',
      description: 'Crear DockerFile',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'CONFIGURACION',
      description: 'Crear Repositorio en GitHub',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'TESTING',
      description: 'Hacer testing con postman',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'TESTING',
      description: 'Hacer test JUNIT',
      completed: false,
      level: LEVELS.INFO
    }
  ];
  todo = [
    'Programar componentes Pantallas',
    'Hacer el routing de las pantallas',
    'Crear servicios HTTP'
  ];

  done = [    
    'Generar APIs CRUD',
    'Prohgramar Controllers',
    'Crear el Modelo de daatos',
    'Configurar proyecto con Maven',
    'Crear DockerFile',
    'Crear Repositorio en GitHub',
    'Hacer testing con postman',
    'Hacer test JUNIT'
  ];

  //drop(event: CdkDragDrop<string[]>): void {
    drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      console.log('Misma columna',event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('Entre columna',event);
      console.log('Debemos cambiar el estado de la task',event);
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
