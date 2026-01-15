import {useContext} from 'react';
import { MyOwnContext } from './MyProvider';

function Profile() {
	const { username } = useContext(MyOwnContext);

	return (
		<>
			<h1>Profile</h1>
			<h2>Username: {username} </h2>
		</>
	)
}

export default Profile;