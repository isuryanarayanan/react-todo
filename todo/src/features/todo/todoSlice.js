import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todos: ['todo1'], 
	},
	reducers:{
		addTodo: (state, action) => {
			console.log("add todo called with label "+action.payload)
			state.todos.push(action.payload);

		},
		removeTodo: (state, action) => {
			state.todos.splice(action.payload, action.payload+1);
		},
	},
});

export const { addTodo,removeTodo } = todoSlice.actions;
export const selectTodos = state => state.todo.todos;
export default todoSlice.reducer;

