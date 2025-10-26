import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	name: z.string().min(8, "Name must be at least 8 characters long"),
	email: z.string().nonempty("Email is not valid"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
	appoinment: z.date().optional(),
});

type FormValues = z.infer<typeof schema>;

const ContactFormZod: React.FC = () => {
	const { 
		register, 
		handleSubmit, 
		setError,
		formState: { errors, isSubmitting, isValid }, 
		reset 
	} = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onChange" });
	

	const onSubmit: SubmitHandler<FormValues> = async data => {
		try {
			await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
		} catch(error) {
			setError("email", { type: "manual", message: "Submission failed. Please try again." });
		}
		
		console.log(data);
		reset();
	}

	return (

		<form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
			{isSubmitting && <span className="loading-overlay">Submitting...</span>}
			
			<label htmlFor="name">Name:</label>
			<input 
				type="text" 
				id="name" 
				{...register("name")} 
			/>
			{errors.name && (<p className="text-red-500">{errors.name.message}</p>)}

			<label htmlFor="email">Email:</label>
			<input 
					type="email" 
					id="email" 
					{...register("email")} 
			/>
			{errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

			<label htmlFor="password">Password:</label>
			<input 
					type="password"
					id="password" 
					{...register("password")} 
			/>
			{errors.password && (<p className="text-red-500">{errors.password.message}</p>)} 
			
			<button 
				type="submit"
				disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>

			<span>Is Valid: {isValid ? 'Yes' : 'No'} </span>
			{errors.root && (<p className="error">{errors.root.message}</p>)}
		</form>
	)
}

export default ContactFormZod
