import { Component, OnInit } from '@angular/core';
import {CustomerModel} from "../../../../core/models/customer.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-modal-customer-info',
  templateUrl: './modal-customer-info.component.html',
  styleUrls: ['./modal-customer-info.component.scss']
})
export class ModalCustomerInfoComponent implements OnInit {
  public customer: CustomerModel;
  public saveButtonClicked: Subject<CustomerModel> = new Subject<CustomerModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
