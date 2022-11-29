import { Component } from '@angular/core';

@Component({
  selector: 'app-p-app-juego',
  templateUrl: './p-app-juego.component.html',
  styleUrls: ['./p-app-juego.component.css']
})
export class PAppJuegoComponent {

  arr : any[] = [
    {
      path:'../../../../../assets/icon/csharp_Col.svg',
    },
    {
      path:'../../../../../assets/icon/Unity_Col.svg',
    }
  ]

  constructor() { }
}
