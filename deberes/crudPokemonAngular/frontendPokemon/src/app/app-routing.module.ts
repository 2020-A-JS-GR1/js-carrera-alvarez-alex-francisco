import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaEntrenadorComponent} from "./rutas/ruta-entrenador/ruta-entrenador.component";
import {RutaListaUsuarioComponent} from "../../../../../03-angular/mi-proyecto/src/app/rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "../../../../../03-angular/mi-proyecto/src/app/rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarEntrenadoresComponent} from "./rutas/ruta-editar-entrenadores/ruta-editar-entrenadores.component";
import {RutaBorrarEntrenadoresComponent} from "./rutas/ruta-borrar-entrenadores/ruta-borrar-entrenadores.component";
import {RutaPokemonComponent} from "./rutas/ruta-pokemon/ruta-pokemon.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";

const routes: Routes = [

  {
    component: RutaPokemonComponent,
    path: 'pokemon',
  },
  {
    component: RutaHomeComponent,
    path: 'home',
  },
  {
    component: RutaEntrenadorComponent,
    path: 'entrenador',
    children:[
      {
        path: 'lista',
        component: RutaListaUsuarioComponent
      },
      {
        path: 'crear',
        component: RutaCrearUsuarioComponent
      },
      {
        path: 'editar/id',
        component: RutaEditarEntrenadoresComponent
      }
      ,
      {
        path: 'borrar/id',
        component: RutaBorrarEntrenadoresComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
