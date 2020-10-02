import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";

@Component({
  selector: 'app-ruta-listar-entrenador',
  templateUrl: './ruta-listar-entrenador.component.html',
  styleUrls: ['./ruta-listar-entrenador.component.css']
})
export class RutaListarEntrenadorComponent implements OnInit {

  arregloEntrenadores =[];

  constructor(
    private readonly _entrenadorService: EntrenadorService
  ) {

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
