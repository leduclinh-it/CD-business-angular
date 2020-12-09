import {NgModule} from "@angular/core";
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ModalAddProductComponent } from './components/modal-add-product/modal-add-product.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { ModalProductInfoComponent } from './components/modal-product-info/modal-product-info.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: ListProductComponent}
]
@NgModule({
  declarations: [ListProductComponent, ProductItemComponent, ModalAddProductComponent, ModalProductInfoComponent],
  imports: [RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
  exports: []
})
export class ProductModule {}
