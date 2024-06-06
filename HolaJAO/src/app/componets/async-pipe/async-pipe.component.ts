import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})
export class AsyncPipeComponent implements OnInit {

    @Input() item$: Observable<number[]> = of([]);
  
    constructor() { }
  
    ngOnInit(): void {
      // Si queremos tener la lista de números real/futura en una variable,
      // tendríamos que suscribirnos.
      // En cambio, en la vista, simplemente haciendo uso del async pipe
      // tendríamos a cceso a esos valores
    }
  
  }
  
  