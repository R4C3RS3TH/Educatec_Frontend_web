import Api from '@services/api';
import { ColeccionAsesoriasRequest } from '@interfaces/coleccionAsesorias/CAsesoriasRequest';
import { ColeccionAsesoriasResponse } from '@interfaces/coleccionAsesorias/CAsesoriasResponse';
import { PageResponse } from '@interfaces/common/PageResponse';

export const getAllColecciones = async (): Promise<ColeccionAsesoriasResponse[]> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, ColeccionAsesoriasResponse[]>({
    url: '/coleccion-asesorias'
  });
  return data;
};

export const getColeccionById = async (id: number): Promise<ColeccionAsesoriasResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, ColeccionAsesoriasResponse>({
    url: `/coleccion-asesorias/${id}`
  });
  return data;
};

export const createColeccion = async (
  payload: ColeccionAsesoriasRequest
): Promise<ColeccionAsesoriasResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.post<ColeccionAsesoriasRequest, ColeccionAsesoriasResponse>(payload, {
    url: '/coleccion-asesorias'
  });
  return data;
};

export const updateColeccion = async (
  id: number,
  payload: ColeccionAsesoriasRequest
): Promise<ColeccionAsesoriasResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<ColeccionAsesoriasRequest, ColeccionAsesoriasResponse>(payload, {
    url: `/coleccion-asesorias/${id}`
  });
  return data;
};

export const deleteColeccion = async (id: number): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/coleccion-asesorias/${id}`
  });
};

export const searchColecciones = async (
  curso?: string,
  asesor?: string,
  page: number = 0,
  size: number = 5
): Promise<PageResponse<ColeccionAsesoriasResponse>> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, PageResponse<ColeccionAsesoriasResponse>>({
    url: '/coleccion-asesorias/search',
    params: {
      curso,
      asesor,
      page,
      size
    }
  });
  return data;
};
