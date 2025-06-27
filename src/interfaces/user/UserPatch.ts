import { Carrera } from 'src/types/carrera';

export interface UserPatch {
  password?: string;
  correo?: string;
  nombre?: string;
  horario?: string;
  carrera?: Carrera;
}