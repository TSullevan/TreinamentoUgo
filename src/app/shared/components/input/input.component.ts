import { Component, Input } from '@angular/core';
import { InputModel } from './input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() model: InputModel = new InputModel();

  constructor() {
    
  }

}
