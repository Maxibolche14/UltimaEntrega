import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UsuariosDataService } from './usuarios-data.service';
import { of } from 'rxjs';
import { Usuario } from '../models/usuario_interface';

describe('UsuariosDataService', () => {
  let service: UsuariosDataService;
  //info mock
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule

      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    //paso solo el spy creado
    service = new UsuariosDataService(httpClientSpy as any);
    /* service = TestBed.inject(UsuariosDataService); */

  });

  it('Se crea el servicio bien', () => {
    expect(service).toBeTruthy();
  });
  it('Obtengo datos de Usuarios de la API', () => {
    const datosApiUser: Usuario [] = [
      {"userName":"admin","userPass":"admin","userAdmin":true,"id":1},
      {"userName":"user","userPass":"user","userAdmin":false,"id":2},
      {"userName":"admin2","userPass":"1","userAdmin":true,"id":3}
    ];
    //defino que debo retornar en la prueba y paso como observable
    httpClientSpy.get.and.returnValue(of(datosApiUser));
    service.obtenerUsers$().subscribe((users) => {
      expect(users).toEqual(datosApiUser)
    })
  });

});
