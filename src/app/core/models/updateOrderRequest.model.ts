export interface UpdateOrderRequestModel {
  customerId: number;
  productId: number;
  orderId: number;
  orderItemId: number;
  debt?: number;
}
