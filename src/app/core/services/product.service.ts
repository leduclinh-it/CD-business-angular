import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Observable} from "rxjs";
import * as CONST from '../constants';
import {CategoryModel} from "../models/category.model";
import {ProductTitleModel} from "../models/product-title.model";
import {CartModel} from "../models/cart.model";
import {CreateProductTitleRequest} from "../models/create-product-title-request";
import {CreateProductModel} from "../models/create-product.model";
import {ProductModel} from "../models/product.model";

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
  createProductTitle(createProductRequest: CreateProductTitleRequest): Observable<any> {
    return this.post(CONST.ApiUrl.ADMIN.CREATE_PRODUCT_TITLE, createProductRequest);
  }
  createProduct(createProduct: CreateProductModel): Observable<ProductModel> {
    return this.post(CONST.ApiUrl.ADMIN.CREATE_PRODUCT, createProduct);
  }
  removeProduct(id: number){
    return this.post(CONST.ApiUrl.ADMIN.DELETE_PRODUCT+`?id=${id}`,null);
  }
  removeProductTitle(id: number){
    return this.post(CONST.ApiUrl.ADMIN.DELETE_PRODUCT_TITLE+`?id=${id}`,null);
  }
}
