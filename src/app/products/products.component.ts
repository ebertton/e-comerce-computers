import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: IProduto[] | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    const products =  this.productsService.getAll()
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      if (descricao){
        this.products = products.filter(product => product.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.products = products;
    })
    

  }

}
