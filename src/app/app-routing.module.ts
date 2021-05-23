import { jogoComponent } from './jogos/jogo/jogo.component';
import {jogosComponent } from './jogos/jogos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sobreComponent } from './sobre/sobre.component';
import { pgprincipalComponent } from './pgprincipal/pgprincipal.component';

const routes: Routes = [
  {path:'', component: pgprincipalComponent},
  {path:'sobre', component: sobreComponent},
  {path:'jogos', component: jogosComponent},
  {path:'jogo', component: jogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
