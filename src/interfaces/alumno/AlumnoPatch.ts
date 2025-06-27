import { UserPatch } from '../user/UserPatch';

export interface AlumnoPatch extends UserPatch {
  ciclo?: number;
}