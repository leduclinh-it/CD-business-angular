import {ProductModel} from "./product.model";

export interface OrderItemModel {
  product: ProductModel;
  quantity: number;
  dateCurrent: string;
  returnDate: string;
  price: number;
}
