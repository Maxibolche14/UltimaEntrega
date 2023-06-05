import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { LoginComponent } from './login/components/login/login.component';



const routes: Routes = [
  //aca asigno ruteo
  { path: '', redirectTo:'login', pathMatch : 'full'},
  { path: 'login',  component: LoginComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
