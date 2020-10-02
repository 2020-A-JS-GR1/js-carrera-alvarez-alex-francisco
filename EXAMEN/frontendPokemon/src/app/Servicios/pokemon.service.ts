import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Entrenador} from "../Models/entrenador";
import {Pokemon} from "../Models/pokemon";

@Injectable()
export class PokemonService {

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient
  ){
  }

  get(){
    return this._httpClient.get(this.url + '/Pokemon')
  }

  getById(id: string) {
    return this._httpClient.get(this.url + '/Pokemon/' + id);
  }

  add(pokemon: Pokemon) {
    return this._httpClient.post(this.url + '/Pokemon', pokemon);
  }

  update(id: string, pokemon: Pokemon) {
    return this._httpClient.put(this.url + '/Pokemon/' + id, pokemon);
  }

  delete(id: string) {
    return this._httpClient.delete(this.url + '/Pokemon/' + id);
  }
}
