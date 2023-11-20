import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componente.app';
import { HomeComponent } from './home/componente.home';
import { ProdutoComponent } from './catalogo/componente.catalogo';
import { NovProdComponent } from './novo/componente.novo';
import { ProdutoService } from './produto.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProdutoComponent,
        NovProdComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ProdutoService],
    bootstrap: [AppComponent]
})
export class AppModule { }