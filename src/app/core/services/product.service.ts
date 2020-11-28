import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Observable} from "rxjs";
import * as CONST from '../constants';
import {CategoryModel} from "../models/category.model";
import {OrderItemModel} from "../models/order-item.model";
import {ProductTitleModel} from "../models/ProductTitle.model";
import {CartModel} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CommonService{

  getListProduct(): Observable<ProductTitleModel[]> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_LIST_PRODUCT);
  }
  getListCategory(): Observable<CategoryModel[]> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_LIST_CATEGORY);
  }
  addToCart(cart: CartModel) {
    this.saveLocalStorage(CONST.LocalStorage.CART, cart);
  }
  getCart(){
     return this.getLocalStorage(CONST.LocalStorage.CART);
  }
}
