import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable,map, tap, combineLatestAll } from 'rxjs';
import { Usuario } from 'src/app/usuarios/models/usuario_interface';
import { UsuariosDataService } from 'src/app/usuarios/services/usuarios-data.service';
import { Sesion } from '../models/sesion';
import { loadSesionActiva } from '../state/sesion.actions';

@Injectable({
  providedIn: 'root'
})
export class SesionUserService {
  sesionSubjet$!: BehaviorSubject<Sesion>;

  constructor(
    private store: Store<Sesion>,
    private usuariosDataservice : UsuariosDataService,
    private router: Router
    ) {
    const sesion: Sesion = {
      sesionActiva: false

    }
    this.sesionSubjet$ = new BehaviorSubject(sesion);
   //Fin Constructor
  }


  checkUser(user: string, pass: string){
   this.usuariosDataservice.obtenerUsers$().pipe(
      map(usuariosData=> {

        for(let index = 0; index < usuariosData.length; index++) {
          const element: Usuario = usuariosData[index];
          if ((element.userName === user) && (element.userPass === pass)  ) {
            this.login(element.userName, element.userPass, element.userAdmin, element.id)
            index = usuariosData.length+9999990
          }else{
            if(index === usuariosData.length-1){
              alert('Usuario o Contraseña incorrectos, re ingrese')
            }
          }
        }
      })
    ).subscribe().unsubscribe
  }


  login(user: string, pass: string, admin: boolean, id: number){
    const sesion: Sesion = {
      sesionActiva: true,
      sesionUsuario: {
        id: id,
        userName: user,
        userPass: pass,
        userAdmin: admin
      }

    }
    //AGREGADO POR REDUX PARA ENTREGA
    this.store.dispatch(loadSesionActiva({sesionUsuario : sesion.sesionUsuario}))

    this.sesionSubjet$.next(sesion);
    this.router.navigate(['inicioPanel'])
  }

  logOut(){
    const sesion: Sesion = {
      sesionActiva: false,
      sesionUsuario: {
        id: 0,
        userName: '',
        userPass: '',
        userAdmin: false
      }

    }
    this.sesionSubjet$.next(sesion);

  }

  //Doy sesion como observable
  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubjet$.asObservable();
  }

 //Llave final
}
