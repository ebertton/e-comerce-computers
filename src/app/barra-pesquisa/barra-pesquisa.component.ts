import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.scss']
})
export class BarraPesquisaComponent {

  constructor(
    private router: Router
  ){

  }

  descricao = "";
  search(){
    if(this.descricao){
      this.router.navigate(["products"], {queryParams: {descricao: this.descricao}});
      return;
    }
    this.router.navigate(["products"]);

  }
}
