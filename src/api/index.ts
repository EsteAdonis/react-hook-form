import {Todo} from '../Entities/Todo';

const todos: Todo[] = [
	{id: 1, title: 'Learn HTML', completed: false},
	{id: 2, title: 'Learn CSS', completed: false},
	{id: 3, title: 'Learn Sass', completed: false},
	{id: 4, title: 'Learn React JS', completed: false},
	{id: 5, title: 'Learn Angular', completed: false},
	{id: 6, title: 'Learn BootStrap', completed: false},
	{id: 7, title: 'Learn Tailwindcss', completed: false}	
];

export const fetchTodos = async (query = ''): Promise<Todo[]> => {
	await new Promise(resolve => setTimeout(resolve, 1000));

	console.log("Fetched todos");
	const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));

	return [...filteredTodos];
}

export const addTodo = async (todo:Pick<Todo, "title">): Promise<Todo> => {
	await new Promise(resolve => setTimeout(resolve, 1000));

	const newTodo = {
		id: todos.length + 1,
		title: todo.title,
		completed: false,
	}

	todos.push(newTodo);
	console.log(todos);
	return newTodo;
}