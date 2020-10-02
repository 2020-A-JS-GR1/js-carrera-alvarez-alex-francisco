import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaListarEntrenadorComponent} from "./Rutas/ruta-listar-entrenador/ruta-listar-entrenador.component";
import {RutaCrearEntrenadorComponent} from "./Rutas/ruta-crear-entrenador/ruta-crear-entrenador.component";
import {RutaEditarEntrenadorComponent} from "./Rutas/ruta-editar-entrenador/ruta-editar-entrenador.component";
import {RutaListarPokemonComponent} from "./Rutas/ruta-listar-pokemon/ruta-listar-pokemon.component";
import {RutaCrearPokemonComponent} from "./Rutas/ruta-crear-pokemon/ruta-crear-pokemon.component";
import {RutaEditarPokemonComponent} from "./Rutas/ruta-editar-pokemon/ruta-editar-pokemon.component";


const routes: Routes = [
  {
    component: RutaListarEntrenadorComponent,
    path: 'listarEntrenador',
  }
  ,{
    component: RutaListarPokemonComponent,
    path: 'listarPokemon',
  },
  {
    component: RutaCrearEntrenadorComponent,
    path: 'crearEntrenador',
  },
  {
    component: RutaCrearPokemonComponent,
    path: 'crearPokemon',
  },
  {
    component: RutaEditarPokemonComponent,
    path: 'editarPokemon/:id',
  },
  {
    component: RutaEditarEntrenadorComponent,
    path: 'editarEntrenador/:id',
  },
  {
    path: '',
    redirectTo: '/listaEntrenador',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
