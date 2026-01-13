# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Source
- React Hook Form - Complete Tutorial (with Zod)
- https://www.youtube.com/watch?v=cc_xmawJ8Kg

-- npm install @hookform/resolvers


Yesterday
Hey dude!
Hey hey! 😄 What’s up? You caught me in a great mood—ready to dive into whatever you’ve got in mind. Want to brainstorm something, learn a fun fact, or just chat?

Could you please!.. Based on React-Hook-From create me a cheatsheet about all the methods and generate a complete example in React V18 how to apply React-hook-form in a Form.
Here's your React Hook Form cheatsheet and a complete example using React 18! This covers the most essential methods and shows how to build a working form with validation and submission handling.

🧠 React Hook Form Cheatsheet
Here are the most commonly used methods from react-hook-form:

https://copilot.microsoft.com/chats/2rcZC91eFGFsWnNwkA84V

Method					Description
useForm()				Initializes the form and returns methods like register, handleSubmit, formState, etc.
register()			Connects input fields to the form state and validation rules.
handleSubmit()	Wraps your submit handler to process and validate form data.
formState				Provides form status like errors, isSubmitting, isValid, etc.
watch()					Observes input changes in real-time.
reset()					Resets the form to initial values or empty state.
setValue()			Programmatically sets a field value.
getValues()			Retrieves current form values.
trigger()				Manually triggers validation for specific fields.
setError()			Sets a custom error on a field.
clearErrors()		Clears errors for specific fields.
control					Used with controlled components (e.g., Controller for custom inputs).



-- https://copilot.microsoft.com/chats/CFsDk2e15De1ujuxKQHua

🧠 Axios Cheatsheet
📦 What is Axios?
Axios is a promise-based HTTP client for the browser and Node.js.. It simplifies making HTTP requests and handling responses.



# Learn Zod In 30 Minutes
- https://www.youtube.com/watch?v=L6BE-U3oy80

# installing Angular Material
- npm i @mui/material @emotion/react @emotion/styled


-- npm install @reduxjs/toolkit


-- Project but applying Thunk

🧱 Project Setup
1. Initialize the Project
bash
npx create-react-app redux-crud-thunk --template typescript
cd redux-crud-thunk
npm install @reduxjs/toolkit react-redux axios

src/
├── app/
│   └── store.ts
├── features/
│   └── user/
│       ├── userSlice.ts
│       ├── userAPI.ts
│       ├── UserForm.tsx
│       └── UserList.tsx
├── App.tsx
└── index.tsx

-- [baseline-browser-mapping] The data in this module is over two months old.
-- To ensure accurate Baseline data, please update:
-- : npm i baseline-browser-mapping@latest -D