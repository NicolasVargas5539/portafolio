import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbar: string[];

  constructor() {
    this.navbar = ['Inicio', 'Habilidades', 'Proyectos', 'Sobre Mi']
  }


}
