import {CustomerModel} from "./customer.model";
import {OrderModel} from "./Order.model";

export interface CustomerResponseByCode {
  customer: CustomerModel,
  orders: OrderModel[]
}
