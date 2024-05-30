import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from '../../models/task.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  @Input() task: ITask =
    {
      title: 'Titulo por defecto',
      description: 'Descripcion por defecto',
      completed: true,
      level: LEVELS.INFO
      
    }

  constructor(){}
  ngOnInit(): void {
    
    console.log('Method not implemented.');
  }

}
