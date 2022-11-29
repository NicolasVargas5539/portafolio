import { Component } from '@angular/core';

@Component({
  selector: 'app-p-app-gifs',
  templateUrl: './p-app-gifs.component.html',
  styleUrls: ['./p-app-gifs.component.css']
})
export class PAppGifsComponent {

  arr : any[] = [
    {
      path:'../../../../../assets/icon/Html5_Col.svg',
    },
    {
      path:'../../../../../assets/icon/CSS3_Col.svg',
    },
    {
      path:'../../../../../assets/icon/bootstrap-5_Col.svg',
    },
    {
      path:'../../../../../assets/icon/typescript_Col.svg',
    },
    {
      path:'../../../../../assets/icon/github_Col.svg',
    },

  ]

  constructor() { }
}
