import { Modalidad } from 'src/types/Modalidad';

export interface AsesoriaResponse {
  id: number;                    // Long → number
  modalidad: Modalidad;
  rating: number;                // float → number
  dia: string;
  cupos: number;
  horaInicio: string;           // Time → string en formato 'HH:mm'
  horaFin: string;
  coleccionAsesoriasId: number;
}
