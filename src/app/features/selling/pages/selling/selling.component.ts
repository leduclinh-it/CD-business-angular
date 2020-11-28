import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderItemModel} from "../../../../core/models/order-item.model";
import {CartModel} from "../../../../core/models/cart.model";
import {ProductService} from "../../../../core/services/product.service";
import {DatePipe} from "@angular/common";
import * as CONST from '../../../../core/constants';
import {OrderModel} from "../../../../core/models/Order.model";
import {CustomerService} from "../../../../core/services/customer.service";
import {CustomerModel} from "../../../../core/models/customer.model";
import {OrderService} from "../../../../core/services/order.service";
import {ProductListComponent} from "../../components/product-list/product-list.component";
import {MDBModalRef, MDBModalService} from "angular-bootstrap-md";
import {ModalCustomerInfoComponent} from "../../components/modal-customer-info/modal-customer-info.component";

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit {
  cart: CartModel = null;
  dateCurrent = this.dataPipe.transform(new Date(), 'yyyy-MM-dd');
  employee: string;
  codeCustomer: string;
  customer: CustomerModel;
  customerName: string;
  customerError = false;
  error = false;
  orders: OrderModel[];
  modalRef: MDBModalRef;

  @ViewChild(ProductListComponent) listProductComponent: ProductListComponent;
  constructor(private productService: ProductService,
              private dataPipe: DatePipe,
              private customerService: CustomerService,
              private orderService: OrderService,
              private modalService: MDBModalService) { }

  ngOnInit(): void {
     this.getCart();
  }

  onAddOrderItem(orderItem: OrderItemModel) {
    if (this.cart) {
      this.cart.orderItem.push(orderItem);
    } else {
      this.cart = {
         orderItem: [],
         total: 0
      }
      this.cart.orderItem.push(orderItem);
      this.cart.total = orderItem.price;
    }
    this.productService.addToCart(this.cart);
    this.error = false;
    this.getCart();
  }
  getCart() {
    this.cart = this.productService.getCart();
    if (this.cart) {
      this.cart.total = 0;
      this.cart.orderItem.forEach(item => {
        this.cart.total += item.price;
      })
    }
  }
  onCancel() {
    localStorage.removeItem(CONST.LocalStorage.CART);
    this.getCart();
  }
  onRemove(index: number) {
    this.cart.orderItem.splice(index, 1);
    this.productService.addToCart(this.cart);
    this.listProductComponent.getListProduct();
    this.getCart();
  }
  onCreateOrder() {
    const createOrderReq: OrderModel = {
      total: this.cart.total,
      orderItems: this.cart.orderItem,
      customer: this.customer.id,
      dateCurrent: new Date(),
      status: 'ACTIVE',
      employee: this.employee
    }
    if (this.cart.orderItem.length != 0) {
      this.error = false;
      this.orderService.createOrder(createOrderReq).subscribe(res => {
        localStorage.removeItem(CONST.LocalStorage.CART);
        this.getCart();
        this.codeCustomer = null;
        this.employee = null;
        this.customerName = null;
      }, error => console.log(error))
    } else {
      this.error = true;
    }
  }
  getCustomerByCode() {
    this.customerService.getCustomerByCode(this.codeCustomer).subscribe(res => {
      this.customer = res.customer;
      this.orders = res.orders;
      console.log(this.orders)
      if (this.customer.code !=null) {
        this.customerName = this.customer.fullName;
        this.customerError = false;
      } else {
        this.customerName = null;
        this.customerError = true;
      }
    }, error => {
      console.log(error)
    })
  }

  onDetailCustomer() {
    const modalOptions = {
      data: {
        customer: this.customer,
        orders: this.orders
      },
      class: 'modal-lg'

    }

    this.modalRef = this.modalService.show(ModalCustomerInfoComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe( value =>{
      console.log(value);
      this.getCustomerByCode();
      this.listProductComponent.getListProduct();
    })
  }


}
