import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {ProductModel} from "../../../../core/models/product.model";
import {ProductService} from "../../../../core/services/product.service";
import {CategoryModel} from "../../../../core/models/category.model";
import {ModalOrderItemComponent} from "../modal-order-item/modal-order-item.component";
import {OrderItemModel} from "../../../../core/models/order-item.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('tableEl') mdbTable: MdbTableDirective;
  modalRef: MDBModalRef;

  headElements: Array<string> = ['STT' ,'Name', 'Code' ,'Price', 'Quantity', 'Detail'];
  elements: ProductModel[] = [];
  txtName: string;
  txtCode: string;
  txtCategory: number;
  previous: any;
  categoryList: CategoryModel[];
  @Output() orderDetail = new EventEmitter<OrderItemModel>();
  constructor(private productService: ProductService,private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(data => {
      this.mdbTable.setDataSource(data);
      this.elements = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    }, error => console.log(error));
    this.productService.getListCategory().subscribe(data => {
      this.categoryList = data;
    })
  }

  searchProduct() {
    const prev = this.mdbTable.getDataSource();
    if (!this.txtName || !this.txtCode || !this.txtCategory) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.txtCode) {
      this.elements = this.mdbTable.filterLocalDataByFields(this.txtCode,['code']);
      this.mdbTable.setDataSource(prev);
    }
    if (this.txtName) {
      this.elements = this.mdbTable.filterLocalDataByFields(this.txtName,['name']);
      this.mdbTable.setDataSource(prev);
    }
    if (this.txtCategory) {
      this.elements = this.elements.filter(item => {
        return item.category.id == this.txtCategory;
      })
      this.mdbTable.setDataSource(prev);
    }
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
  }

  detailProduct(prd: ProductModel) {
    const elementIndex = this.elements.findIndex((elem: ProductModel) => prd.id === elem.id);

    const modalOptions = {
      data: {
        productDetail: prd,
      }
    }
    this.modalRef = this.modalService.show(ModalOrderItemComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe((orderItem: OrderItemModel) => {
      this.elements[elementIndex].quantity -= orderItem.quantity;
      this.orderDetail.emit(orderItem);
    });
  }

}
