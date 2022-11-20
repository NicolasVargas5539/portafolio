import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  exports: [
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
