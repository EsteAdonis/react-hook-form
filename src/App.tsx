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
import UserThunkList from './Features/UserThunk/UserThunkList';

function App() {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/users/1")
	// 	.then(response => response.json())
	// 	.then( data => dispatch(addUser(data)) )
	// 	.catch(error => console.log(error))
	// }, []);
	
  return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-background-800">
			<h1 className="text-4xl font-bold text-primary-500 mb-8">Hello, Tailwind CSS!</h1>
      <div className="w-full max-w-md">
				<UserThunkList />
      </div>
		</div>
  );
}

export default App;
