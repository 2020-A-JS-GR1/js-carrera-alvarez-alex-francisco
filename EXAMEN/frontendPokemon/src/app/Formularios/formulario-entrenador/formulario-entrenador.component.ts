import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-entrenador',
  templateUrl: './formulario-entrenador.component.html',
  styleUrls: ['./formulario-entrenador.component.css']
})
export class FormularioEntrenadorComponent implements OnInit {

  @Input()
  nombreImput: string;

  @Input()
  edadImput: number;

  @Input()
  regionImput: string;

  @Output()
  informacionValidada: EventEmitter <any> = new EventEmitter<any>();

  nombre: string;
  edad: number;
  region: string;

  constructor() { }

  ngOnInit(): void {
    if(this.nombreImput && this.edadImput && this.regionImput){
      this.nombre = this.nombreImput;
      this.edad = this.edadImput;
      this.region = this.regionImput;
    }
  }

  crearEntrenador(formulario){
    console.log(formulario);
    this.informacionValidada.emit(
      {
        nombre: this.nombre,
        edad: this.edad,
        region: this.region
      }
    )
  }

}
