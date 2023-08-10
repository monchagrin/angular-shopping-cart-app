import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../../home/services/cart.service';
import { UiService } from '../../services/ui.service';

import { CartItem } from '../../../home/interfaces/cart-item.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public cartItems$: Observable<CartItem[]>;
  public totalPrice$: Observable<number>;

  constructor(private cartService: CartService, private uiService: UiService) {
    this.cartItems$ = this.cartService.cartItems;
    this.totalPrice$ = this.cartService.totalPrice;
  }

  get showSideBar(): boolean {
    return this.uiService.showSideBar;
  }

  toggleSideBar(): void {
    this.uiService.toggleSideBar();
  }

  addQuantity(cartItem: CartItem): void {
    this.cartService.addQuantity(cartItem.id);
  }

  subtractQuantity(cartItem: CartItem): void {
    this.cartService.subtractQuantity(cartItem.id);
  }
}
