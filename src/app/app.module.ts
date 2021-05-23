import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cabecalhoComponent } from './cabecalho/cabecalho.component';
import { rodapeComponent } from './rodape/rodape.component';
import { pgprincipalComponent } from './pgprincipal/pgprincipal.component';
import { sobreComponent } from './sobre/sobre.component';
import { jogosComponent } from './jogos/jogos.component';
import { jogoComponent } from './jogos/jogo/jogo.component';
import { jogosService } from './jogos/jogos.service';

@NgModule({
  declarations: [
    AppComponent,
    cabecalhoComponent,
    rodapeComponent,
    pgprincipalComponent,
    sobreComponent,
    jogosComponent,
    jogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [jogosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
