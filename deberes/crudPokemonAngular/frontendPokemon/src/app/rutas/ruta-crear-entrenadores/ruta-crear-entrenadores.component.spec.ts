import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEntrenadoresComponent } from './ruta-crear-entrenadores.component';

describe('RutaCrearEntrenadoresComponent', () => {
  let component: RutaCrearEntrenadoresComponent;
  let fixture: ComponentFixture<RutaCrearEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearEntrenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
