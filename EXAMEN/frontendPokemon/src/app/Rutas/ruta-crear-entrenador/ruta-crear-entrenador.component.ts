import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {Router} from "@angular/router";
import {Entrenador} from "../../Models/entrenador";

@Component({
  selector: 'app-ruta-crear-entrenador',
  templateUrl: './ruta-crear-entrenador.component.html',
  styleUrls: ['./ruta-crear-entrenador.component.css']
})
export class RutaCrearEntrenadorComponent implements OnInit {

  constructor(
    private readonly _entrenadorService: EntrenadorService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearEntrenador(entrenador: Entrenador){
    const observableCrearEntrenador = this._entrenadorService.add(entrenador);
    observableCrearEntrenador
      .subscribe(
        ()=>{
          alert('Entrenador registrado Exitosamente');
          const ruta = ['/listarEntrenador'];
          this._router.navigate(ruta);
        },
        (error: Error)=>{
          console.log('Error', error);
        }
      )
  }

}
