import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CvComponent } from './pages/cv/cv.component';
// a b c d e f g h i j k l m n o p q r s t u v w x y z

const rutas : Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: HomeComponent },
      { path: 'habilidades', component: CvComponent },
      { path: 'proyectos', component: ProjectsComponent },
      { path: 'Sobre-Mi', component: AboutMeComponent },
      { path: '**', redirectTo: ''}
    ]
  }
]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild( rutas )
  ]
})

export class PortafolioRoutingModule { }
