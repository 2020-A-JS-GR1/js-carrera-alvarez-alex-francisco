import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEntrenadorComponent } from './ruta-entrenador.component';

describe('RutaEntrenadorComponent', () => {
  let component: RutaEntrenadorComponent;
  let fixture: ComponentFixture<RutaEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
