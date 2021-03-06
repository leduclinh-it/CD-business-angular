import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { ModalCustomerComponent } from './components/modal-customer/modal-customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ModalCustomerDetailComponent } from './components/modal-customer-detail/modal-customer-detail.component';

const routes: Routes = [
  {path: '', component: ListCustomerComponent}
]
@NgModule({
  declarations: [ListCustomerComponent, ModalCustomerComponent, ModalCustomerDetailComponent],
  imports: [SharedModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class CustomerModule {}
