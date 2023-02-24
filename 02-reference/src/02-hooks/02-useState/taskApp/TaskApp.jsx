import { useState } from "react";
import { AniadirTodo } from "./components/AniadirTodo";
import ListaTareas from "./components/ListaTareas";

let siguienteId = 3;

const todosIniciales = [
  { id: 0, titulo: "Buy milk", hecho: true },
  { id: 1, titulo: "Eat tacos", hecho: false },
  { id: 2, titulo: "Brew tea", hecho: false },
];

export const TaskApp = () => {
  const [todos, setTodos] = useState(todosIniciales);

  function handleAniadirTodo(titulo) {
    setTodos([
      ...todos,
      {
        id: siguienteId++,
        titulo,
        hecho: false,
      },
    ]);
  }

  function handleCambiarTodo(siguienteTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === siguienteTodo.id) {
          return siguienteTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleEliminarTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }
  
  return (
    <>
      <AniadirTodo onAniadirTodo={handleAniadirTodo} />

      <ListaTareas
        todos={todos}
        onEliminarTodo={handleEliminarTodo}
        onCambiarTodo={handleCambiarTodo}
      />
    </>
  );
};
