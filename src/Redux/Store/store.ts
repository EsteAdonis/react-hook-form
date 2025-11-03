import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import userThunkReducer	from '../../Features/UserThunk/userThunkSlice';

export const store = configureStore({
	reducer: {
		dionisio: userReducer,
		userThunk: userThunkReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;