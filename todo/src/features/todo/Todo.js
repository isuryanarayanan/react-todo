//import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { selectTodos, addTodo } from './todoSlice';
//import styles from './Todo.module.css';

export function Todo() {

  const count = useSelector(selectTodos);
	console.log(count)

	var label = null;

	const inputHandler = (e) => {
		label = e.target.value;
	}
	const renderTodos = (arr) => {
		console.log("rendering")
		arr.forEach((e)=>{
			console.log(arr[e])
		}
		);
	}	
	const dispatch = useDispatch();
	
	return(
		<div className="todo">
			<h1>Todos</h1>
			{renderTodos(count)}
			<input onChange={inputHandler} name="todo-input" />
			<button onClick={(e)=>dispatch(addTodo(label))} name="todo-submit">add</button>
		</div>
	);	
}

