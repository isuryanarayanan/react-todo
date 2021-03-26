import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todos: [{id:0, content:"todo1"}], 
	},
	reducers:{
		addTodo: (state, action) => {
			console.log("add todo called with label "+action.payload)
			state.todos.push({id:state.todos.length,content:action.payload});

		},
		removeTodo: (state, action) => {
			for(var i=0; i< state.todos.length;i++){
				if(state.todos[i].id === action.payload){
					state.todos.splice(i,1);
				}
			}
		},
	},
});

export const { addTodo,removeTodo } = todoSlice.actions;
export const selectTodos = state => state.todo.todos;
export default todoSlice.reducer;

