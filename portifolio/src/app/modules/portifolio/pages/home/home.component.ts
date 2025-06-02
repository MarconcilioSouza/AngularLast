import { Component } from '@angular/core';
import { HearderComponent } from '../../components/hearder/hearder.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HearderComponent, KnowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
