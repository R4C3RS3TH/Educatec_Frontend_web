import Api from '@services/api';
import { AcademiaRequest } from '@interfaces/academia/AcademiaRequest';
import { AcademiaResponse } from '@interfaces/academia/AcademiaResponse';
import { AcademiaPatch } from '@interfaces/academia/AcademiaPatch';

export const getAllAcademias = async (): Promise<AcademiaResponse[]> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AcademiaResponse[]>({
    url: '/academias'
  });
  return data;
};

export const getAcademiaByNombre = async (nombre: string): Promise<AcademiaResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, AcademiaResponse>({
    url: `/academias/${nombre}`
  });
  return data;
};

export const createAcademia = async (payload: AcademiaRequest): Promise<AcademiaResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.post<AcademiaRequest, AcademiaResponse>(payload, {
    url: '/academias'
  });
  return data;
};

export const updateAcademia = async (
  nombre: string,
  payload: AcademiaPatch
): Promise<AcademiaResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<AcademiaPatch, AcademiaResponse>(payload, {
    url: `/academias/${nombre}`
  });
  return data;
};

export const deleteAcademia = async (nombre: string): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/academias/${nombre}`
  });
};

export const addCoLiders = async (nombre: string, emails: string[]): Promise<void> => {
  const api = await Api.getInstance();
  await api.post<string[], void>(emails, {
    url: `/academias/${nombre}/lideres`
  });
};

export const addAsesores = async (nombre: string, emails: string[]): Promise<void> => {
  const api = await Api.getInstance();
  await api.post<string[], void>(emails, {
    url: `/academias/${nombre}/asesores`
  });
};

export const deleteCoLiders = async (nombre: string, emails: string[]): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/academias/${nombre}/lideres`,
    data: emails
  });
};

export const deleteAsesores = async (nombre: string, emails: string[]): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/academias/${nombre}/asesores`,
    data: emails
  });
};
