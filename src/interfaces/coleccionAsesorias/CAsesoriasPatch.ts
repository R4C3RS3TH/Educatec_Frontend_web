import { Modalidad } from 'src/types/Modalidad';

export interface ColeccionAsesoriasPatch {
  nombre?: string;
  descripcion?: string;
  modalidad?: Modalidad;
  color?: string;
  alumnoIds?: string[];
  academiaId?: number;
  cursoId?: number;
  asesoriaIds?: number[];
}