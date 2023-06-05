import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAltaComponent } from './inscripcion-alta.component';

describe('InscripcionAltaComponent', () => {
  let component: InscripcionAltaComponent;
  let fixture: ComponentFixture<InscripcionAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
