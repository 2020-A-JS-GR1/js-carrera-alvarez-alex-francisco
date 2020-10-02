import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListarEntrenadorComponent } from './ruta-listar-entrenador.component';

describe('RutaListarEntrenadorComponent', () => {
  let component: RutaListarEntrenadorComponent;
  let fixture: ComponentFixture<RutaListarEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListarEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
