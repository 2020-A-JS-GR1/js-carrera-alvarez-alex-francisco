import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarEntrenadoresComponent } from './ruta-editar-entrenadores.component';

describe('RutaEditarEntrenadoresComponent', () => {
  let component: RutaEditarEntrenadoresComponent;
  let fixture: ComponentFixture<RutaEditarEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarEntrenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
