import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PreloadingService } from '../../services/preloading.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss'] // Corregido: styleUrls en lugar de styleUrl
})
export class NavegationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private _preloadingService: PreloadingService) {}

  cargarModulo(route: string) {
    this._preloadingService.comenzarPrecarga(route);
  }
  
  cargarModuloTODOS() {
    this._preloadingService.comenzarPrecarga('*');
  }
}

