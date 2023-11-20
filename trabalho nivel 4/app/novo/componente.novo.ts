import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { livro } from '../livro';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-novo',
  templateUrl: './componente.novo.html'
})
export class NovProdComponent implements OnInit {
  router: Router;
  servProd: ProdutoService;
  livro: livro = new livro();

  constructor(router: Router, servProd: ProdutoService) {
    this.router = router;
    this.servProd = servProd;
  }
  incluir(): void {
    this.servProd.adicionar(this.livro);
    this.router.navigateByUrl("/catalogo")
  }
  ngOnInit(): void {
  }
}