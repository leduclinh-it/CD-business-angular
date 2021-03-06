import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FeatureModule} from './features/feature.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    CoreModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
