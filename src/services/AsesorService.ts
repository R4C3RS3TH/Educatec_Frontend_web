import Api from '@services/api';
import { AsesorResponse } from '@interfaces/asesor/AsesorResponse';
import { AsesorPatch } from '@interfaces/asesor/AsesorPatch';
import { PageResponse } from '../interfaces/common/PageResponse';
import { ColeccionAsesoriasResponse } from '@interfaces/coleccionAsesorias/CAsesoriasResponse';

export const getAllAsesores = async (): Promise<AsesorResponse[]> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AsesorResponse[]>({
    url: '/asesores'
  });
  return data;
};

export const getAsesorById = async (codigo: string): Promise<AsesorResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AsesorResponse>({
    url: `/asesores/${codigo}`
  });
  return data;
};

export const getAsesorByEmail = async (email: string): Promise<AsesorResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AsesorResponse>({
    url: `/asesores/email/${email}`
  });
  return data;
};

export const getAsesorRating = async (codigo: string): Promise<number> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, number>({
    url: `/asesores/${codigo}/rating`
  });
  return data;
};

export const getAsesorEmail = async (codigo: string): Promise<string> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, string>({
    url: `/asesores/${codigo}/email`
  });
  return data;
};

export const getMisColecciones = async (
  page: number = 0,
  size: number = 5
): Promise<PageResponse<ColeccionAsesoriasResponse>> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, PageResponse<ColeccionAsesoriasResponse>>({
    url: `/asesores/me/asesorias`,
    params: { page, size }
  });
  return data;
};

export const updateAsesorPersonal = async (
  payload: AsesorPatch
): Promise<AsesorResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<AsesorPatch, AsesorResponse>(payload, {
    url: `/asesores/me`
  });
  return data;
};

export const updateAsesorById = async (
  codigo: string,
  payload: AsesorPatch
): Promise<AsesorResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<AsesorPatch, AsesorResponse>(payload, {
    url: `/asesores/${codigo}`
  });
  return data;
};

export const deleteAsesorById = async (codigo: string): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/asesores/${codigo}`
  });
};
