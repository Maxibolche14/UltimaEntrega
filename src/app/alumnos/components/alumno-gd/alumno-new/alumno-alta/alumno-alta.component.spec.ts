import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAltaComponent } from './alumno-alta.component';

describe('AlumnoAltaComponent', () => {
  let component: AlumnoAltaComponent;
  let fixture: ComponentFixture<AlumnoAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
