import { App1ShareModule } from './../../../app1/src/app/app.module';
import { App2ShareModule } from './../../../app2/src/app/app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'app1/home'
  },
  {
    path:'app1',
    loadChildren: () => import('./../../../app1/src/app/app.module').then(m => m.App1ShareModule)
  },
  {
    path:'app2',
    loadChildren: () => import('./../../../app2/src/app/app.module').then(m => m.App2ShareModule)
  },
  
  {
    path:'**',
    redirectTo:'app1/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    //importamos los modulos para poder cargar y usar sus rutas desde APP0
    App1ShareModule.forRoot(),//MODULO de APP1
    App2ShareModule.forRoot()//MODULO de APP2
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
