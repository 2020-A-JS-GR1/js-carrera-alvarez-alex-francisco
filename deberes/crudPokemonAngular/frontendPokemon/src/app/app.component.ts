import { Component } from '@angular/core';
import {EntrenadorService} from "./servicios/http/entrenador.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendPokemon';

  //Inyectar Dependencias

  constructor(
    private readonly _entrenadorService: EntrenadorService
  ) {
  }

  mensajeConsola(objeto: boolean){
    console.log("Llego el evento", objeto);
    const observableTraerTodos = this._entrenadorService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{
          console.log(data)
        },
        (error)=>{
          console.log(error);
        }
      )
  }

}
