import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})



export class CartComponent {

  itensCart: IProductCart[] = [];
  total = 0

  constructor(
    public cartService: CartService,
    private router: Router
  ){
   
  }
  ngOnInit(): void {
    this.itensCart = this.cartService.getCart();
    this.calculateTotal();
  }

  
calculateTotal(){
  this.total = this.itensCart.reduce((prev, curr) => prev + (curr.preco * curr.quantity), 0)
}
  
  removeProductCart(productId: number) {
    this.itensCart = this.itensCart.filter(item => item.id !== productId);
    this.cartService.removeProductCart(productId);
    this.calculateTotal();
  }
  buy(){
    alert("Parabéns, você finalizou a sua compra!");
    this.cartService.clearCart();
    this.router.navigate(["products"]);
  }
}
