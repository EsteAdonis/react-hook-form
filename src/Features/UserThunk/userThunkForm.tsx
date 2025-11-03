import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/Store/store';
import { postUser, putUser } from './userThunkSlice';
import { User } from './userThunkSlice';

interface Props {
	initialData? : User;
	onSuccess?: () => void;
}

const UserForm: React.FC<Props> =({ initialData, onSuccess}) => {
	const {id, username, name, email}: User = initialData || {id: 0, name: '', username: '', email: ''};
	
	const dispatch = useDispatch<AppDispatch>();
	const [formData, setFormData] = useState<User>(
		{id, username, name, email}
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (initialData) {
			dispatch(putUser(formData)).then(onSuccess);
		} else {
			dispatch(postUser(formData)).then(onSuccess);
		}
		setFormData({id: 0, username: '', name: '', email: ''});
	}

	useEffect(() => {
		setFormData({id, username, name, email});
		console.log({id, username, name, email});
	}, [id])
	
	return (
		<form onSubmit={handleSubmit}>
			<input name="user" value={formData.username} onChange={handleChange} placeholder="User Id" required/>
			<input name="username" value={formData.name} onChange={handleChange} placeholder="Username" required />
			<input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
			<button type="submit">{initialData ? 'Update' : 'Add'} User </button>
		</form>
	)
};

export default UserForm;