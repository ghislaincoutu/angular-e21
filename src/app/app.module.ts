import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ListeSommaireComponent } from './liste-sommaire/liste-sommaire.component';
import { ListeDetailleeComponent } from './liste-detaillee/liste-detaillee.component';
import { T01Component } from './t01/t01.component';
import { T02Component } from './t02/t02.component';
import { SafePipe } from './safe.pipe';
import { Transform02Pipe } from './transform02.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ListeSommaireComponent,
    ListeDetailleeComponent,
    T01Component,
    T02Component,
    SafePipe,
    Transform02Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
