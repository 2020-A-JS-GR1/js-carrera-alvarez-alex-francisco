import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Entrenador} from "../../Models/entrenador";

@Component({
  selector: 'app-ruta-editar-entrenador',
  templateUrl: './ruta-editar-entrenador.component.html',
  styleUrls: ['./ruta-editar-entrenador.component.css']
})
export class RutaEditarEntrenadorComponent implements OnInit {

  entrenador;
  mostrarFormulario = false;

  constructor(
    private readonly _entrenadorService: EntrenadorService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
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
                this.llenarFormularioConDatosDeEntrenador();
              },
              (error)=>{
                console.log('Error',error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeEntrenador(){
  this.mostrarFormulario =true;
  }

  editarEntrenador(entrenador: Entrenador){
    const observableEditarEntrenador = this._entrenadorService.update(entrenador, this.entrenador.id);
    observableEditarEntrenador
      .subscribe(
        (datos)=>{
          const ruta = ['/listarEntrenador'];
          this._router.navigate(ruta);
        },
        (error: Error)=>{
          console.log('Error', error);
        }
      )
  }
}
