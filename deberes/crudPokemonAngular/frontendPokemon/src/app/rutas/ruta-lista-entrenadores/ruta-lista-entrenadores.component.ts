import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";

@Component({
  selector: 'app-ruta-lista-entrenadores',
  templateUrl: './ruta-lista-entrenadores.component.html',
  styleUrls: ['./ruta-lista-entrenadores.component.css']
})
export class RutaListaEntrenadoresComponent implements OnInit {

  arregloEntrenadores = [];

  constructor(
    private readonly _entrenadorService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

}
