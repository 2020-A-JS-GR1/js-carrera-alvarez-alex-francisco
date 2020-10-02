import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-entrenador',
  templateUrl: './ruta-editar-entrenador.component.html',
  styleUrls: ['./ruta-editar-entrenador.component.css']
})
export class RutaEditarEntrenadorComponent implements OnInit {

  entrenador;

  constructor(
    private readonly _entrenadorService: EntrenadorService,
    private readonly _activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros)=>{
          const id = Number(parametros.id);
          const obsEntrenador = this._entrenadorService
            .getById(id);
          obsEntrenador
            .subscribe(
              (entrenador: any)=>{
                this.entrenador = entrenador;
              },
              (error)=>{
                console.log('Error',error);
              }
            )
        }
      )


  }

}
