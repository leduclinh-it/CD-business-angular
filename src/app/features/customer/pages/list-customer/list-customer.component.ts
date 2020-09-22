import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {CustomerModel} from "../../../../core/models/customer.model";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('tableEl') mdbTable: MdbTableDirective;
  headElements: Array<string> = ['STT' ,'Full Name', 'Email', 'Phone', 'Address', 'Code', 'Debit' ,'Edit'];
  elements: CustomerModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
