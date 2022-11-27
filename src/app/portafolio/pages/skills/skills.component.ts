import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  arraySkillsFe: any[] = [
    {
      img: '../../../../assets/Html5_Col.svg',
      description: 'HTML5'
    },
    {
      img: '../../../../assets/CSS3_Col.svg',
      description: 'CCS3',
    },
    {
      img: '../../../../assets/javascript_Col_.svg',
      description: 'JavaScript',
    },
    {
      img: '../../../../assets/typescript_Col.svg',
      description: 'TypeScript',
    },
    {
      img: '../../../../assets/angular_Col.svg',
      description: 'Angular',
    },
    {
      img: '../../../../assets/bootstrap-5_Col.svg',
      description: 'Bootstrap5',
    }
  ]
  arraySkillsBe: any[] = [
    {
      img: '../../../../assets/python_Col.svg',
      description: 'Python'
    },
    {
      img: '../../../../assets/mongodb_Col.svg',
      description: 'mongodb'
    },
    {
      img: '../../../../assets/java_Col.svg',
      description: 'Java'
    },
    {
      img: '../../../../assets/mysql_Col.svg',
      description: 'SQL'
    },
  ]
  arraySkillsO: any[] = [
    {
      img: '../../../../assets/figma_Col.svg',
      description: 'Figma'
    },
    {
      img: '../../../../assets/oracle_Col.svg',
      description: 'PL-SQL'
    },
    {
      img: '../../../../assets/nodejs_Col.svg',
      description: 'NodeJs'
    },
    {
      img: '../../../../assets/github_Col.svg',
      description: 'Github'
    }
  ]

  constructor() { }


}
