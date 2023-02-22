import { Injectable } from '@angular/core';
import { IProduto, produtos } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduto[] = produtos;
  constructor() { }
  getAll(){
    return this.products;
  }
  getOne(productId: number) {
    return this.products.find(product => product.id = productId);
  
  }
}
