import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaEntrenadorComponent } from './Rutas/ruta-entrenador/ruta-entrenador.component';
import { RutaPokemonComponent } from './Rutas/ruta-pokemon/ruta-pokemon.component';
import { RutaListarEntrenadorComponent } from './Rutas/ruta-listar-entrenador/ruta-listar-entrenador.component';
import { RutaCrearEntrenadorComponent } from './Rutas/ruta-crear-entrenador/ruta-crear-entrenador.component';
import { RutaEditarEntrenadorComponent } from './Rutas/ruta-editar-entrenador/ruta-editar-entrenador.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaEntrenadorComponent,
    RutaPokemonComponent,
    RutaListarEntrenadorComponent,
    RutaCrearEntrenadorComponent,
    RutaEditarEntrenadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
