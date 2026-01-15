import { useContext } from 'react';
import { MyOwnContext } from './MyProvider';

function ExternalComponent() {
	// This component have not access to the username because is not wrapper in <MyOwnContext.Provider > defined in My Provider
	const { username } = useContext(MyOwnContext);

	return (
		<div>
			<p>External Component User name: {username}</p>
		</div>
	)
}

export default ExternalComponent;