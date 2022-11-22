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
      rout: ''
    },
    {
      img: '../../../../assets/Login.jpg',
      rout: ''
    },
    {
      img: '../../../../assets/Gifs-Angular.jpg',
      rout: ''
    },
    {
      img: '../../../../assets/Mapbox.jpg',
      rout: ''
    },
    {
      img: '../../../../assets/Paises.jpg',
      rout: ''
    },
    {
      img: '../../../../assets/VideoJuegos.jpg',
      rout: ''
    }
  ]

}
