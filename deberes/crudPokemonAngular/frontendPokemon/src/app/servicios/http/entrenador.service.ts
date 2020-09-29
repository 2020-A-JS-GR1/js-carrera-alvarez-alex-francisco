import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {url} from "inspector";

@Injectable()
export class EntrenadorService{

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(){
    return this._httpClient.get(this.url + '/Usuario')
  }

}
