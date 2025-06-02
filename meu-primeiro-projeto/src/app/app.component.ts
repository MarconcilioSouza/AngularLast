import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewComponent } from "./components/template/template-deferrable-view/template-deferrable-view.component";
import { SignalsComponent } from "./components/signals/signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SignalsComponent
],
  template: `
  <h1>Curso de Angular</h1>
  <!-- <app-new /> -->
  <!-- <app-template-binding /> -->
  <!-- <app-template-variables /> -->
   <!-- <app-template-control-flow /> -->
   <!-- <app-template-deferrable-view /> -->
  <app-signals />
  `,
})
export class AppComponent {
  title = 'Meu Primeiro Projeto';
}
