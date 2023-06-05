import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAltaComponent } from './curso-alta.component';

describe('CursoAltaComponent', () => {
  let component: CursoAltaComponent;
  let fixture: ComponentFixture<CursoAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
