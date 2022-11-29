import { Component } from '@angular/core';

@Component({
  selector: 'app-p-crud-angular',
  templateUrl: './p-crud-angular.component.html',
  styleUrls: ['./p-crud-angular.component.css']
})
export class PCrudAngularComponent{

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
      path:'../../../../../assets/icon/php_Col.svg',
    },
  ]

}
