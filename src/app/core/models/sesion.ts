import { Usuario } from "../../usuarios/models/usuario_interface";

export interface Sesion {
  sesionActiva: boolean;
  sesionUsuario?: Usuario;
}
