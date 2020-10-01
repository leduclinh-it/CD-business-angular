import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MDBModalRef,
  MDBModalService,
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import {CustomerModel} from "../../../../core/models/customer.model";
import {CustomerService} from "../../../../core/services/customer.service";
import {ModalCustomerComponent} from "../../components/modal-customer/modal-customer.component";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('tableEl') mdbTable: MdbTableDirective;
  modalRef: MDBModalRef;
  headElements: Array<string> = ['STT' ,'Họ vè tên', 'Email', 'Số điện thoại', 'Địa chỉ', 'Mã khách hàng', 'Công nợ' ,'Chi tiết'];
  elements: CustomerModel[] = [];
  constructor(private customerService: CustomerService,private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.customerService.getListCustomer().subscribe(res => {
      this.mdbTable.setDataSource(res);
      this.elements = this.mdbTable.getDataSource();
    })
  }
  onCreateCustomer() {
    this.modalRef = this.modalService.show(ModalCustomerComponent);
    this.modalRef.content.saveButtonClicked.subscribe((customer: CustomerModel) => {
      console.log(customer);
      this.elements.push(customer);
      this.mdbTable.setDataSource(this.elements);

    })
  }

}
