import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-listar-entrenador',
  templateUrl: './ruta-listar-entrenador.component.html',
  styleUrls: ['./ruta-listar-entrenador.component.css']
})
export class RutaListarEntrenadorComponent implements OnInit {

  arregloEntrenadores =[];

  constructor(
    private readonly _entrenadorService: EntrenadorService,
    private readonly _router: Router
  ) {

  }

  iraEditarEntrenador(id: number){
    const ruta = ['editarEntrenador',id]
    this._router.navigate(ruta);
  }

  iraEliminarEntrenador(id: number){
    const obsEliminar = this._entrenadorService
      .delete(id);
    obsEliminar
      .subscribe(
        ()=>{
          const indice = this.arregloEntrenadores
            .findIndex(u => u.id === id);
          this.arregloEntrenadores.splice(indice,
            1);
        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

  ngOnInit(): void {
    const observableTraerTodos = this._entrenadorService.get();
    observableTraerTodos
      .subscribe(
        (entrenadores: any[])=>{
          this.arregloEntrenadores = entrenadores;
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
