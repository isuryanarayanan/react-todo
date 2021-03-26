//import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { selectTodos, addTodo, removeTodo} from './todoSlice';
//import styles from './Todo.module.css';

export function Todo() {

  const count = useSelector(selectTodos);
	console.log(count)

	var label = null;

	const inputHandler = (e) => {
		label = e.target.value;
	}

	const dispatch = useDispatch();
	
	return(
		<div className="todo">
			<h1>Todos</h1>
			<ul>
				{count.map(function(item){
					return <li key={item.id}>{item.content} <button onClick={(e)=>dispatch(removeTodo(item.id))}>delete {item.id}</button></li>;
				})}
			</ul>
			<input onChange={inputHandler} name="todo-input" />
			<button onClick={(e)=>dispatch(addTodo(label))} name="todo-submit">add</button>
		</div>
	);	
}

