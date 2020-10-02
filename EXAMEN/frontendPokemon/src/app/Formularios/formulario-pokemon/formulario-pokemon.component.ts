import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-pokemon',
  templateUrl: './formulario-pokemon.component.html',
  styleUrls: ['./formulario-pokemon.component.css']
})
export class FormularioPokemonComponent implements OnInit {

  @Input()
  nombreImput: string;

  @Input()
  tipoImput: string;

  @Input()
  sexoInput: string;

  @Input()
  pesoInput: number;

  @Input()
  entrenadorInput: number;

  nombre: string;
  tipo: string;
  sexo: string;
  peso: number;
  entrenador: number;

  @Output()
  informacionValidada: EventEmitter <any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {

    if(this.nombreImput && this.tipoImput && this.sexoInput && this.pesoInput && this.entrenadorInput){
      this.nombre = this.nombreImput;
      this.tipo = this.tipoImput;
      this.sexo = this.sexoInput;
      this.peso = this.pesoInput;
      this.entrenador = this.entrenadorInput;
    }

  }

  crearPokemon(formulario){
    console.log(formulario);
    this.informacionValidada.emit(
      {
        nombre: this.nombre,
        tipo: this.tipo,
        sexo: this.sexo,
        peso: this.peso,
        entrenador: this.entrenador
      }
    )
  }


}
