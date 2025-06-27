import { UserRequest } from '../user/UserRequest';

export interface AlumnoRequest extends UserRequest {
  ciclo?: number;
  coleccionAsesoriasIds?: number[];
  cursoNombres?: string[];
  asesorIds?: string[];
}
