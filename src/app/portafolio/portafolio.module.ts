import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';

import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { InitComponent } from './pages/init/init.component';
import { CvComponent } from './pages/cv/cv.component';

// a b c d e f g h i j k l m n o p q r s t u v w x y z

@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutMeComponent,
    InitComponent,
    CvComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
