import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardsComponent } from './components/cards/cards.component';
import { Project1Component } from './pages/pMapbox/project1.component';
import { PCrudAngularComponent } from './pages/p-crud-angular/p-crud-angular.component';
import { PorProjectoComponent } from './components/por-projecto/por-projecto.component';
import { PLoginComponent } from './pages/p-login/p-login.component';
import { PAppGifsComponent } from './pages/p-app-gifs/p-app-gifs.component';
import { PAppPaisesComponent } from './pages/p-app-paises/p-app-paises.component';
import { PAppJuegoComponent } from './pages/p-app-juego/p-app-juego.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    CardsComponent,
    Project1Component,
    PCrudAngularComponent,
    PorProjectoComponent,
    PLoginComponent,
    PAppGifsComponent,
    PAppPaisesComponent,
    PAppJuegoComponent,
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
