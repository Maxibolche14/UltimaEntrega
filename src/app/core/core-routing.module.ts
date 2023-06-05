import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  { path: 'inicioPanel',  redirectTo:'', pathMatch : 'full', canActivate : [AutenticacionGuard] },
  { path: '',  component: InicioComponent, canActivate : [AutenticacionGuard]   , children: [
    { path: 'alumnos',canActivate : [AutenticacionGuard], loadChildren: () => import('../alumnos/alumnos.module').then((alumlazylo)=> alumlazylo.AlumnosModule)},
    { path: 'cursos',canActivate : [AutenticacionGuard], loadChildren: () => import('../cursos/cursos.module').then((curslazylo)=> curslazylo.CursosModule)},
    { path: 'inscripciones', canActivate : [AutenticacionGuard], loadChildren: () => import('../inscripciones/inscripciones.module').then((userlazylo)=> userlazylo.InscripcionesModule)},
    { path: 'usuarios', canActivate : [AutenticacionGuard], loadChildren: () => import('../usuarios/usuarios.module').then((userlazylo)=> userlazylo.UsuariosModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
