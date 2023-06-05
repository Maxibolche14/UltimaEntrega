import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionGdComponent } from './components/inscripcion-gd/inscripcion-gd.component';

const routes: Routes = [
  { path: '', component: InscripcionGdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
