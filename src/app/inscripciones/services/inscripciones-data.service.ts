import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inscripcion } from '../models/inscripcion_interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesDataService {

  constructor(private http: HttpClient) {}

  obtenerInscripciones$():Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.API_DATA}/inscripciones`);
  }

  agregarInscripcion(insc: Inscripcion){
    return this.http.post(`${environment.API_DATA}/inscripciones`, insc).subscribe();
  }

  editarInscripcion(datosInscEditar: Inscripcion){
    this.http.put(`${environment.API_DATA}/inscripciones/${datosInscEditar.id}`, datosInscEditar).subscribe();
  }

  deleteInscripcion(idInscBorrar:number){
    this.http.delete(`${environment.API_DATA}/inscripciones/${idInscBorrar}`).subscribe();
  }

 //Ultima Llave
}
