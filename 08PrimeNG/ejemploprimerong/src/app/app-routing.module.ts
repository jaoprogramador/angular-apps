import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //carga perezosa
  { 
    path: '', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)  // Corrige el nombre del archivo y la importación
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
