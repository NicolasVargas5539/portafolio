import { Component } from '@angular/core';

@Component({
  selector: 'app-p-app-paises',
  templateUrl: './p-app-paises.component.html',
  styleUrls: ['./p-app-paises.component.css']
})
export class PAppPaisesComponent {

  constructor() { }

  arr : any[] = [
    {
      path:'../../../../../assets/Html5_Col.svg',
    },
    {
      path:'../../../../../assets/CSS3_Col.svg',
    },
    {
      path:'../../../../../assets/typescript_Col.svg',
    },
    {
      path:'../../../../../assets/github_Col.svg',
    }
  ]

}

