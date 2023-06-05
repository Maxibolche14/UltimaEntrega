import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario_interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosDataService {

  constructor(private http: HttpClient) {}

  obtenerUsers$():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.API_DATA}/usuarios`);
  }

  agregarUser(user: Usuario){
    return this.http.post(`${environment.API_DATA}/usuarios`, user).subscribe();
  }

  editarUser(datosUserEditar: Usuario){
    this.http.put(`${environment.API_DATA}/usuarios/${datosUserEditar.id}`, datosUserEditar).subscribe();
  }

  deleteUser(idUserBorrar:number){
    this.http.delete(`${environment.API_DATA}/usuarios/${idUserBorrar}`).subscribe();
  }
 //Ultima Llave
}
