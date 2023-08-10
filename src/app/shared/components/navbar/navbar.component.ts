import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CartService } from '../../../home/services/cart.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public cartItemCount: number = 0;

  constructor(private cartService: CartService, private uiService: UiService) {
    this.cartService.cartItems
      .pipe(map((cartItems) => cartItems.length))
      .subscribe((cartItemCount) => (this.cartItemCount = cartItemCount));
  }

  toggleSideBar(): void {
    this.uiService.toggleSideBar();
  }
}
