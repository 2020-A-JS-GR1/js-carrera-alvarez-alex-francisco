import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-entrenador',
  templateUrl: './formulario-entrenador.component.html',
  styleUrls: ['./formulario-entrenador.component.css']
})
export class FormularioEntrenadorComponent implements OnInit {

  nombre: string;
  edad: number;
  region: string;

  constructor() { }

  ngOnInit(): void {
  }

  crearEntrenador(formulario){
    console.log(formulario);
  }

}
