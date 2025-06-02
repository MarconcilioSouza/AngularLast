import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowladge = signal<IKnowLedge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento do HTML5'
    },
    {
      src: 'assets/icons/knowledge/python-brands.svg',
      alt: 'Ícone de conhecimento do Python'
    },
    {
      src: 'assets/icons/knowledge/database-solid.svg',
      alt: 'Ícone de conhecimento do DataBase'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento do Angular'
    }
    ,
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento do JavaScript'
    }
  ])
}
