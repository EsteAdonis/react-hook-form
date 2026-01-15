import { createContext, useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import ExternalComponent from './ExternalComponent';

interface MyOwnContextType {
	username: string,
	setUsername: (value: string) => void;
	setShowProfile: (value: boolean) => void;
}

export const MyOwnContext = createContext<MyOwnContextType>({
	username: '',
	setUsername: () => {},
	setShowProfile: () => {}
});

function MyProvider() {
	const [showProfile, setShowProfile]=useState(false);
	const [username, setUsername] = useState('');

	return (
		<div className="box">
			<h1>My Provider - Adonis Dionisio Prometeo Eris</h1>
			 <MyOwnContext.Provider value={{username, setUsername, setShowProfile}}>  {/* Sharing the variable and setters */}
				{showProfile ? <Profile /> : <Login />}
				{showProfile && <ExternalComponent /> }
			</MyOwnContext.Provider>
		</div>
	)
}

export default MyProvider;