import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrl: './on-push.component.scss',
  //TIPO ESTRATEGIA: Default / OnPush
   changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class OnPushComponent implements OnInit{
  constructor(){};
  /*
  valor que se va a autoincrementar cada segundo en el archivo TS
  y dependiendo de la estrategia de Change Detection sus cambios se va a
  actualizar o no en el HTML
  * */
  segundos : number=0;
  nTicks = 0;


  ngOnInit(): void {
     // Cada segundo nTicks se incrementa en uno
     setInterval(() => {
      this.segundos++;
      console.log('Segundos:', this.segundos);
      //this.nTicks++;
      //console.log('Nº Ticks:', this.nTicks);
      // Aplicar MarkForCheck para que la vista se actualice
      // Es decir, si tenemos una estrategia ONPUSH, tenemos que
      // Ejecutar, a nuestro gusto, el método markForCheck() para que la
      // Vista muestre el nuevo valor
      //this.changeDetectorRef.markForCheck();
    }, 1000);


  }
}
