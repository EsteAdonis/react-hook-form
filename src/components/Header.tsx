import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store/store';

export const Header = () => {
	const dionisio = useSelector((state:RootState) => state.dionisio);

	return (
		<header>
			<h1>Redux Toolkit Example</h1>
			<ul>
				<li>{dionisio.username}</li>				
				<li>{dionisio.name}</li>
				<li>{dionisio.email}</li>
			</ul>
		</header>
	)
}
