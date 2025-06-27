import { UserPatch } from '../user/UserPatch';
import { Etiquetas } from 'src/types/Etiquetas';

export interface AsesorPatch extends UserPatch {
  rating?: number;
  etiquetas?: Etiquetas[];
  academiaId?: number;
  alumnoIds?: string[];
  coleccionAsesoriasIds?: number[];
}
