import {NgModule} from "@angular/core";
import { SellingComponent } from './pages/selling/selling.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ModalOrderItemComponent } from './components/modal-order-item/modal-order-item.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: SellingComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, ReactiveFormsModule,],
  declarations: [SellingComponent, ProductListComponent, ModalOrderItemComponent],
  exports: [],
  entryComponents: [
    ModalOrderItemComponent
  ]
})
export class SellingModule {}
