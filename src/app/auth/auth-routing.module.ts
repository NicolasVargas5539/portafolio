import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// a b c d e f g h i j k l m n o p q r s t u v w x y z

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent},
      { path: '**', redirectTo: 'login'}
    ]
  }
]

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AuthRoutingModule { }
