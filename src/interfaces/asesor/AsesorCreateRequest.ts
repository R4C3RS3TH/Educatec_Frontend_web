import { UserCreateRequest } from '../user/UserCreateRequest';
import { Etiquetas } from 'src/types/Etiquetas';

export interface AsesorCreateRequest extends UserCreateRequest {
  rating: number;
  etiquetas: Etiquetas[];
}