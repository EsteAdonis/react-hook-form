import { useSelector, useDispatch } from 'react-redux';

import { changeEmail } from '../Redux/Store/userSlice';
import { RootState } from '../Redux/Store/store';

export const Email = () => {
	const dispatch = useDispatch();
	const email = useSelector( (state: RootState ) => state.dionisio.email);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeEmail(e.target.value));
	};

	return (
		<input 
			type='email'
			value={email}
			placeholder='Email'
			onChange={handleChange} 
		/>
	)
};  
