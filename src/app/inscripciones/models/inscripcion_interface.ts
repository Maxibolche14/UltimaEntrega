import { Alumno } from "src/app/alumnos/models/alumno_interface";
import { Curso } from "src/app/cursos/models/curso_interface";

export interface Inscripcion {
  id: number;
  inscAlumno?: Alumno;
  inscCurso?: Curso;
}
