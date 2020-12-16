import {CustomerModel} from "./customer.model";
import {OrderModel} from "./order.model";

export interface CustomerResponseByCodeModel {
  customer: CustomerModel,
  orders: OrderModel[]
}
