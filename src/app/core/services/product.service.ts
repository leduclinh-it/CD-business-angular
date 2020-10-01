import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import * as CONST from '../constants';
import {CategoryModel} from "../models/category.model";
import {OrderItemModel} from "../models/order-item.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CommonService{

  getListProduct(): Observable<ProductModel[]> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_LIST_PRODUCT);
  }
  getListCategory(): Observable<CategoryModel[]> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_LIST_CATEGORY);
  }
  addToCart(orderItem: OrderItemModel) {
    this.saveLocalStorage(CONST.LocalStorage.CART, orderItem);
  }
  getCart(){
     return this.getLocalStorage(CONST.LocalStorage.CART);
  }
}
