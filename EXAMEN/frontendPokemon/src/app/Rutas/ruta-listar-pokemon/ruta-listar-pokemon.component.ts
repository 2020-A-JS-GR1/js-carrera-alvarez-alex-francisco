import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {PokemonService} from "../../Servicios/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-listar-pokemon',
  templateUrl: './ruta-listar-pokemon.component.html',
  styleUrls: ['./ruta-listar-pokemon.component.css']
})
export class RutaListarPokemonComponent implements OnInit {

  arregloPokemones =[];

  constructor(
    private readonly _pokemonService: PokemonService,
    private readonly _router: Router
  ) {

  }

  irAEditarPokemon(id: number){
    const ruta = ['editarPokemon', id]
    this._router.navigate(ruta);
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
