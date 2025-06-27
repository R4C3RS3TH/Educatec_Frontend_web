import { Modalidad } from 'src/types/Modalidad';

export interface ColeccionAsesoriasRequest {
  nombre?: string;
  descripcion?: string;
  modalidad: Modalidad;
  color: string;
  alumnoIds?: string[];         // UUIDs
  academiaId?: number;          // Long → number
  cursoId?: number;
  asesoriaIds?: number[];
}