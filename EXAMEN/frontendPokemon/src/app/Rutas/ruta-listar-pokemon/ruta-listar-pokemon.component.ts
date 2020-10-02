import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {PokemonService} from "../../Servicios/pokemon.service";

@Component({
  selector: 'app-ruta-listar-pokemon',
  templateUrl: './ruta-listar-pokemon.component.html',
  styleUrls: ['./ruta-listar-pokemon.component.css']
})
export class RutaListarPokemonComponent implements OnInit {

  arregloPokemones =[];

  constructor(
    private readonly _pokemonService: PokemonService
  ) {

  }

  ngOnInit(): void {
    const observableTraerTodos = this._pokemonService.get();
    observableTraerTodos
      .subscribe(
        (pokemones: any[])=>{
          this.arregloPokemones = pokemones;
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }
}
