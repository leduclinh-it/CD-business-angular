import {OrderItemModel} from "./order-item.model";

export interface CartModel {
  orderItem: OrderItemModel[];
  total: number;
}
