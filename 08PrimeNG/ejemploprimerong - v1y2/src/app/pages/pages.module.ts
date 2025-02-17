import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
/* import { SharedModule } from '../shared/shared.module';

 */
@NgModule({
  declarations: [
    HeroesComponent,
    HeroeComponent,
    PaginacionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule/* ,
    SharedModule */
  ],
  
})
export class PagesModule { }
