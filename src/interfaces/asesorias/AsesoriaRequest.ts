import { Modalidad } from 'src/types/Modalidad';

export interface AsesoriaRequest {
  modalidad: Modalidad;
  dia: string; // formato, ej: 'LUNES' 
  cupos?: number;
  horaInicio: string; // Time → string en formato 'HH:mm' (ej: '14:00')
  horaFin: string;
  coleccionAsesoriasId?: number; // Long → number
}