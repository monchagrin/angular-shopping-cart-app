import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [HomePageComponent, ProductCardComponent, ProductListComponent],
  imports: [CommonModule],
  exports: [HomePageComponent, ProductCardComponent, ProductListComponent],
})
export class HomeModule {}
