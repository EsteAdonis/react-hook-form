import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './index.css';
import ContactFormZod from './Forms-resolvers-zod/ContactFormZod';
import ContactForm from './Forms/ContactForm';
import { MuiLoginForm } from './MuiLoginForm/MuiLoginForm';

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { TransackQuery } from './TransackQuery/TransackQuery';
// import LifecycleDemo from './Lifecycle/Lifecycle';
// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			refetchOnWindowFocus: false,
// 		}
// 	}
// });

import { Header } from './components/Header';
import { Email } from './components/Email';
import { useDispatch } from 'react-redux';
import { addUser } from './Redux/Store/userSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
		.then(response => response.json())
		.then( data => dispatch(addUser(data)) )
		.catch(error => console.log(error))
	}, []);
	
	// const [showDemo, setShowDemo] = useState(true);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
		<div className="min-h-screen flex flex-col items-center justify-center bg-background-800">
			<h1 className="text-4xl font-bold text-primary-500 mb-8">Hello, Tailwind CSS!</h1>
      <div className="w-full max-w-md">
				{/* <ContactForm /> */}
        {/* <ContactFormZod /> */}
				{/* <MuiLoginForm /> */}
				{/* <QueryClientProvider client={queryClient}>
					<button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
					<TransackQuery />
				</QueryClientProvider> */}
				{/* <LifecycleDemo /> */}
				<Header />
				<Email />
      </div>
		</div>
  );
}

export default App;
