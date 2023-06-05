import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';
import { MaterialModule } from "../material.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { reducer, sesionFeatureKey } from './state/sesion.reducer';
/* import { EffectsModule } from '@ngrx/effects';
import { SesionEffects } from './sesion.effects'; */

@Injectable({
  providedIn: 'root',
  })
@NgModule({
  declarations: [
    InicioComponent,
    SideMenuComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature(sesionFeatureKey,reducer)
  ]
})
export class CoreModule { }
