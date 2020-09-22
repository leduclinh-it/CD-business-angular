import {NgModule} from '@angular/core';
import {MDBBootstrapModule, MDBModalRef} from 'angular-bootstrap-md';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [NotFoundComponent],
  providers: [DatePipe, MDBModalRef],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  exports: [
    MDBBootstrapModule,
    CommonModule,
    FormsModule,
    DatePipe
  ]
})
export class SharedModule {}
