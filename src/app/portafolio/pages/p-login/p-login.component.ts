import { Component, } from '@angular/core';

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.css']
})
export class PLoginComponent  {
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
    {
      path:'../../../../../assets/mysql_Col.svg',
    }
  ]

  constructor() { }

}
