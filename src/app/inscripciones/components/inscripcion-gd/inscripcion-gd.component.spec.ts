import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionGdComponent } from './inscripcion-gd.component';

describe('InscripcionGdComponent', () => {
  let component: InscripcionGdComponent;
  let fixture: ComponentFixture<InscripcionGdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionGdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionGdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
