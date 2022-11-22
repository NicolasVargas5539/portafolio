import { Component } from '@angular/core';

@Component({
  selector: 'app-cards1',
  templateUrl: './cards1.component.html',
  styleUrls: ['./cards1.component.css']
})
export class Cards1Component {
  array: any[] = [
    {
      path: 'arraySkillsFe',
      name: 'Front-End'
    },
    {
      path: 'arraySkillsBe',
      name: 'Back-End'
    },
    {
      path: 'arraySkillsO',
      name: 'Otras Tecnologías'
    }
  ]
  arraySkillsFe: any[] = [
    {
      img: '../../../../assets/html5.svg',
      description: 'HTML5'
    },
    {
      img: '../../../../assets/css3.svg',
      description: 'CCS3',
    },
    {
      img: '../../../../assets/js.svg',
      description: 'JavaScript',
    },
    {
      img: '../../../../assets/TypeScript.svg',
      description: 'TypeScript',
    },
    {
      img: '../../../../assets/angular.svg',
      description: 'Angular',
    },
    {
      img: '../../../../assets/bootstrap.svg',
      description: 'Bootstrap5',
    }
  ]
  arraySkillsBe: any[] = [
    {
      img: '../../../../assets/python.svg',
      description: 'Python'
    },
    {
      img: '../../../../assets/php.svg',
      description: 'PHP'
    },
    {
      img: '../../../../assets/mongodb.svg',
      description: 'mongodb'
    },
    {
      img: '../../../../assets/java.svg',
      description: 'Java'
    },
    {
      img: '../../../../assets/slq.svg',
      description: 'SQL'
    },
  ]
  arraySkillsO: any[] = [
    {
      img: '../../../../assets/figma.svg',
      description: 'Figma'
    },
    {
      img: '../../../../assets/oracle.svg',
      description: 'PL-SQL'
    },
    {
      img: '../../../../assets/node.svg',
      description: 'NodeJs'
    },
    {
      img: '../../../../assets/github.svg',
      description: 'Github'
    }
  ]
  constructor() { }

}
