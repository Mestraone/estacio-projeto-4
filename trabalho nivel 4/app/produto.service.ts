import { Injectable } from '@angular/core';
import { livro } from './livro';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private livros: Array<livro>

  constructor() { this.livros = new Array<livro>(); }

  private getPos(codigo: string): number {
    for (let i = 0; i < this.livros.length; i++)
      if (codigo == this.livros[i].codigo)
        return i;
    return -1;
  }

  adicionar(livro: livro): void {
    this.livros.push(livro);
    for (let i = 0; i < this.livros.length; i++){
      if (i % 2 == 0 ) {
        this.livros[i].classe = 'bg-secondary'
      }
      else {
        this.livros[i].classe = 'bg-light'
      }
    }
  }
  remover(codigo: string): void {
    let pos = this.getPos(codigo);
    if (pos > -1)
      this.livros.splice(pos, 1);
  }
  obterTodos = (): Array<livro> => this.livros;
}
