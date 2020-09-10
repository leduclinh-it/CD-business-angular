import {NgModule} from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {CardsModule} from "angular-bootstrap-md";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {path: '', component: HomeComponent}
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CardsModule,
    SharedModule
  ],
  exports: []
})
export class HomeModule {}
