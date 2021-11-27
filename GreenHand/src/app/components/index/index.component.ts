import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productSet = [];
  faCheckCircle = faCheckCircle;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  retrieveProducts(): void {
    this.productService.getAll()
      .subscribe(
        data => {
          this.productSet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProducts();
  }

}
