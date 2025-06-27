import axios from 'axios';
import { AcademiaPatch } from '@interfaces/academia/AcademiaPatch';
import { AcademiaRequest } from '@interfaces/academia/AcademiaRequest';
import { AcademiaResponse } from '@interfaces/academia/AcademiaResponse';

export const getAllAcademias = async (): Promise<AcademiaResponse[]> => {
  const { data } = await axios.get('/academias');
  return data;
};

export const getAcademiaByNombre = async (nombre: string): Promise<AcademiaResponse> => {
  const { data } = await axios.get(`/academias/${nombre}`);
  return data;
};

export const createAcademia = async (payload: AcademiaRequest): Promise<AcademiaResponse> => {
  const { data } = await axios.post('/academias', payload);
  return data;
};

export const updateAcademia = async (
  nombre: string,
  payload: AcademiaPatch
): Promise<AcademiaResponse> => {
  const { data } = await axios.patch(`/academias/${nombre}`, payload);
  return data;
};

export const deleteAcademia = async (nombre: string): Promise<void> => {
  await axios.delete(`/academias/${nombre}`);
};

export const addCoLiders = async (nombre: string, emails: string[]): Promise<void> => {
  await axios.post(`/academias/${nombre}/lideres`, emails);
};

export const addAsesores = async (nombre: string, emails: string[]): Promise<void> => {
  await axios.post(`/academias/${nombre}/asesores`, emails);
};

export const deleteCoLiders = async (nombre: string, emails: string[]): Promise<void> => {
  await axios.delete(`/academias/${nombre}/lideres`, { data: emails });
};

export const deleteAsesores = async (nombre: string, emails: string[]): Promise<void> => {
  await axios.delete(`/academias/${nombre}/asesores`, { data: emails });
};
