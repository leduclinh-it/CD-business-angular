import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import * as CONST from '../constants';
import {OrderModel} from "../models/order.model";
import {Observable} from "rxjs";
import {UpdateOrderRequestModel} from "../models/update-order-request.model";
@Injectable({
  providedIn: 'root'
})
export class OrderService extends CommonService{

  createOrder(orderRequest: OrderModel): Observable<OrderModel> {
    return this.post(CONST.ApiUrl.EMPLOYEE.CREATE_ORDER, orderRequest);
  }

  updateOrder(updateOrderRequest: UpdateOrderRequestModel): Observable<OrderModel> {
    return this.post(CONST.ApiUrl.EMPLOYEE.UPDATE_ORDER, updateOrderRequest);
  }

}
