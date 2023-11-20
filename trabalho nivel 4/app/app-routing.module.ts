import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/componente.home';
import { NovProdComponent } from './novo/componente.novo';
import { ProdutoComponent } from './catalogo/componente.catalogo';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: ProdutoComponent },
  { path: 'novo', component: NovProdComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

