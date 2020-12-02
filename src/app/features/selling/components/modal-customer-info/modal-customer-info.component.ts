import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerModel} from "../../../../core/models/customer.model";
import {Subject} from "rxjs";
import {OrderModel} from "../../../../core/models/Order.model";
import {MdbTablePaginationComponent} from "angular-bootstrap-md";
import {OrderItemModel} from "../../../../core/models/order-item.model";
import {UpdateOrderRequestModel} from "../../../../core/models/updateOrderRequest.model";
import {OrderService} from "../../../../core/services/order.service";

@Component({
  selector: 'app-modal-customer-info',
  templateUrl: './modal-customer-info.component.html',
  styleUrls: ['./modal-customer-info.component.scss']
})
export class ModalCustomerInfoComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  headElements: Array<string> = ['STT', 'status', 'date', 'employee' ,'total'];
  elements: OrderModel[];
  products: OrderItemModel[]
  orderId: number
  public customer: CustomerModel;
  public orders: OrderModel[];
  public saveButtonClicked: Subject<any> = new Subject<any>();

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.elements = this.orders;
  }
  getProducts(productList: OrderItemModel[], id: number) {
    this.products = productList;
    productList.forEach(product => {
      if (product) {
        let driftDay = new Date(product.dateReturn).getTime() - new Date(product.dateReturn).getTime();
        const days = Math.floor(driftDay / (1000 * 60 * 60 * 24))+1;
        console.log(days);
      }
    })
    this.orderId = id;
  }

  updateOrder(product: OrderItemModel) {
    const updateOrder: UpdateOrderRequestModel = {
      customerId: this.customer.id,
      productId: product.product.id,
      orderId: this.orderId,
      orderItemId: product.id,
      debt: null
    }
    this.orderService.updateOrder(updateOrder).subscribe(value => {
      product.product.status = 'ACTIVE'
      this.saveButtonClicked.next('ok');
    }, error => console.log(error))

  }

}
