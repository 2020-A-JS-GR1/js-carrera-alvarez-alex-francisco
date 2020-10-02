import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarEntrenadorComponent } from './ruta-editar-entrenador.component';

describe('RutaEditarEntrenadorComponent', () => {
  let component: RutaEditarEntrenadorComponent;
  let fixture: ComponentFixture<RutaEditarEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
