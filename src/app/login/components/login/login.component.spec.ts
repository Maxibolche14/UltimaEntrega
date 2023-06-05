import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionUserService } from 'src/app/core/services/sesion-user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      /* providers:[SesionUserService] */
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se creo el componente', () => {
    expect(component).toBeTruthy();
  });


});
