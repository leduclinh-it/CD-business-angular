import {Component, OnInit, ViewChild} from '@angular/core';
import {MDBModalService, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {OrderModel} from "../../../../core/models/Order.model";
import {OrderItemModel} from "../../../../core/models/order-item.model";
import {CustomerModel} from "../../../../core/models/customer.model";
import {Subject} from "rxjs";
import {OrderService} from "../../../../core/services/order.service";
import {UpdateOrderRequestModel} from "../../../../core/models/updateOrderRequest.model";
import {CustomerService} from "../../../../core/services/customer.service";

@Component({
  selector: 'app-modal-customer-detail',
  templateUrl: './modal-customer-detail.component.html',
  styleUrls: ['./modal-customer-detail.component.scss']
})
export class ModalCustomerDetailComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  headElements: Array<string> = ['STT', 'status', 'date', 'employee' ,'total'];
  elements: OrderModel[];
  products: OrderItemModel[]
  orderId: number
  orderShow= true;
  public customer: CustomerModel;
  public orders: OrderModel[];
  public saveButtonClicked: Subject<any> = new Subject<any>();
  constructor(private orderService: OrderService, private customerServer: CustomerService, private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.elements = this.orders;
  }
  getProducts(productList: OrderItemModel[], id: number) {
    this.products = productList;
    productList.forEach(product => {
      if (product) {
        let driftDay = new Date(product.dateReturn).getTime() - new Date(product.dateReturn).getTime();
        const days = Math.floor(driftDay / (1000 * 60 * 60 * 24))+1;
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
      product.status = 'NO'
      this.saveButtonClicked.next('ok');
    }, error => console.log(error))

  }

  deleteCustomer(id: number) {
    this.customerServer.deleteCustomer(id).subscribe(res => {
      this.modalService.hide(1);
      this.saveButtonClicked.next('ok');
    }, error => {
      this.modalService.hide(1);
      this.saveButtonClicked.next('ok');
    })

  }

}
