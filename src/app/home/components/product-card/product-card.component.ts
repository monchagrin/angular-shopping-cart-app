import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'home-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input()
  public product!: Product;
  public cartItemExists: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (!this.product) throw new Error('The product property is required');

    this.cartService
      .checkIfCartItemExists(this.product.id)
      .subscribe((cartItemExists) => {
        this.cartItemExists = cartItemExists;
      });
  }

  addToCart(): void {
    const { id, title, description, image, price } = this.product;

    this.cartService.addToCart({
      id,
      title,
      description,
      image,
      price,
      quantity: 1,
    });
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.product.id);
  }
}
