import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Entrenador} from "../Models/entrenador";


@Injectable()
export class EntrenadorService {

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient
  ){
  }

  get(){
    return this._httpClient.get(this.url + '/Entrenador')
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/Entrenador/' + id);
  }

  add(entrenador: Entrenador) {
    return this._httpClient.post(this.url + '/Entrenador', entrenador);
  }

  update(id: number, entrenador: Entrenador) {
    return this._httpClient.put(this.url + '/Entrenador/' + id, entrenador);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/Entrenador/' + id);
  }
}
