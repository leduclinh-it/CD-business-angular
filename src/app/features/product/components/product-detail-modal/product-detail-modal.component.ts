import { Component, OnInit } from '@angular/core';
import {ProductTitleModel} from "../../../../core/models/product-title.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../core/services/product.service";
import {CategoryModel} from "../../../../core/models/category.model";
import {CreateProductModel} from "../../../../core/models/create-product.model";
import {MDBModalService} from "angular-bootstrap-md";
import {Subject} from "rxjs";

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss']
})
export class ProductDetailModalComponent implements OnInit {

  public productTitleDetail: ProductTitleModel;
  productForm: FormGroup;
  categoryList: CategoryModel[];
  error = false;
  saveButtonClicked: Subject<any> = new Subject<any>();
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.productService.getListCategory().subscribe(data => {
      this.categoryList = data;
    })
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      code: [''],
      categoryId: ['', Validators.required],
      description: ['']
    })
    this.initProduct();
  }
  initProduct() {
    this.productForm.patchValue({
      name: this.productTitleDetail.name,
      price: this.productTitleDetail.price+'.000đ',
      categoryId: this.productTitleDetail.category.id,
    })
  }
  get f() {return this.productForm.controls}
  onAddProduct() {
    const createProduct: CreateProductModel = {
      productTitleId: this.productTitleDetail.id,
      code: this.f.code.value
    }
    this.productService.createProduct(createProduct).subscribe(res => {
      if (res!=null) {
        this.error = false;
        this.saveButtonClicked.next('');
        return this.modalService.hide(1);
      }
      else {
        this.error = true;
      }
    })
  }
  onRemoveProduct(id: number, i: number) {
    this.productService.removeProduct(id).subscribe(res => {
      if (res == true) {
        this.productTitleDetail.products.splice(i,1);
      }
    })
  }
  onRemoveProductTitle(id: number) {
    this.productService.removeProductTitle(id).subscribe(res => {
      this.modalService.hide(1);
      this.saveButtonClicked.next('');
    })
  }

}
