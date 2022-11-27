import { Component } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component {

  arr : any[] = [
    {
      path:'../../../../../assets/html5.svg',
    },
    {
      path:'../../../../../assets/css3.svg',
    },
    {
      path:'../../../../../assets/typescript2.svg',
    },
    {
      path:'../../../../../assets/js.svg',
    },
    {
      path:'../../../../../assets/github.svg',
    }
  ]

  constructor() { }
}

