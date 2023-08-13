import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ListeSommaireComponent } from './liste-sommaire/liste-sommaire.component';
import { ListeDetailleeComponent } from './liste-detaillee/liste-detaillee.component';
import { T01Component } from './t01/t01.component';
import { T02Component } from './t02/t02.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'liste-sommaire', component: ListeSommaireComponent },
  { path: 'liste-detaillee', component: ListeDetailleeComponent },
  { path: 't01', component: T01Component },
  { path: 't02', component: T02Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
