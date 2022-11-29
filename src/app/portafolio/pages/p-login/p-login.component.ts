import { Component, } from '@angular/core';

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.css']
})
export class PLoginComponent  {
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
    {
      path:'../../../../../assets/icon/mysql_Col.svg',
    }
  ]

  constructor() { }

}
