import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './index.css';
import ContactFormZod from './Forms-resolvers-zod/ContactFormZod';
import ContactForm from './Forms/ContactForm';
import { MuiLoginForm } from './MuiLoginForm/MuiLoginForm';


function App() {
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
				<MuiLoginForm />
      </div>
		</div>
  );
}

export default App;
