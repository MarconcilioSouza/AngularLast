import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Marconcilio Souza';
  public age = 16;
  public condition = this.age > 18 ? "Maior de idade" : "Menor de idade";
  public isDisable = true;
  public srcValue = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg63mY5s7XOPcvkUQInmzLxbp5xto1HqHo0V2wkn7Vx7LXwnGnH2WIHApQiXt7fy9qknBzRDPWB-SOq2tCMbFSeqpozkE1weh1emiE06QybhgeAaVS0V6cVnObCpCLuiKccmAmXxAmrmmA/s1600/cocoroca.jpg";
  public isTextDecoration = this.age > 18 ? 'underline' : 'none';
  constructor() {
    setTimeout(() => {
      this.name = "João e Maria";
    }, 1000);
  }
  public increment_age() {
    return this.age++;
  }
  public decrement_age() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
