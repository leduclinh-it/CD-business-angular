import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Observable} from "rxjs";
import {CustomerModel} from "../models/customer.model";
import * as CONST from "../constants";
@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CommonService{

  getListCustomer(): Observable<CustomerModel[]> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_LIST_CUSTOMER);
  }

  createCustomer(customer: CustomerModel){
    return this.pos(CONST.ApiUrl.EMPLOYEE.CREATE_CUSTOMER, customer);
  }

  getCustomerByCode(code: String): Observable<CustomerModel> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_CUSTOMER_BY_CODE + `?code=${code}`)
  }

  getCustomerById(id: number): Observable<CustomerModel> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_CUSTOMER_BY_ID+ `?id=${id}`);
  }
}
