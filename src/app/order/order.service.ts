import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient
  ) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  carItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    return this.http
      .post<Order>(`${MEAT_API}/orders`, order)
      .pipe(map(order => order.id));
  }
}
