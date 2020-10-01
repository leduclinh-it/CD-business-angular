import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {ProductService} from "../../../../core/services/product.service";
import {ProductModel} from "../../../../core/models/product.model";
import {CategoryModel} from "../../../../core/models/category.model";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('tableEl') mdbTable: MdbTableDirective;
  headElements: Array<string> = ['STT', 'Image' ,'Name', 'Price', 'Quantity', 'Edit'];
  elements: ProductModel[] = [];
  txtName: string;
  txtCode: string;
  txtCategory: number;
  previous: any;
  categoryList: CategoryModel[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(data => {
      this.mdbTable.setDataSource(data);
      this.previous = this.mdbTable.getDataSource();
      this.elements = this.mdbTable.getDataSource();
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


}
