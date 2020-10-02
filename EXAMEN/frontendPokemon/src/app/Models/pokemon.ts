import {Entrenador} from "../Models/entrenador";

export class Pokemon {
  constructor(
    public nombre: string,
    public tipo: 'Agua' | 'Fuego' | 'Trueno' | 'Roca' | 'Normal' | 'Psiquico',
    public sexo: 'Male' | 'Female',
    public peso: number,
    public entrenador: number | Entrenador | any,
    public createdAt?: number,
    public updatedAt?: number,
    public id?: string,

  ) {
  }
}



