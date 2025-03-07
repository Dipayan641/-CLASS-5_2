import { useState,useEffect } from 'react'

import './App.css'
;
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos using useEffect
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error(`Failed to fetch todos: ${response.statusText}`);
        }
        const json = await response.json();
        setTodos(json.todos); // Assuming the response has a `todos` field
      } catch (error) {
        console.error("Error fetching todos:", error);
        alert("Failed to fetch todos. Please try again later.");
      }
    };

    fetchTodos();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

