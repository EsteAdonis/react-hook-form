import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './userThunkAPI';

export interface User {
	id: number,
	username: string,
	name: string,
	email: string
}

interface UserState {
	data: User[];
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	data: [],
	loading: false,
	error: null,
}

export const getUsers = createAsyncThunk('user/getUsers', async () => {
	const res = await api.fetchUsers();
	return res.data;
});

export const postUser = createAsyncThunk('user/postUser', async (user: User) => {
	const res = await api.createUser(user);
	return res.data;
});

export const putUser = createAsyncThunk('user/putUser', async (user: User) => {
	const res = await api.updateUser(user);
	return res.data;
})

export const removeUser = createAsyncThunk('user/removeUser', async (userId: number) => {
	await api.deleteUser(userId);
	return userId;
});

const userThunkSlice = createSlice({
	name: 'userThunk',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getUsers.pending, state => {
				state.loading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(postUser.fulfilled, (state, action) => {
				state.data.push(action.payload);
			})
			.addCase(putUser.fulfilled, (state, action) => {
				const index = state.data.findIndex(u => u.username === action.payload.username);
				if (index !== -1) state.data[index] = action.payload;
			})
			.addCase(removeUser.fulfilled, (state, action) => {
				state.data = state.data.filter(u => u.id !== action.payload);
			});
	},
});

export default userThunkSlice.reducer;