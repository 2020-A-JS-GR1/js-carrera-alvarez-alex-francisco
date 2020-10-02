import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBorrarEntrenadoresComponent } from './ruta-borrar-entrenadores.component';

describe('RutaBorrarEntrenadoresComponent', () => {
  let component: RutaBorrarEntrenadoresComponent;
  let fixture: ComponentFixture<RutaBorrarEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaBorrarEntrenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBorrarEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
