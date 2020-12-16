import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {ProductModel} from "../../../../core/models/product.model";
import {ProductService} from "../../../../core/services/product.service";
import {CategoryModel} from "../../../../core/models/category.model";
import {ModalOrderItemComponent} from "../modal-order-item/modal-order-item.component";
import {OrderItemModel} from "../../../../core/models/order-item.model";
import {ProductTitleModel} from "../../../../core/models/product-title.model";
import * as CONST from '../../../../core/constants';
import {CartModel} from "../../../../core/models/cart.model";
import {ModalCustomerInfoComponent} from "../modal-customer-info/modal-customer-info.component";
import {ModalBookingComponent} from "../modal-booking/modal-booking.component";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('tableEl') mdbTable: MdbTableDirective;
  modalRef: MDBModalRef;

  headElements: Array<string> = ['STT' ,'Name', 'Quantity' ,'Price', 'Detail'];
  elements: ProductTitleModel[] = [];
  txtName: string;
  txtCode: string;
  txtCategory: number;
  previous: any;
  categoryList: CategoryModel[];
  @Output() orderDetail = new EventEmitter<OrderItemModel>();

  constructor(private productService: ProductService,
              private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.getListProduct();
  }

  searchProduct() {
    const prev = this.mdbTable.getDataSource();
    if (!this.txtName || !this.txtCode || !this.txtCategory) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
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
  getListProduct() {
    this.productService.getListProduct().subscribe(data => {
      this.mdbTable.setDataSource(data);
      this.elements = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
      this.checkProduct();
    }, error => console.log(error));
    this.productService.getListCategory().subscribe(data => {
      this.categoryList = data;
    })
  }
  checkProduct() {
    const cart: CartModel = JSON.parse(localStorage.getItem(CONST.LocalStorage.CART));
    if (cart && cart.orderItem !=null) {
      cart.orderItem.forEach(value => {
        const elementIndex = this.elements.findIndex((elem: ProductTitleModel) => value.id === elem.id);
        if (elementIndex != null) {
          this.elements[elementIndex].products.forEach(product => {
            if (product.id === value.product.id) {
              product.status = 'NO';
              this.elements[elementIndex].products.length --;
            }
          })
          this.mdbTable.setDataSource(this.elements);
        }
      });
    }
  }
  detailProduct(prd: ProductTitleModel) {
    const elementIndex = this.elements.findIndex((elem: ProductTitleModel) => prd.id === elem.id);
    const modalOptions = {
      data: {
        productDetail: prd,
      }
    }
    this.modalRef = this.modalService.show(ModalOrderItemComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe((orderItem: OrderItemModel) => {
      prd.products.forEach(value => {
        if (value.id === orderItem.product.id) {
          value.status = 'NO';
          prd.products.length -=1;
        }
      })
      this.elements[elementIndex] = prd;
      this.mdbTable.setDataSource(this.elements);
      this.orderDetail.emit(orderItem);
    });
  }

}
