
/* todos =[{
title:"go to the gym",
description :"go to the gym at 6 pm"
}]
*/
export function Todos(props) {
  const { todos } = props; // Destructure todos from props

  return (
    <div>
      {Array.isArray(todos) &&
        todos.map(function (todo, index) {
          return (
            <div key={index}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>
                {todo.completed === true ? "Completed" : "Mark as Complete"}
              </button>
            </div>
          );
        })}
    </div>
  );
}
