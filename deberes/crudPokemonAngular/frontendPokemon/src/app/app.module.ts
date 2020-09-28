import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrenadoresComponent } from './componentes/entrenadores/entrenadores.component';
import { PokemonesComponent } from './componentes/pokemones/pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrenadoresComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
