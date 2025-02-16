import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PaginacionComponent } from './paginacion/paginacion.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },  // Ruta predeterminada (listado de heroes)
  { path: 'heroe/:id', component: HeroeComponent },  //Detalle heroe
  { path: 'paginacion', component: PaginacionComponent },//Paginación
  { path: '**', redirectTo:'' }, // Ruta para manejar 404 (cuando no se encuentra la ruta solicitada)
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
