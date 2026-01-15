import React, { useContext } from "react";
import { MyOwnContext } from "./MyProvider";

function Login() {
	const { setUsername, setShowProfile } = useContext(MyOwnContext);
	
	return (
		<>
			<input
				type="text"
				placeholder="Username..."
				onChange={(e) => {setUsername(e?.target.value)} }
			/>
			<input type="text" placeholder="Password..." />
			<button onClick={() => {setShowProfile(true)}}>Login</button>
		</>
	)
}

export default Login;