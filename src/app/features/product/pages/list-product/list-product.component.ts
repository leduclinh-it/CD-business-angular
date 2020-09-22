import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {ProductService} from "../../../../core/services/product.service";
import {ProductModel} from "../../../../core/models/product.model";

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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(data => {
      this.mdbTable.setDataSource(data);
      this.elements = this.mdbTable.getDataSource();
    }, error => console.log(error))
  }

}
