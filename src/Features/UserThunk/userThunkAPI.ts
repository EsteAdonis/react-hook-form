import axios from 'axios';
import { User } from './userThunkSlice';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => axios.get(BASE_URL);
export const createUser = (data: User) => axios.post(BASE_URL, data);
export const updateUser = (data: User) => axios.put(`${BASE_URL}/${data}`, data);
export const deleteUser = (userId: number) => axios.delete(`${BASE_URL}/${userId}`);