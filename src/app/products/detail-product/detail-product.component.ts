import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProductCart, IProduto } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {

  product: IProduto | undefined;
  quantity = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ){

  }
  ngOnInit():void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productService.getOne(productId);
   
  }

  addToCart(){
    this.notificationService.notify("O produto foi adicionado ao carrinho");
    const product: IProductCart = {
      ...this.product!,
      quantity: this.quantity
    }
    this.cartService.addToCart(product)
  }
}
