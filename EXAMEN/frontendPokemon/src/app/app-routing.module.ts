import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaPokemonComponent} from "./Rutas/ruta-pokemon/ruta-pokemon.component";
import {RutaEntrenadorComponent} from "./Rutas/ruta-entrenador/ruta-entrenador.component";
import {RutaListarEntrenadorComponent} from "./Rutas/ruta-listar-entrenador/ruta-listar-entrenador.component";
import {RutaCrearEntrenadorComponent} from "./Rutas/ruta-crear-entrenador/ruta-crear-entrenador.component";
import {RutaEditarEntrenadorComponent} from "./Rutas/ruta-editar-entrenador/ruta-editar-entrenador.component";


const routes: Routes = [
  {
    component: RutaEntrenadorComponent,
    path: "entrenador",
    children:[
      {
        component: RutaListarEntrenadorComponent,
        path: "listar",
      },
      {
        component: RutaCrearEntrenadorComponent,
        path: "crear",
      },
      {
        component: RutaEditarEntrenadorComponent,
        path: "editar",
      },
      {
        path: "",
        redirectTo: "listar",
        pathMatch: "full"
      },

    ]
  },
  {
    component: RutaPokemonComponent,
    path: "pokemon"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
