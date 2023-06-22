import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

const isAuthenticated = () => {
  const router = inject(Router)
  if(localStorage.getItem('token')){
    return true;
  }
  return router.parseUrl('login');
}
const isLoggedIn = () => {
  const router = inject(Router)
  if(!localStorage.getItem('token')) {
    return true;
  }
  return router.parseUrl('home');
}

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component : LoginComponent,
    canActivate : [isLoggedIn]
  },
  {
    path:'home',
    component : HomeComponent,
    canActivate : [isAuthenticated]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
