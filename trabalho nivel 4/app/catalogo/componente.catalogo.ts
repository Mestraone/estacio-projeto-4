import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { livro } from '../livro';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './componente.catalogo.html'
})
export class ProdutoComponent implements OnInit {
  router: Router;
  servProd: ProdutoService;
  livros: Array<livro> = [];

  constructor(router: Router, servProd: ProdutoService) {
    this.router = router;
    this.servProd = servProd;
  }
  incluir(): void { this.router.navigateByUrl("/novo"); }
  excluir(codigo: string): void {
    this.servProd.remover(codigo);
    this.router.navigateByUrl("/catalogo");
  }
  ngOnInit(): void { this.livros = this.servProd.obterTodos(); }
}
