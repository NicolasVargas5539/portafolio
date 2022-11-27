import { Component } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component {

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
      path:'../../../../../assets/javascript_Col_.svg',
    }
  ]

  constructor() { }
}

