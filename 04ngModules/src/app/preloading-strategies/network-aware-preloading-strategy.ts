import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

// avoid typing issues for now
export declare var navigator:  any;

@Injectable(
    { providedIn: 'root' 

    })
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
    /**
     * @param route la ruta recbida que debería cargar un modulo
     * @param load el callback que carga el modulo
     * @returns ejecuta el callback de carga del modulo o devuelve un Observable vacío
     * 
     */
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        //comprueba que el usuario tiene buena conexion
        //1.- En ncaso de que la funcion devuelva un true-->carga el módulo
        //2.- En caso de que la función devuelva un false no devuelve nada(no carga l modulo)

        return this.hasGoodConnection() ? load() : EMPTY;
    }
    /**
     * Funcion que decide si el modulo se carga o no 
     * Comprobando si el usuario tiene una conexion aceptable a internet
     * @return {boolean} si se puede cargar el modulo
     */
    hasGoodConnection(): boolean {
        console.log('NetworkAwarePreloadStrategy::hasGoodConnection');
        //obtenemos la conexion del usuario
        const conn = navigator.connection;
        
        if (conn) {
            //comprobamos si usuario tiene cerrada la conexion a datos del tlf
            // en ese caso no cargamos el modulo
            if (conn.saveData) {
                console.log('NetworkAwarePreloadStrategy::hasGoodConnection::conn.saveData:false');
                return false; 
            }
            //lista de conexiones no validas para precargar el modulo
            const avoidTheseConnections = ['slow-2g', '2g' /* , '3g', '4g' */];
            //obtenemos el tipo de conexion del usuario
            //en caso de que no sea así no se precarga el modulo
            const effectiveType = conn.effectiveType || '';
            if (avoidTheseConnections.includes(effectiveType)) {
                console.log('NetworkAwarePreloadStrategy::hasGoodConnection::avoidTheseConnections:false');
                return false;
            }
        }
        //si la conexion es estable y buena se precarga el modulo
        console.log('NetworkAwarePreloadStrategy::hasGoodConnection::true');
        return true;
    }
}