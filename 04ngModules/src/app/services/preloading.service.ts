import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';//permite emitir valores

//Creamos una clase de opciones de precarga
//va a servir para definir las opciones que debe tener una ruta para
//precargar o no un modulo

export class PreloadingOptions{
  
  constructor(public routePath: string, public preload: boolean= true){}

}
/**
 * SERVICIO PERSONALIZADO QUE SE VA A ENCARGAR DE PRECARGAR O NO UN MODULO
 * DE LAS DIFERENTES RUTAS QUE HAYA EN EL MODULO DE ENRUTADO Y ESTÉN ESPECIFICADAS
 * COMO CARGA PEREZOSA
 * 
 * LA IDEA ES QUE MEDIANTE UN EVENTO DEL USUARIO (CLICK, ONMOUSEOVER, ONLOAD...)
 * SE INICIE UNA PRECARGA O NO DE MODULOS POR LO QUE NOS ADELANTAREMOS AL USUARIO
 * PRECARGANDO UN MODULO QUE PREDECIMOS QUE VA A NECESITAR:
 * 
 * ?POR EJEMPLO: SI UN USUARIO PASA EL CURSO POR UN ELEMENTO DEL MENU AL QUE CLARAMENTE A VA A NAVEGAR
 * PRECARGAMOS EL MODULO EN SEGUNDO PLANO, PARA QUE LA NAVEGACION SEA MAS FLUIDA Y REDUCIR TIEMPOS DE CARGA.
 * 
 * CON ESTO SE PUEDE CONSEGUIR UNA MEJOR EXPERIENCIA DE USUARIO, AL EVITAR QUE LA APLICACIÓN SE QUEDE CARGANDO 
 * CUANDO TENGA QUE DE MANERA PEREZOSA CARGAR UNA RUTA DE UN MODULO DE RUTAS NUEVO.
 */
@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  
  //Un subject es un tipo de observable que permite emitir valores
  //a quien esté suscrito al mismo a través del método .next(nuevoValor)
  private _subject = new Subject<PreloadingOptions>();

  //Cualquier Subject puede ser tratado como un obrservable y es el que tenemos
  //que hacer público
  // Con él vamos a ofrecer las opciones de la ruta que desea ser precargada como un Observable
  public options = this._subject.asObservable();

  constructor() { }

  /**
   * Método encargado de iniciar una evaluación de precarga
   * @param routePath Ruta que se desea precargar
   */
  comenzarPrecarga(routePath: string){
    //Creamos las opciones de la precarga
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true);

    //Emitimos las sopciones que desean ser precargadas
    //Esta información la va a escuchar la estrategia de precarga
    //* ON-DEMAND-PRELOADING-STRATEGY
    //Para así evaluar si debe o no debe precargar la ruta
    this._subject.next(opcionesPrecarga);

  }


}
