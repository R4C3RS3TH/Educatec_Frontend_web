import { Carrera } from 'src/types/Carrera';
export interface RegisterRequest {
  password: string; 
  correo: string;   
  nombre: string;
  carrera: Carrera;
}

