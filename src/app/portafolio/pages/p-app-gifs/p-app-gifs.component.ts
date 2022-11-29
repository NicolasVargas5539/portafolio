import { Component } from '@angular/core';

@Component({
  selector: 'app-p-app-gifs',
  templateUrl: './p-app-gifs.component.html',
  styleUrls: ['./p-app-gifs.component.css']
})
export class PAppGifsComponent {

  arr : any[] = [
    {
      path:'../../../../../assets/Html5_Col.svg',
    },
    {
      path:'../../../../../assets/CSS3_Col.svg',
    },
    {
      path:'../../../../../assets/bootstrap-5_Col.svg',
    },
    {
      path:'../../../../../assets/typescript_Col.svg',
    },
    {
      path:'../../../../../assets/github_Col.svg',
    },

  ]

  constructor() { }
}
