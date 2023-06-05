import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoGdComponent } from './curso-gd.component';

describe('CursoGdComponent', () => {
  let component: CursoGdComponent;
  let fixture: ComponentFixture<CursoGdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoGdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoGdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
