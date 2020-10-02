import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPokemonComponent } from './ruta-pokemon.component';

describe('RutaPokemonComponent', () => {
  let component: RutaPokemonComponent;
  let fixture: ComponentFixture<RutaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
