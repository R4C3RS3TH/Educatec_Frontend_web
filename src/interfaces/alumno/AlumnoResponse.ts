import { UserResponse } from '../user/UserResponse';

export interface AlumnoResponse extends UserResponse {
  ciclo: number;
  coleccionAsesoriasIds: number[];
  cursoNombres: string[];
  asesorIds: string[];
}