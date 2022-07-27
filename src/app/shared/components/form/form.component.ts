import { Component, OnInit } from '@angular/core';
import { InputModel } from '../input/input.model';
import { FormModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public input1: InputModel = new InputModel();
  public input2: InputModel = new InputModel();

  public model: FormModel = new FormModel();

  constructor() {
    this.input1.title = "Hugo";
    this.input1.placeHolder = "Palmeiras não tem mundial";
    this.input1.required = true;
    
    this.input2.title = "Nicolau";
    this.input2.placeHolder = "Palmeiras tem mundial!";

    this.model.inputs.push(this.input1);
    this.model.inputs.push(this.input2);
   }

  ngOnInit(): void {
  }

}
