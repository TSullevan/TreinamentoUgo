import { Component, OnInit } from '@angular/core';
import { InputModel } from '../input/input.model';
import { ColModel, FormModel, RowModel } from './form.model';

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

    this.model
      .addRow(new RowModel()
        .addCol(new ColModel().setInput(new InputModel('Enzo11')))
        .addCol(new ColModel().setInput(new InputModel('Enzo12'))))
      .addRow(new RowModel()
        .addCol(new ColModel().setInput(new InputModel('Enzo21').setMaskMethod(this.cellPhoneMask)))
        .addCol(new ColModel().setInput(new InputModel('Enzo22')))
        .addCol(new ColModel().setInput(new InputModel('Enzo23'))));
   }

  ngOnInit(): void {
  }

  private cellPhoneMask(text: string): string {
    let numbers: string = text.replace(/\D/g, "");
    let telephone = '';
    if (numbers.length > 0) {
      telephone = '(' + numbers;
    }
    if (numbers.length > 2) {
      telephone = telephone.slice(0, 3) + ')' + telephone.slice(3);
    }
    if (numbers.length > 2) {
      telephone = telephone.slice(0, 4) + ' ' + telephone.slice(4);
    }
    if (numbers.length > 3) {
      telephone = telephone.slice(0, 6) + ' ' + telephone.slice(6);
    }
    if (numbers.length > 7) {
      telephone = telephone.slice(0, 11) + '-' + telephone.slice(11);
    }
    if (numbers.length > 11) {
      telephone = telephone.slice(0, 16);
    }
    return telephone;
  }

}
