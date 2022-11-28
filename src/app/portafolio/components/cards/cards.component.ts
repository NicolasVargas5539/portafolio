import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor() { }

  contCards : any[] = [
    {
      img: '../../../../assets/img/bases de datos.png',
      desc: 'Un Crud en Angular con una api rest de php',
      rout: 'pCrudAngular'
    },
    {
      img: '../../../../assets/img/Login.jpg',
      desc: 'Un login conectado a una base de datos con token',
      rout: 'project1'
    },
    {
      img: '../../../../assets/img/Gifs-Angular.jpg',
      desc: 'Una aplicacion en Angular para buscar gifs',
      rout: 'project1'
    },
    {
      img: '../../../../assets/img/Mapbox.jpg',
      desc: 'Un mapa en Angular en tiempo real',
      rout: 'pMapbox'
    },
    {
      img: '../../../../assets/img/Paises.jpg',
      desc: 'Una aplicacion que muestra datos de paises',
      rout: 'project1'
    },
    {
      img: '../../../../assets/img/VideoJuegos.jpg',
      desc: 'Un prototipo de juego realizado en Unity',
      rout: 'project1'
    }
  ]
}
