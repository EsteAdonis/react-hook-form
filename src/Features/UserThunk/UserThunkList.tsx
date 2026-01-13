import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/Store/store';
import { getUsers, removeUser, User } from './userThunkSlice';
import UserForm from './userThunkForm';

const UserThunkList: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {data, loading} = useSelector((state:RootState) => state.userThunk);
	const [editingUser, setEditingUser] = useState<User | null>(null);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const handleDelete = (userId: number) => {
		dispatch(removeUser(userId));
	};

	return (
		<div>
			<h2>user List</h2>
			{loading && <p>Loading...</p>}
			<ul>
				{data.map(user => (
					<li key={user.id}>
           	<span style={{width: "1200px"}}><strong>{user.username}</strong> ({user.email})</span>
            <button onClick={() => setEditingUser(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
					</li>
				))}
			</ul>
			<h3>{editingUser ? 'Edit User' : 'Add New User'} </h3>
			<UserForm initialData={editingUser!} onSuccess={() => setEditingUser(null)} />
		</div>
	)
};

export default UserThunkList;