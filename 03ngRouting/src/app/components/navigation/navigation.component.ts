import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PreloadingService } from '../../services/preloading.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver, private router: Router, private _preloadingService: PreloadingService) {}

logout(){
  sessionStorage.removeItem('token');
  this.router.navigate(['login']);
}

/**
 * Método encargado de precargar un módulo del sistema de rutas de la aplicación
 * @param ruta ruta para cargar módulo
 */
precargaModulo(ruta: string){
  this._preloadingService.comenzarPrecarga(ruta);
}

}


