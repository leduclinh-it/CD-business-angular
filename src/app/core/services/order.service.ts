import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import * as CONST from '../constants';
import {OrderModel} from "../models/Order.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class OrderService extends CommonService{

  createOrder(orderRequest: OrderModel): Observable<OrderModel> {
    return this.pos(CONST.ApiUrl.EMPLOYEE.CREATE_ORDER, orderRequest);
  }

}
