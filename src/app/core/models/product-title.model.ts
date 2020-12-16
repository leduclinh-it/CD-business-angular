import {CategoryModel} from "./category.model";
import {ProductModel} from "./product.model";

export interface ProductTitleModel {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: CategoryModel;
  products: ProductModel[];
  quantity: number;
}
