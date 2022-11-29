import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './portafolio/pages/about-me/about-me.component';
import { HomeComponent } from './portafolio/pages/home/home.component';
import { ProjectsComponent } from './portafolio/pages/projects/projects.component';
import { SkillsComponent } from './portafolio/pages/skills/skills.component';
import { Project1Component } from './portafolio/pages/pMapbox/project1.component';
import { PCrudAngularComponent } from './portafolio/pages/p-crud-angular/p-crud-angular.component';
import { PAppPaisesComponent } from './portafolio/pages/p-app-paises/p-app-paises.component';
import { PLoginComponent } from './portafolio/pages/p-login/p-login.component';
import { PAppGifsComponent } from './portafolio/pages/p-app-gifs/p-app-gifs.component';
import { PAppJuegoComponent } from './portafolio/pages/p-app-juego/p-app-juego.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'habilidades',
    component: SkillsComponent,
  },
  {
    path: 'proyectos',
    component: ProjectsComponent
  },
  {
    path: 'sobre-mi',
    component: AboutMeComponent

  },
  {
    path: 'proyectos/Mapbox',
    component: Project1Component
  },
  {
    path: 'proyectos/CrudAngular',
    component: PCrudAngularComponent
  },
  {
    path: 'proyectos/PaisesApp',
    component: PAppPaisesComponent
  },
  {
    path: 'proyectos/Login',
    component: PLoginComponent
  },
  {
    path: 'proyectos/Gifs',
    component: PAppGifsComponent
  },
  {
    path: 'proyectos/Juego',
    component: PAppJuegoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
