import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarPokemonComponent } from './ruta-listar-pokemon.component';

describe('RutaListarPokemonComponent', () => {
  let component: RutaListarPokemonComponent;
  let fixture: ComponentFixture<RutaListarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
