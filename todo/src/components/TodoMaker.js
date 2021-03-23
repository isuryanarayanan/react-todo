import React  from 'react';

const TodoMaker = () => {
	const inputHandler = (e) => {
		console.log(e);
	}
	return(
		<div className="todo-maker">
			<input onChange={inputHandler} name="todo-input" />
			<button name="todo-submit" > Add Todo </button>
		</div>
	);
}

export default TodoMaker;
