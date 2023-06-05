import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGdComponent } from './usuario-gd.component';

describe('UsuarioGdComponent', () => {
  let component: UsuarioGdComponent;
  let fixture: ComponentFixture<UsuarioGdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioGdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioGdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se creo el componente.', () => {
    expect(component).toBeTruthy();
  });

});
