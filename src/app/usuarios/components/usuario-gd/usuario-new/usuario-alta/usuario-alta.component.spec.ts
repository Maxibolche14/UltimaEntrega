import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAltaComponent } from './usuario-alta.component';

describe('UsuarioAltaComponent', () => {
  let component: UsuarioAltaComponent;
  let fixture: ComponentFixture<UsuarioAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se creo el componente', () => {
    expect(component).toBeTruthy();
  });



});
