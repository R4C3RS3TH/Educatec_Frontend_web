import { Carrera } from 'src/types/Carrera';
import { Roles } from 'src/types/Roles';

export interface UserResponse {
  codigo: string; // UUID
  correo: string;
  nombre: string;
  horario: string;
  carrera: Carrera;
  rol: Roles;
}