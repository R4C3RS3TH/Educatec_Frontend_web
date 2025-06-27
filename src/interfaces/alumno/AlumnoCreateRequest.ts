import { UserCreateRequest } from '../user/UserCreateRequest';

export interface AlumnoCreateRequest extends UserCreateRequest {
  ciclo: number;
}
