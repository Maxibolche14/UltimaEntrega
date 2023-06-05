import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioGdComponent } from './components/usuario-gd/usuario-gd.component';
import { UsuarioAltaComponent } from './components/usuario-gd/usuario-new/usuario-alta/usuario-alta.component';
import { UserAdminPipe } from './pipes/user-admin.pipe';



@NgModule({
  declarations: [
    UsuarioGdComponent,
    UsuarioAltaComponent,
    UserAdminPipe,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
