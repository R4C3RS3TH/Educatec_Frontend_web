import { Carrera } from 'src/types/carrera';
export interface RegisterRequest {
  password: string; 
  correo: string;   
  nombre: string;
  carrera: Carrera;
}

