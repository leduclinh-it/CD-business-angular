import {NgModule} from "@angular/core";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { DashboardHeadComponent } from './components/dashboard-head/dashboard-head.component';

const routes: Routes = [
  {path: '', component: DashboardComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
  exports: [],
  declarations: [DashboardComponent, DashboardHeadComponent]
})
export class DashboardModule {}
