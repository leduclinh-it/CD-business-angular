import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './main-layout/footer/footer.component';
import {AppRoutes} from './feature.routing';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    AppRoutes,
    BrowserModule
  ]
})
export class FeatureModule {}
