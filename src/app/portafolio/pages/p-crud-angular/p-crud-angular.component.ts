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
      path:'../../../../../assets/Html5_Col.svg',
    },
    {
      path:'../../../../../assets/CSS3_Col.svg',
    },
    {
      path:'../../../../../assets/typescript_Col.svg',
    },
    {
      path:'../../../../../assets/php_Col.svg',
    },
  ]

}
