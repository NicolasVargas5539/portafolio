import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './portafolio/pages/about-me/about-me.component';
import { HomeComponent } from './portafolio/pages/home/home.component';
import { ProjectsComponent } from './portafolio/pages/projects/projects.component';
import { SkillsComponent } from './portafolio/pages/skills/skills.component';
import { Project1Component } from './portafolio/pages/projects/project1/project1.component';

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
    path: 'proyectos/:id',
    component: Project1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
