import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearPokemonComponent } from './ruta-crear-pokemon.component';

describe('RutaCrearPokemonComponent', () => {
  let component: RutaCrearPokemonComponent;
  let fixture: ComponentFixture<RutaCrearPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
