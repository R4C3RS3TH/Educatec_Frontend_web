import { Carrera } from 'src/types/carrera';
import { Roles } from 'src/types/Roles';

export interface UserRequest {
  password: string;
  correo: string;
  nombre: string;
  horario?: string;
  carrera: Carrera;
  rol: Roles[];
}