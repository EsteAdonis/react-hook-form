import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, addTodo } from "../api";
import TodoCard from "../components/TodoCard";
import { Todo } from "../Entities/Todo";
import { useState } from "react";

export const TransackQuery = () => {
	const [title, setTitle] = useState("");
	const [search, setSearch] = useState("");
	const queryClient = useQueryClient();


	const { data: todos, isLoading } = useQuery({
		queryFn: () => fetchTodos(search),
		queryKey: ["todos", { search }],
		staleTime: Infinity
	});

	const {mutateAsync: addTodoMutation} = useMutation({
		mutationFn: addTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		}
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div> 
			<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
			<button onClick={ 
				async () => {
					try {
						await addTodoMutation({ title });
						setTitle("");
					} catch(e) {
						console.error(e);
					}
				}}
			>Add Todo</button>
			{todos?.map((todo: Todo) => {
				return <TodoCard key={todo.id} todo={todo} />
			})}
		</div>
	)
}