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
      img: '../../../../assets/bases de datos.png',
      desc: 'Un Crud en Angular con una api rest de php',
      rout: 'pCrudAngular'
    },
    {
      img: '../../../../assets/Login.jpg',
      desc: 'Un login conectado a una base de datos con token',
      rout: 'project1'
    },
    {
      img: '../../../../assets/Gifs-Angular.jpg',
      desc: 'Una aplicacion en Angular para buscar gifs',
      rout: 'project1'
    },
    {
      img: '../../../../assets/Mapbox.jpg',
      desc: 'Un mapa en Angular en tiempo real',
      rout: 'pMapbox'
    },
    {
      img: '../../../../assets/Paises.jpg',
      desc: 'Una aplicacion que muestra datos de paises',
      rout: 'project1'
    },
    {
      img: '../../../../assets/VideoJuegos.jpg',
      desc: 'Un prototipo de juego realizado en Unity',
      rout: 'project1'
    }
  ]
}
