import { Modalidad } from 'src/types/Modalidad';

export interface ColeccionAsesoriasResponse {
  id: number;
  nombre: string;
  descripcion: string;
  modalidad: Modalidad;
  color: string;
  alumnoIds: string[];
  academiaId: number;
  academiaNombre: string;
  cursoId: number;
  cursoNombre: string;
  asesoriaIds: number[];
}