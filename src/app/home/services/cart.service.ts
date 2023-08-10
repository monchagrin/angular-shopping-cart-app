import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { CartItem } from '../interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems: CartItem[] = [];

  private cartItems$: BehaviorSubject<CartItem[]> = new BehaviorSubject<
    CartItem[]
  >(this._cartItems);

  get cartItems(): Observable<CartItem[]> {
    return this.cartItems$.asObservable();
  }

  get totalPrice(): Observable<number> {
    return this.cartItems.pipe(
      map((cartItems) =>
        cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
      )
    );
  }

  addToCart(newCartItem: CartItem): void {
    this._cartItems.push(newCartItem);
    this.cartItems$.next(this._cartItems);
  }

  removeFromCart(cartItemId: number): void {
    this._cartItems = this._cartItems.filter(({ id }) => id !== cartItemId);
    this.cartItems$.next(this._cartItems);
  }

  addQuantity(cartItemId: number): void {
    this._cartItems = this._cartItems.map((cartItem) =>
      cartItem.id === cartItemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    this.cartItems$.next(this._cartItems);
  }

  subtractQuantity(cartItemId: number): void {
    this._cartItems = this._cartItems
      .map((cartItem) =>
        cartItem.id === cartItemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity);

    this.cartItems$.next(this._cartItems);
  }

  checkIfCartItemExists(cartItemId: number): Observable<boolean> {
    return this.cartItems.pipe(
      map((cartItems) => cartItems.some(({ id }) => id === cartItemId))
    );
  }
}
