import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaEntrenadorComponent } from './rutas/ruta-entrenador/ruta-entrenador.component';
import { RutaListaEntrenadoresComponent } from './rutas/ruta-lista-entrenadores/ruta-lista-entrenadores.component';
import { RutaCrearEntrenadoresComponent } from './rutas/ruta-crear-entrenadores/ruta-crear-entrenadores.component';
import { RutaEditarEntrenadoresComponent } from './rutas/ruta-editar-entrenadores/ruta-editar-entrenadores.component';
import { RutaBorrarEntrenadoresComponent } from './rutas/ruta-borrar-entrenadores/ruta-borrar-entrenadores.component';
import { RutaPokemonComponent } from './rutas/ruta-pokemon/ruta-pokemon.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "../../../../../03-angular/mi-proyecto/src/app/servicios/http/usuario.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaEntrenadorComponent,
    RutaListaEntrenadoresComponent,
    RutaCrearEntrenadoresComponent,
    RutaEditarEntrenadoresComponent,
    RutaBorrarEntrenadoresComponent,
    RutaPokemonComponent,
    RutaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ //Servicios
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
