import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { PascalCasePipe } from './pipes/pascal-case.pipe';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundPageComponent,
    MasterPageComponent,
    FormComponent,
    InputComponent,
    FirstLetterPipe,
    PascalCasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    InputComponent,
    FormComponent,
    FirstLetterPipe,
    PascalCasePipe
  ],
  providers: [ 
    HttpService
  ]
})
export class SharedModule { }
