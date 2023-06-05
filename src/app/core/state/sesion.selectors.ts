import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Sesion } from '../models/sesion';
import * as fromSesion from './sesion.reducer';

export const selectSesionState = createFeatureSelector<Sesion>(
  fromSesion.sesionFeatureKey
);

export const selectSesionActiva = createSelector(
  selectSesionState,
  (state) => state
)
