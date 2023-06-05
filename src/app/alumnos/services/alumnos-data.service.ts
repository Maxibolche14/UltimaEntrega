import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno_interface';

@Injectable({
  providedIn: 'root'
})

export class AlumnosDataService {

  constructor(private http: HttpClient) {}

  obtenerAlumnos$():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${environment.API_DATA}/alumnos`);
  }

  agregarAlumno(alumno: Alumno){
    return this.http.post(`${environment.API_DATA}/alumnos`, alumno).subscribe();
  }

  editarAlumno(datosAlumnoEditar: Alumno){
    this.http.put(`${environment.API_DATA}/alumnos/${datosAlumnoEditar.id}`, datosAlumnoEditar).subscribe();
  }

  deleteAlumno(idAlumnoBorrar:number){
    this.http.delete(`${environment.API_DATA}/alumnos/${idAlumnoBorrar}`).subscribe();
  }

}
