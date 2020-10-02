import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../Servicios/pokemon.service";
import {Router} from "@angular/router";
import {Pokemon} from "../../Models/pokemon";

@Component({
  selector: 'app-ruta-crear-pokemon',
  templateUrl: './ruta-crear-pokemon.component.html',
  styleUrls: ['./ruta-crear-pokemon.component.css']
})
export class RutaCrearPokemonComponent implements OnInit {

  constructor(
    private readonly _pokemonService: PokemonService,
    private readonly  _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearPokemon(pokemon: Pokemon){
    const observableCrearPokemon = this._pokemonService.add(pokemon);
    observableCrearPokemon
      .subscribe(
        ()=> {
          alert('El pokemon se ha registrado satisfactoriamente');
          const ruta = ['/listarPokemon'];
          this._router.navigate(ruta);
        },
        (error: Error)=> {
            console.log('Error', error);
        }
      )
  }

}
