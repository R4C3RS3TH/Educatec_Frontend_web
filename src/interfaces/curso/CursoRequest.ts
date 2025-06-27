import { Categoria } from 'src/types/Categoria';

export interface CursoRequest {
  nombre: string;
  creditos: number;
  categoria: Categoria;
  coleccionAsesoriasIds?: number[];
  alumnoIds?: number[];
}