import {CustomerModel} from "./customer.model";
import {OrderItemModel} from "./order-item.model";

export interface OrderModel {
  id?: number,
  customer: string,
  employee: string,
  dateCurrent: Date,
  total: number,
  status: string,
  orderItems: OrderItemModel[]
}
