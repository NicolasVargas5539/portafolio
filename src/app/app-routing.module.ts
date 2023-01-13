import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'portafolio',
        loadChildren: () => import('./portafolio/portafolio.module').then(m => m.PortafolioModule)
      },
      {
        path: '404',
        component: ErrorPageComponent,
        // pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '404'
      },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
