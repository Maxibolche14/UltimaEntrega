import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoGdComponent } from './alumno-gd.component';

describe('AlumnoGdComponent', () => {
  let component: AlumnoGdComponent;
  let fixture: ComponentFixture<AlumnoGdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoGdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoGdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
