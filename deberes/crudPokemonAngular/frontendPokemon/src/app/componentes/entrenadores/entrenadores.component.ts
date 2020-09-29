import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.component.html',
  styleUrls: ['./entrenadores.component.css']
})
export class EntrenadoresComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton:EventEmitter<boolean> = new EventEmitter<boolean>()

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
