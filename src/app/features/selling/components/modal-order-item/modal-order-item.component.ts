import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../../core/models/product.model";
import {Subject} from "rxjs";
import {DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MDBModalRef} from "angular-bootstrap-md";
import {ProductTitleModel} from "../../../../core/models/ProductTitle.model";
import {OrderItemModel} from "../../../../core/models/order-item.model";

@Component({
  selector: 'app-modal-order-item',
  templateUrl: './modal-order-item.component.html',
  styleUrls: ['./modal-order-item.component.scss']
})
export class ModalOrderItemComponent implements OnInit {
  public productDetail: ProductTitleModel;
  public saveButtonClicked: Subject<OrderItemModel> = new Subject<OrderItemModel>();
  dateCurrent = this.dataPipe.transform(new Date(), 'yyyy-MM-dd');
  orderItemForm: FormGroup;
  quantityError = false;
  days = 0;
  returnDate = new Date();
  productSelectedId: number;
  constructor(private dataPipe: DatePipe, private fb: FormBuilder,public modalRef: MDBModalRef) { }

  ngOnInit(): void {
    this.orderItemForm = this.fb.group({
        dateCurrent: ['', Validators.required],
        dateReturn: ['', Validators.required],
        price: ['', Validators.required],
        productId: ['', Validators.required]
    })
  }
  get f() {return this.orderItemForm.controls}


  onAddOrder() {
    let productDetail: ProductModel;
    this.productDetail.products.forEach(product => {
      if (this.f.productId.value == product.id) {
        productDetail = product;
        productDetail.name = this.productDetail.name;
      }
    })
    const orderItem: OrderItemModel = {
      id: this.productDetail.id,
      dateReturn: this.returnDate,
      price: this.f.price.value,
      dateCurrent: new Date(this.dateCurrent),
      product: productDetail
    }

    this.saveButtonClicked.next(orderItem)
    this.modalRef.hide();
  }
  onSelectDate(value) {
    const date = new Date(value.target.value);
    this.returnDate = date;
    const dateCurrent = new Date();
    let driftDay = date.getTime() - dateCurrent.getTime();
    const days = Math.floor(driftDay / (1000 * 60 * 60 * 24))+1;
    this.f.price.setValue(days * this.productDetail.price);
  }

}
