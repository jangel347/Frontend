import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/model/material';
import { Product } from 'src/app/model/product';
import { MaterialService } from 'src/app/services/material.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  materialSet: Material[];
  product = new Product();
  submitted = false;
  msgError = '' ;
  
  constructor(private productService: ProductService, private materialService : MaterialService) { 
    this.getMaterials()
  }

  ngOnInit(): void {
  }

  existPK (val:string): void{
    this.productService.get(val)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  saveProduct(): void {
    const data = {
      id: this.product.id_,
      nombre: this.product.nombre,
      materiales: this.product.materiales
    };

    console.log(this.product.materiales)

    this.productService.create(data)
      .subscribe(
        data => {
        this.submitted=true;
        console.log(data);
      },
      error => {
        this.msgError  = error.message +' \n '+ error.error.message;
        console.log(error);
      }); 
  }

  newProduct() {
    this.submitted = false;
    this.product.id_ = null;
    this.product.nombre = null;
    this.product.materiales = null;
  }

  getMaterials(){

    this.materialService.getAll()
    .subscribe(
      data => {
        this.materialSet = data;
        console.log(data);
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}
