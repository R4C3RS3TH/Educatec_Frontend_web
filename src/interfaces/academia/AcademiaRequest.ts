export interface AcademiaRequest {
  nombre: string;
  lideresIds?: string[];            // UUIDs → string[]
  asesorIds: string[];              // obligatorio
  coleccionAsesoriasIds?: number[]; // Longs → number[]
}