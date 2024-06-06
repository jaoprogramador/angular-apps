import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrl: './ng-zone.component.scss'
})
export class NgZoneComponent implements OnInit {

  // Porcentaje de progreso inicializado a 0
  progreso = 0;
  // Texto va a servir para indicar si se ha calculado dentro del
  // Angular Zone o Fuera
  texto: string = ''

  // ngZone nos servirá para realizar operaciones fuera o dentro de
  // Angular Zone
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  /**
   * Método que nos va a servir para incrementar el progreso
   * hasta llegar al valor 100
   * 0% - 100%
   * @param final Callback que termina la función
   */
  _incrementoProgreso(final: () => void) {
    // Incrementamos el progreso en 1%
    this.progreso += 1;
    // Lo mostramos por consola
    console.log(`Progreso actual: ${this.progreso}%`);
    // Comprobarmos que el progreso supere 100%
    if (this.progreso < 100) {
      // Seguir ejecutando esta función con un TimeOut
      window.setTimeout(() => this._incrementoProgreso(final), 10);
    } else {
      // Si llegamos a 100, ejecutamos el callback
      final();
    }
  }

  /**
   * Método que incrementa la variable Progreso hasta 100%
   * DENTRO DEL ANGULAR ZONE
   * Esto quiere decir, que las modificaciones en la vista
   * serán constantes. Veremos cada cambio en la pantalla
   */
  procesarDentroAngularZone() {
    this.texto = 'DENTRO';
    // REINICIAMOS el valor del proceso
    this.progreso = 0;
    // Realizamos el incremento
    this._incrementoProgreso(() => {
      console.log('(DENTRO DE ANGULAR ZONE) Aumento 100% Terminado');
    })
  }

  /**
   * Método que incrementa la variable Progreso hasta 100%
   * FUERA DEL ANGULAR ZONE
   * Esto quiere decir, que las modificaciones en la vista
   * NO SE REALIZARÁN hasta que se lo indiquemos y entonces
   * veremos el cambio en la pantalla
   */
  procesarFueraAngularZone() {
    this.texto = 'FUERA';
    // REINICIAMOS el valor del proceso
    this.progreso = 0;
    // Implementamos funcionalidad fuera de Angular Zone
    // Para que los valores intermedios entre 0 y 100 no se vean
    // reflejados en la vista
    this.ngZone.runOutsideAngular(() => {
      // Fuera de Angular Zone vamos a ejecutar el incremento
      this._incrementoProgreso(() => {
        // Una vez haya terminado de incrementar,
        // Volvemos al NgZone para que el cambio de valor se muestre
        // en la pantalla
        this.ngZone.run(() => {
          console.log('(FUERA DE ANGULAR ZONE) Aumento 100% Terminado');
        });
      });
    });
  }
}


