import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundPageComponent,
    MasterPageComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    InputComponent,
    FormComponent
  ]
})
export class SharedModule { }
