import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  public items(): any[] {
    return this.shoppingCartService.items;
  }

  public total(): number {
    return this.shoppingCartService.total();
  }

  public clear(): void {
    this.shoppingCartService.clear();
  }

  public removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item);
  }

  public addItem(item: any): void {
    this.shoppingCartService.addItem(item);
  }
}
