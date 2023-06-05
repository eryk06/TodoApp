import { IUser } from '@/types/index';
import axiosInstance,  { TODOLIST_TOKEN_NAME, saveToken } from './config';

type RegisterUserTypes = IUser;

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterUserTypes) => {
  try {
    const response = await axiosInstance.post('/users/create', {
      name,
      email,
      password,
    });
    return response.data.user;
  } catch (error) {
    console.log('error in registerUser', error);
    throw error;
  }
};

type LoginUserTypes = Omit<IUser, 'name'>;

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    const response = await axiosInstance.post('/users/login', {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common['Authorization'] = _token;
    saveToken(TODOLIST_TOKEN_NAME, _token);
    return response.data.user;
  } catch (error) {
    console.log('error in loginUser', error);
    throw error;
  }
};
