import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso_interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CursosDataService {

  constructor(private http: HttpClient) {}

  obtenerCursos$():Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.API_DATA}/cursos`);
  }

  agregarCurso(curso: Curso){
    return this.http.post(`${environment.API_DATA}/cursos`, curso).subscribe();
  }

  editarCurso(datosCursoEditar: Curso){
    this.http.put(`${environment.API_DATA}/cursos/${datosCursoEditar.id}`, datosCursoEditar).subscribe();
  }

  deleteCurso(idCursoBorrar:number){
    this.http.delete(`${environment.API_DATA}/cursos/${idCursoBorrar}`).subscribe();
  }
 //Ultima Llave
}
