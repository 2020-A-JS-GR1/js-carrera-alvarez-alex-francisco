import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEntrenadorComponent } from './ruta-crear-entrenador.component';

describe('RutaCrearEntrenadorComponent', () => {
  let component: RutaCrearEntrenadorComponent;
  let fixture: ComponentFixture<RutaCrearEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
