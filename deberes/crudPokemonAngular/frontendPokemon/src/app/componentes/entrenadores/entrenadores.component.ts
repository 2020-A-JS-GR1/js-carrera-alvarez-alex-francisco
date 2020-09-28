import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.component.html',
  styleUrls: ['./entrenadores.component.css']
})
export class EntrenadoresComponent implements OnInit {

  @Input()
  imagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  urlCarga = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png';


  constructor() { }

  ngOnInit(): void {
  }

}
