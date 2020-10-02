import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaEntrenadoresComponent } from './ruta-lista-entrenadores.component';

describe('RutaListaEntrenadoresComponent', () => {
  let component: RutaListaEntrenadoresComponent;
  let fixture: ComponentFixture<RutaListaEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaEntrenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
