import React, { useState } from 'react';
import './App.css';

function App() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);//todoで指定した三つの型しか入らない

	type Todo = {
		inputValue: string;
		id: number;
		checked: boolean;
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.value);
		setInputValue(e.target.value);
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const newTodo: Todo = {
			inputValue: inputValue,
			id: todos.length,
			checked: false,
		};

		setTodos([newTodo, ...todos]);
		setInputValue("");
	}

return (
	<div className="App">
	<div>
		<h2>ToDoリスト with Typescript</h2>
		<form onSubmit={(e) => handleSubmit(e)}>
		<input type="text"
		onChange={(e) => handleChange(e)} className="inputText" />
		<input type="submit" value="追加" className='submitButton' />
		</form>
		<ul className="todoList">
			{todos.map(todo => (
				<li key={todo.id}>
					{todo.inputValue}
					<input type="text"
					onChange={(e) => handleEdit(e)} className="inputText" />
				</li>
			))}
		</ul>
	</div>
	</div>
);
}

export default App;
