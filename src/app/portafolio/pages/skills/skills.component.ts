import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  arraySkillsFe: any[] = [
    {
      img: '../../../../assets/icon/Html5_Col.svg',
      description: 'HTML5'
    },
    {
      img: '../../../../assets/icon/CSS3_Col.svg',
      description: 'CCS3',
    },
    {
      img: '../../../../assets/icon/javascript_Col_.svg',
      description: 'JavaScript',
    },
    {
      img: '../../../../assets/icon/typescript_Col.svg',
      description: 'TypeScript',
    },
    {
      img: '../../../../assets/icon/angular_Col.svg',
      description: 'Angular',
    },
    {
      img: '../../../../assets/icon/bootstrap-5_Col.svg',
      description: 'Bootstrap5',
    }
  ]
  arraySkillsBe: any[] = [
    {
      img: '../../../../assets/icon/python_Col.svg',
      description: 'Python'
    },
    {
      img: '../../../../assets/icon/mongodb_Col.svg',
      description: 'mongodb'
    },
    {
      img: '../../../../assets/icon/java_Col.svg',
      description: 'Java'
    },
    {
      img: '../../../../assets/icon/mysql_Col.svg',
      description: 'SQL'
    },
  ]
  arraySkillsO: any[] = [
    {
      img: '../../../../assets/icon/figma_Col.svg',
      description: 'Figma'
    },
    {
      img: '../../../../assets/icon/oracle_Col.svg',
      description: 'PL-SQL'
    },
    {
      img: '../../../../assets/icon/nodejs_Col.svg',
      description: 'NodeJs'
    },
    {
      img: '../../../../assets/icon/github_Col.svg',
      description: 'Github'
    }
  ]

  constructor() { }


}
