import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarPokemonComponent } from './ruta-editar-pokemon.component';

describe('RutaEditarPokemonComponent', () => {
  let component: RutaEditarPokemonComponent;
  let fixture: ComponentFixture<RutaEditarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
