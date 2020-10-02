import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../Servicios/pokemon.service";
import {Pokemon} from "../../Models/pokemon";

@Component({
  selector: 'app-ruta-editar-pokemon',
  templateUrl: './ruta-editar-pokemon.component.html',
  styleUrls: ['./ruta-editar-pokemon.component.css']
})
export class RutaEditarPokemonComponent implements OnInit {

  pokemon;
  mostrarFormulario = false;

  constructor(
    private readonly _pokemonService: PokemonService,
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
          const obsPokemon = this._pokemonService
            .getById(id);
          obsPokemon
            .subscribe(
              (pokemon:any)=>{
                this.pokemon = pokemon;
                this.llenarFormularioConDatosDePokemon();
              }
            )
        },
        (error)=>{
                console.log('Error',error);
        }
      )

  }


  llenarFormularioConDatosDePokemon(){
    this.mostrarFormulario =true;
  }

  editarPokemon(pokemon: Pokemon){
    const observableEditarPokemon = this._pokemonService.update(pokemon, this.pokemon.id);
      observableEditarPokemon
        .subscribe(
          (datos)=>{
            const ruta = [ '/listarPokemon'];
            this._router.navigate(ruta);
          },
          (error: Error)=>{
            console.log('Error',error);
          }
        )
  }

}
