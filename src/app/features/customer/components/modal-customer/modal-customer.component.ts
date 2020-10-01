import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../core/services/customer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MDBModalRef} from "angular-bootstrap-md";
import {CustomerModel} from "../../../../core/models/customer.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrls: ['./modal-customer.component.scss']
})
export class ModalCustomerComponent implements OnInit {

  customerForm: FormGroup;
  code: string;
  public saveButtonClicked: Subject<CustomerModel> = new Subject<CustomerModel>();

  constructor(private customerService: CustomerService, private fb: FormBuilder, public modalRef: MDBModalRef) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required,Validators.pattern("[0-9]{10}")]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get f() { return this.customerForm.controls}

  createCustomer() {
      let customer: CustomerModel = {
        fullName: this.f.fullName.value,
        email: this.f.email.value,
        phone: this.f.phone.value,
        address: this.f.address.value
      }
      this.customerService.createCustomer(customer).subscribe(res => {
        customer.code = res.code;
        this.saveButtonClicked.next(customer)
        this.code = res.code;
      })
  }

}
