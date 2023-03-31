import { CartItem } from './../shared/models/CartItem';
import { Antibody } from './../shared/models/antibody';
import { Cart } from './../shared/models/cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(antibody: Antibody): void {
    let cartItem = this.cart.items.find(item => item.antibody.id === antibody.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(antibody));
    this.setCartToLocalStorage();
  }

  removeFromCart(antibodyId: string): void {
    this.cart.items = this.cart.items.filter(item => item.antibody.id != antibodyId);
    this.setCartToLocalStorage();
  }

  changeQuantity(antibodyId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.antibody.id === antibodyId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.antibody.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  //make sure all the changes happened in the cart
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
