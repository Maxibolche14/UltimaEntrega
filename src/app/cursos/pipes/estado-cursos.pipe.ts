import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCursos'
})
export class EstadoCursosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "Activo" : "Inactivo";
  }

}
