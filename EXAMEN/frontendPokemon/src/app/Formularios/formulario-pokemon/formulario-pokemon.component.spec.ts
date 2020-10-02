import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPokemonComponent } from './formulario-pokemon.component';

describe('FormularioPokemonComponent', () => {
  let component: FormularioPokemonComponent;
  let fixture: ComponentFixture<FormularioPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
