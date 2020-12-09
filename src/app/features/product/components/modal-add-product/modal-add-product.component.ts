import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../../../core/services/product.service";
import {CategoryModel} from "../../../../core/models/category.model";
import {CreateProductRequest} from "../../../../core/models/create-product-request";
import {MDBModalService} from "angular-bootstrap-md";

@Component({
  selector: 'app-modal-add-product',
  templateUrl: './modal-add-product.component.html',
  styleUrls: ['./modal-add-product.component.scss']
})
export class ModalAddProductComponent implements OnInit {

  productForm: FormGroup;
  categoryList: CategoryModel[];
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      image: [''],
      categoryId: [''],
      description: ['']
    })
    this.productService.getListCategory().subscribe(data => {
      this.categoryList = data;
    })
  }
  get f() {
    return this.productForm.controls;
  }
  onAddProduct() {
    const createProduct:  CreateProductRequest = {
      name: this.f.name.value,
      price: this.f.price.value,
      image: this.f.image.value,
      categoryId: this.f.categoryId.value,
      description: this.f.description.value
    }
    console.log(createProduct);
    this.productService.createProduct(createProduct).subscribe(res => {
      this.modalService.hide(1);
    })
  }

}
