import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrenadoresComponent } from './componentes/entrenadores/entrenadores.component';
import { PokemonesComponent } from './componentes/pokemones/pokemones.component';
import {HttpClientModule} from "@angular/common/http";
import {EntrenadorService} from "./servicios/http/entrenador.service";

@NgModule({
  declarations: [ //Componentes de angular
    AppComponent,
    EntrenadoresComponent,
    PokemonesComponent
  ],
  imports: [ //Modulos a utilizar
    BrowserModule, //Importa ngFor y ngIf
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [//Servicios
    EntrenadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
