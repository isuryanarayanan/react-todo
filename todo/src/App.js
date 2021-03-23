import './App.css';
import ListView from './components/ListView.js';
import TodoMaker from './components/TodoMaker.js';

function App() {

	return (
    <div className="App">
			<TodoMaker />
			<ListView />
    </div>
  );
}

export default App;
