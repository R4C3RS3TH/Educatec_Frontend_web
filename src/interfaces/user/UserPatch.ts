import { Carrera } from 'src/types/Carrera';

export interface UserPatch {
  password?: string;
  correo?: string;
  nombre?: string;
  horario?: string;
  carrera?: Carrera;
}