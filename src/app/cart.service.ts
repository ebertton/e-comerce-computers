import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item: IProductCart[] = [];

  constructor() { }
  
  getCart() {
    this.item = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.item;

  }
  addToCart(product: IProductCart){

    this.item.push(product);
    localStorage.setItem('cart', JSON.stringify(this.item));

  }

  removeProductCart(productId: number) {
    this.item = this.item.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.item));
  }

  clearCart() {
    this.item = [];
    localStorage.clear();
    
  }
}
