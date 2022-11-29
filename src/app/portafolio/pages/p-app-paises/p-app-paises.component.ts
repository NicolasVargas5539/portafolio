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
      path:'../../../../../assets/icon/Html5_Col.svg',
    },
    {
      path:'../../../../../assets/icon/CSS3_Col.svg',
    },
    {
      path:'../../../../../assets/icon/typescript_Col.svg',
    },
    {
      path:'../../../../../assets/icon/github_Col.svg',
    }
  ]

}

