import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //si path ''' redirigir a home
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
   //carga perezosa componente auth
   {
    path: 'auth',
    loadChildren:  () => import ('./modules/pages/auth/auth.module').then(m => m.AuthModule)
  },
  //carga perezosa componente home
  {
    path: 'home',
    loadChildren:  () => import ('./modules/pages/home/home.module').then(m => m.HomeModule)
  }
  ,
  //carga perezosa componente profile
  {
    path: 'profile',
    loadChildren:  () => import ('./modules/pages/profile/profile.module').then(m => m.ProfileModule)  
    
  },
  //Siempre el 404 se podrá en el modulo de enrutado principal
  {
    path:'**',
    loadChildren:  () => import ('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule ) 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
