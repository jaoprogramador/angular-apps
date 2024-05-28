import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrl: './kaban-tasks.component.scss'
})
export class KabanTasksComponent {
  
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

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
