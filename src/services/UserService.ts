import Api from '@services/api';
import { UserResponse } from '@interfaces/user/UserResponse';
import { UserPatch } from '@interfaces/user/UserPatch';

export const getAllUsers = async (): Promise<UserResponse[]> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, UserResponse[]>({
    url: '/users'
  });
  return data;
};

export const getUserById = async (codigo: string): Promise<UserResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, UserResponse>({
    url: `/users/${codigo}`
  });
  return data;
};

export const getUserByEmail = async (email: string): Promise<UserResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.get<null, UserResponse>({
    url: `/users/email/${email}`
  });
  return data;
};

export const updateUser = async (
  codigo: string,
  payload: UserPatch
): Promise<UserResponse> => {
  const api = await Api.getInstance();
  const { data } = await api.patch<UserPatch, UserResponse>(payload, {
    url: `/users/${codigo}`
  });
  return data;
};

export const deleteUser = async (codigo: string): Promise<void> => {
  const api = await Api.getInstance();
  await api.delete({
    url: `/users/${codigo}`
  });
};
