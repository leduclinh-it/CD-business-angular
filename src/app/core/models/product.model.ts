import {CategoryModel} from "./category.model";

export interface ProductModel {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  code: string;
  category: CategoryModel;
}
