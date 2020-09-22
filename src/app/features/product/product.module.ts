import {NgModule} from "@angular/core";
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ModalAddProductComponent } from './components/modal-add-product/modal-add-product.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {path: '', component: ListProductComponent}
]
@NgModule({
  declarations: [ListProductComponent, ProductItemComponent, ModalAddProductComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: []
})
export class ProductModule {}
