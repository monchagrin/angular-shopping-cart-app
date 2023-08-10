import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'home-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
