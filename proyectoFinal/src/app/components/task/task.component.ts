import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { ITask } from '../../models/interfaces/Task_interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>;

  constructor() {}
  ngOnInit(): void {
    console.log('onload TaskComponent');
  }
  deleteTask(){
    console.log("Eliminar tarea ", this.task?.title);
    this.delete.emit(this.task);//notificamos al componente superior la tarea a eliminar
  }

}
