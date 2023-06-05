import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGdComponent } from './components/usuario-gd/usuario-gd.component';

const routes: Routes = [
  { path:'', component: UsuarioGdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
