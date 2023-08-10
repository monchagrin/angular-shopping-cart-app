import { Component, Input } from '@angular/core';

import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'home-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input()
  public productList: Product[] = [];
}
