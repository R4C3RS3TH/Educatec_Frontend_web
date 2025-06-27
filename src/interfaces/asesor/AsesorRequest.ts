import { UserRequest } from '../user/UserRequest';
import { Etiquetas } from 'src/types/Etiquetas';

export interface AsesorRequest extends UserRequest {
  rating?: number;
  etiquetas?: Etiquetas[];
  academiaId?: number;
  alumnoIds?: string[]; // UUID[]
  coleccionAsesoriasIds?: number[];
}