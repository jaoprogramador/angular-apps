
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { PreloadingOptions, PreloadingService } from '../services/preloading.service';
import { Injectable } from '@angular/core';


@Injectable({ 
    providedIn: 'root' 
})

export class OnDemandPreloadingStrategy implements PreloadingStrategy {
    
    private _preloadDemandOptions$: Observable<PreloadingOptions>;

    constructor(private _preloadingService: PreloadingService){
        this._preloadDemandOptions$ = this._preloadingService.options;

    }

    

    private decidirSiPrecargar(route: Route, preloadingOptions: PreloadingOptions): boolean {
        // Si:
        //* 1. La ruta tiene una propiedad llamada "data"
        //* 2. La ruta tiene dentro de "data" una clave llamada "preload" a true
        //* 3.- La ruta está incluida en una lista de rutas que queremos precargar
        //* 4. Las opciones tienen "preload" a true
        // * Aquí podemos añadir más condiciones totalemnte personalizadas
        return (
            route.data && 
            route.data['preload'] &&
            [route.path, '*'].includes(preloadingOptions.routePath) &&
            preloadingOptions.preload // true
        );

         
    }

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        // Estamos escuchando los valores de opciones de precarga emitidos por el next() del servicio        
        return this._preloadDemandOptions$.pipe(
            // Iteramos por cada valor recibido desde el servicio con el next()
            mergeMap((preloadingOptions: PreloadingOptions) => {
                const precargar: boolean = this.decidirSiPrecargar(route, preloadingOptions);
                console.log(`${precargar ? '' : 'NO'} se precarga el modulo de la ruta ${route.path}`);
                // Comprobamos si se debe cargar o no bajo estas opciones
                // Devolvemos la ejecución del callback load o nada
                return precargar ? load() : EMPTY;
            })
        );
    }
}

