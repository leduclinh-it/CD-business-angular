import {ProductModel} from "./product.model";

export interface OrderItemModel {
  id?: number;
  product: ProductModel;
  dateCurrent: Date;
  dateReturn: Date;
  price: number;
  status: string;
}

