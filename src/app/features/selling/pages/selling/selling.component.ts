import {Component, OnInit} from '@angular/core';
import {OrderItemModel} from "../../../../core/models/order-item.model";
import {CartModel} from "../../../../core/models/cart.model";
import {ProductService} from "../../../../core/services/product.service";


@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit {
  cart: CartModel = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
     this.getCart();
  }

  onAddOrderItem(orderItem: OrderItemModel) {
    this.productService.addToCart(orderItem);
    this.getCart();
  }
  getCart() {
     this.cart = this.productService.getCart()
  }

}
