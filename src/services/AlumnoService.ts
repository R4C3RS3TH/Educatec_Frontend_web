import Api from '@services/api';
import { AlumnoPatch } from '@interfaces/alumno/AlumnoPatch';
import { AlumnoResponse } from '@interfaces/alumno/AlumnoResponse';

export const getAlumnoPersonalInfo = async (): Promise<AlumnoResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AlumnoResponse>({
    url: '/alumno/me',
  });
  return data;
};

export const updateAlumnoPersonalInfo = async (
  payload: AlumnoPatch
): Promise<AlumnoResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<AlumnoPatch, AlumnoResponse>(payload, {
    url: '/alumno/me',
  });
  return data;
};

export const getMisAsesorias = async (): Promise<number[]> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, number[]>({
    url: '/alumno/me/asesorias',
  });
  return data;
};

export const deleteMiAsesoria = async (asesoriaId: number): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/alumno/me/asesorias/${asesoriaId}`,
  });
};

export const registerToColeccionAsesorias = async (
  coleccionAsesoriasId: number
): Promise<void> => {
  const api = await Api.getInstance();
  await api.post<null, void>(null, {
    url: `/alumno/register/coleccionAsesorias/${coleccionAsesoriasId}`,
  });
};

export const getAllAlumnos = async (): Promise<AlumnoResponse[]> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AlumnoResponse[]>({
    url: '/alumno',
  });
  return data;
};

export const getAlumnoById = async (codigo: string): Promise<AlumnoResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AlumnoResponse>({
    url: `/alumno/${codigo}`,
  });
  return data;
};

export const updateAlumnoById = async (
  codigo: string,
  payload: AlumnoPatch
): Promise<AlumnoResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<AlumnoPatch, AlumnoResponse>(payload, {
    url: `/alumno/${codigo}`,
  });
  return data;
};

export const deleteAlumnoById = async (codigo: string): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/alumno/${codigo}`,
  });
};
