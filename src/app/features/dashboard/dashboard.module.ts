import {NgModule} from "@angular/core";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: DashboardComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
