import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Observable} from "rxjs";
import {CustomerModel} from "../models/customer.model";
import * as CONST from "../constants";
import {CustomerResponseByCodeModel} from "../models/customer-response-by-code.model";
@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CommonService{

  getListCustomer(): Observable<CustomerModel[]> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_LIST_CUSTOMER);
  }

  createCustomer(customer: CustomerModel){
    return this.post(CONST.ApiUrl.EMPLOYEE.CREATE_CUSTOMER, customer);
  }

  getCustomerByCode(code: String): Observable<CustomerResponseByCodeModel> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_CUSTOMER_BY_CODE + `?code=${code}`)
  }

  getCustomerById(id: number): Observable<CustomerModel> {
    return this.get(CONST.ApiUrl.EMPLOYEE.GET_CUSTOMER_BY_ID+ `?id=${id}`);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.post(CONST.ApiUrl.ADMIN.DELETE_CUSTOMER+`?id=${id}`,null);
  }
}
