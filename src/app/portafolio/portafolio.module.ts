import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardsComponent } from './components/cards/cards.component';
import { Project1Component } from './pages/projects/project1/project1.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    CardsComponent,
    Project1Component,
  ],
  exports: [
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PortafolioModule { }
