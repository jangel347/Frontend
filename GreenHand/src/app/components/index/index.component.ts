import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productSet = [];
  productFil: Product[];
  searchTerm: string;
  faCheckCircle = faCheckCircle;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSet = [];
    this.refreshList();
  }

  search(value: string): void {
    for (let i = 0; i < this.productSet.length; i++) {
      const ELEMENT = document.getElementById("card" + this.productSet[i].id);
      const CONTENT = ELEMENT.innerText.toLowerCase();
      if (CONTENT.indexOf(value.toLowerCase()) == -1) {
        ELEMENT.classList.add("d-none");
      } else {
        ELEMENT.classList.remove("d-none");
      }
    }
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
