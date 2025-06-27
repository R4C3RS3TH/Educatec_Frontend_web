import { Carrera } from 'src/types/Carrera';

export interface UserCreateRequest {
  password: string; // min 8, max 20
  correo: string;
  nombre: string;
  carrera: Carrera;
}