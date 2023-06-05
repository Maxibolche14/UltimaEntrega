import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAdmin'
})
export class UserAdminPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "SI" : "NO";
  }

}
