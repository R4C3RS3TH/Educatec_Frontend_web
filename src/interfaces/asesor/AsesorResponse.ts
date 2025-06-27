import { UserResponse } from '../user/UserResponse';
import { Etiquetas } from 'src/types/Etiquetas';

export interface AsesorResponse extends UserResponse {
  rating: number;
  etiquetas: Etiquetas[];
  academiaId: number;
  alumnoIds: string[];
  coleccionAsesoriasIds: number[];
}

