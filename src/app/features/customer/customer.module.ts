import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';

const routes: Routes = [
  {path: '', component: ListCustomerComponent}
]
@NgModule({
  declarations: [ListCustomerComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class CustomerModule {}
