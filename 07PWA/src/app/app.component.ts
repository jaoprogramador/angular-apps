import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = '07PWA';
  strChiste="";
  constructor ( private _swUpdate: SwUpdate, private _dataService: DataService){ };
  ngOnInit(): void {
    console.log('AppComponent::recargarCache');
    this.recargarCache();
  }
  /**
   * Método encargado de mostrar alerta al usuario cuando
   * El servidor worker detecte una nueva version de código
   */
  recargarCache(){
    //comprobar que service worker está activo y detecta cambios en produccion
    if(this._swUpdate.isEnabled){
      this._swUpdate.versionUpdates.subscribe(
        {
            next : (event: VersionEvent) => {
              //cuando se detecta y emite el evento de una version de la aplicacion disponible
              //consultamos al usuario si desea la nueva versión
              if(confirm("Hay una nueva version¿Deseas descargarla?")){
                //le decimos a serviceWorker que active la nueva version
                this._swUpdate.activateUpdate()
                .then((
                  value: boolean)=> {                                      
                    //si accede recargamos la ventana
                    window.location.reload();
                    

                })
                .catch((error) => console.error(`Ha habido un error al activar la nueva version ${error}`))
                .finally(() => console.info(`Actualización finalizada`))
              }
                

            },
            error : (error) => {
              console.error(`ERROR en la recarga de la nueva version${error}`);
            },
            complete : () => {
              console.info(`Finalizada la recarga de la nueva version`);
            },
        })
    }
  }
  obtenerNuevoChiste(){
    this._dataService.obternerChisteAleatorio().subscribe({
      next : (respuesta : any) => 
        this.strChiste=respuesta.value
      ,
      error : (error) => 
        console.error(`ERROR al obtener el chiste ${error}`)
      ,
      complete : () => 
        console.info(`Finalizada la peticion del chiste`)
      ,
    })
  }
  
}
