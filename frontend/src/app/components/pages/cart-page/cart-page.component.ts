import { CartItem } from './../../../shared/models/CartItem';
import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.antibody.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.antibody.id, quantity);
  }
}
