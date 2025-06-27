import { Categoria } from 'src/types/Categoria';

export interface CursoResponse {
  nombre: string;
  creditos: number;
  categoria: Categoria;
  coleccionAsesoriasIds: number[];
  alumnoIds: number[];
}