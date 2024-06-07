
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
/**
 * @param route la ruta recbida que debería cargar un modulo
 * @param load el callback que carga el modulo
 * @returns ejecuta el callback de carga del modulo o devuelve un Observable vacío
 * 
 */
@Injectable({ providedIn: 'root' })
//export class PreloadSelectedModulesList implements PreloadingStrategy {
    export class OptInPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        //Evaluacion que determina:
        //1.- Si dentro de la ruta hay un valor llamado "data"
        //2.- Si drentro del l valor "data" hay una clave llamada "preload" a "true"
        //entonces, ejecuta el callback y carga el modulo
        //Si no lo tiene,  devuelve un observable nulo para que no se precargue el modulo       
        return route.data && route.data['preload'] ? load() : EMPTY;
    }
}
