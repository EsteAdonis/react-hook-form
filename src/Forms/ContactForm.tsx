import { useEffect } from 'react';
import { useForm, useFieldArray, SubmitHandler, FieldErrors } from 'react-hook-form';

type FormValues = {
	username: string
	email: string
	password: string
	phoneNumbers: string[]
	phNumbers: { number: string }[]
	dob: string // Changed to string for better input handling
}

// Helper function to format date to YYYY-MM-DD
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Get date 100 years ago for min date
const getMinDate = (): string => {
	const date = new Date();
	date.setFullYear(date.getFullYear() - 100);
	return formatDate(date);
};

// Get today's date for max date
const getMaxDate = (): string => {
  return formatDate(new Date());
};


const ContactForm: React.FC = () => {

	const { 
		register, 
		handleSubmit, 
		getValues,
		setError,
		setValue,
		control,
		formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful, isValid, touchedFields, dirtyFields, isDirty }, 
		reset,
		trigger,
		watch,
	} = useForm<FormValues>({
								defaultValues: {
									username: "",
									email: "",
									password: "",
									phoneNumbers: ["", ""],
									phNumbers: [{ number: "" }],
									dob: formatDate(new Date()),
								},
								mode: "onChange"
							});

	console.log({touchedFields, dirtyFields, isDirty})

	const {fields, append, remove} = useFieldArray({
		name: "phNumbers",
		control
	});							

	const onSubmit: SubmitHandler<FormValues> = async data => {
		try {
			await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
		} catch(error) {
			setError("email", { type: "manual", message: "Submission failed. Please try again." });
		}
		
		console.log(data);
		reset();
	}
	const watchUsername = watch(["username", "email"]);

	useEffect(() => {
		const subscription = watch(value => {
			console.log(value)
		});

		return () => subscription.unsubscribe();
	},[watch]);

	useEffect(()=> {
		if(isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset])

	const handleGetValues = () => {
		console.log("Get values: ", getValues(), getValues("dob"), getValues(["username", "email"]));
	}

	const handleSetValues = () => {
		setValue("username", "Eris Atenea", {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true
		})
	}

	const onError = (errors: FieldErrors<FormValues>) => {
		console.log("Form errors", errors);
	}

	console.log({isSubmitting, isSubmitted, isSubmitSuccessful})

	return (
		<>
		<h2>Watch value: {watchUsername} </h2>
		<form className="tutorial gap-2" onSubmit={ handleSubmit(onSubmit, onError) } noValidate>
			{isSubmitting && <span className="loading-overlay">Submitting...</span>}
			
			<label htmlFor="name">Name:</label>
			<input 
				type="text" 
				id="name" 
				{...register("username", { required: "Name is required", minLength: { value: 8, message: "Name must be at least 8 characters long" } })} 
			/>
			{errors.username && (<p className="text-red-500">{errors.username.message}</p>)}

			<label htmlFor="email">Email:</label>
			<input 
					type="email" 
					id="email" 
					{...register("email", 
							{ required: "Email is required", 
								pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email is not valid" },
								validate: async (fieldValue) => {
									const response = await fetch(`https://jsonplaceholder.typicode.com/users?eamil=${fieldValue}`);
									const data = await response.json();
									return data.length === 0 || 'Email already exists';
								}
							})} 
			/>
			{errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

			<label htmlFor="password">Password:</label>
			<input 
					type="password"
					id="password" 
					{...register("password", 
						{ required: "Password is required", 
							minLength: { value: 6, message: "Password must be at least 6 characters long" }, 
							disabled: watch("username") === "" })} 
			/>
			{errors.password && (<p className="text-red-500">{errors.password.message}</p>)} 

			<label htmlFor='primary-phone'>Primary Phone:</label>
			<input 
				type="tel" 
				id="primary-phone" 
				{...register("phoneNumbers.0", { required: "Primary phone number is required" }	)} 
			/>
			{errors.phoneNumbers?.[0] && (<p className="text-red-500">{errors.phoneNumbers[0].message}</p>)}

			<label htmlFor='secondary-phone'>Secondary Phone:</label>
			<input 
				type="tel" 
				id="secondary-phone" 
				{...register("phoneNumbers.1", { required: "Secondary phone number is required" })} 
			/>
			{errors.phoneNumbers?.[1] && (<p className="text-red-500">{errors.phoneNumbers[1].message}</p>)}

			<div>
				<label>List of Phone Numbers (dynamically added):</label>
				{fields.map((field, index) => (
					<div key={field.id} className="flex items-center gap-2 mb-2">
						<label htmlFor={`phNumbers.${index}.number`}>Phone {index + 1}:</label>
						<input
							type="tel"
							{...register(`phNumbers.${index}.number`, { required: "Phone number is required" })}
						/>

						<button type="button" onClick={() => append({ number: "" })}>Add</button>
						{index > 0 && 
						<button type="button" onClick={() => remove(index)}>Remove</button>
						}
					</div>
				))}
			</div>

				<div>
				<label htmlFor="dob">Date of Birth:</label>
					<input 
						type="date"	
						id="dob" 
						min={getMinDate()}
						max={getMaxDate()}
						{...register("dob", { 
							required: "Date of Birth is required",
							validate: {
								notFuture: (value) => {
									const date = new Date(value);
									return date <= new Date() || "Date cannot be in the future";
								},
								notTooOld: (value) => {
									const date = new Date(value);
									const minDate = new Date();
									minDate.setFullYear(minDate.getFullYear() - 100);
									return date >= minDate || "Date cannot be more than 100 years ago";
								}
							}
						})} 
					/>
					{errors.dob && (<p className="text-red-500">{errors.dob.message}</p>)}	
				</div>
			
			<button 
				type="submit"
				disabled={isSubmitting || !isDirty || !isValid}>
					{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>			

			<button type="button" onClick={handleGetValues}>Get values</button>
			<button type="button" onClick={handleSetValues}>Set Value</button>
			<button type="button" onClick={() => reset()}>Reset</button>
			<button type="button" onClick={() => trigger()}>Trigger</button>
			<span>Is Valid: {isValid ? 'Yes' : 'No'} </span>
			{errors.root && (<p className="error">{errors.root.message}</p>)}
		</form>
	</>
	)
}

export default ContactForm
