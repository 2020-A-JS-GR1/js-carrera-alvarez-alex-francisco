import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaListarEntrenadorComponent } from './Rutas/ruta-listar-entrenador/ruta-listar-entrenador.component';
import { RutaCrearEntrenadorComponent } from './Rutas/ruta-crear-entrenador/ruta-crear-entrenador.component';
import { RutaEditarEntrenadorComponent } from './Rutas/ruta-editar-entrenador/ruta-editar-entrenador.component';
import { RutaEditarPokemonComponent } from './Rutas/ruta-editar-pokemon/ruta-editar-pokemon.component';
import { RutaCrearPokemonComponent } from './Rutas/ruta-crear-pokemon/ruta-crear-pokemon.component';
import { RutaListarPokemonComponent } from './Rutas/ruta-listar-pokemon/ruta-listar-pokemon.component';
import {HttpClientModule} from "@angular/common/http";
import {EntrenadorService} from "./Servicios/entrenador.service";
import {PokemonService} from "./Servicios/pokemon.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaListarEntrenadorComponent,
    RutaCrearEntrenadorComponent,
    RutaEditarEntrenadorComponent,
    RutaEditarPokemonComponent,
    RutaCrearPokemonComponent,
    RutaListarPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    EntrenadorService,
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
