import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../../core/models/product.model";
import {Subject} from "rxjs";
import {OrderItemModel} from "../../../../core/models/order-item.model";
import {DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MDBModalRef} from "angular-bootstrap-md";

@Component({
  selector: 'app-modal-order-item',
  templateUrl: './modal-order-item.component.html',
  styleUrls: ['./modal-order-item.component.scss']
})
export class ModalOrderItemComponent implements OnInit {
  public productDetail: ProductModel;
  public saveButtonClicked: Subject<OrderItemModel> = new Subject<OrderItemModel>();
  dateCurrent = this.dataPipe.transform(new Date(), 'yyyy-MM-dd');
  orderItemForm: FormGroup;
  quantityError = false;

  constructor(private dataPipe: DatePipe, private fb: FormBuilder,public modalRef: MDBModalRef) { }

  ngOnInit(): void {
    this.orderItemForm = this.fb.group({
        dateCurrent: ['', Validators.required],
        dateReturn: ['', Validators.required],
        quantity: ['', [Validators.required]],
        price: ['', Validators.required],
    })
  }
  get f() {return this.orderItemForm.controls}

  validateQuantity() {
    if (this.f.quantity.value > this.productDetail.quantity) {
      this.quantityError = true;
    } else {
      this.quantityError = false;
      this.f.price.setValue( this.f.quantity.value * this.productDetail.price);
    }
  }
  onAddOrder() {
    const orderItem: OrderItemModel = {
      product: this.productDetail,
      dateCurrent: this.dateCurrent,
      price: this.f.price.value,
      quantity: this.f.quantity.value,
      returnDate: this.f.dateReturn.value
    }
    this.saveButtonClicked.next(orderItem)
    this.modalRef.hide();
  }

}
