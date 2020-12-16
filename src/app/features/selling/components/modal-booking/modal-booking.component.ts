import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../core/services/customer.service";
import {CustomerModel} from "../../../../core/models/customer.model";
import {BookingService} from "../../../../core/services/booking.service";
import {CreateBookingModel} from "../../../../core/models/create-booking.model";
import {ProductModel} from "../../../../core/models/product.model";
import {MDBModalService} from "angular-bootstrap-md";

@Component({
  selector: 'app-modal-booking',
  templateUrl: './modal-booking.component.html',
  styleUrls: ['./modal-booking.component.scss']
})
export class ModalBookingComponent implements OnInit {

  codeCustomer: string
  customer: CustomerModel;
  customerName: string
  customerError = false
  product: ProductModel;
  constructor(private customerService: CustomerService,
              private bookingService: BookingService,
              private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  getCustomerByCode() {
    this.customerService.getCustomerByCode(this.codeCustomer).subscribe(res => {
      this.customer = res.customer;
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
  };
  onCreateBooking() {
    const createBooking: CreateBookingModel = {
      product: this.product.id,
      customer: this.customer.id
    }
    this.bookingService.createBooking(createBooking).subscribe(res => {
      this.modalService.hide(2);
    })
  }
}
