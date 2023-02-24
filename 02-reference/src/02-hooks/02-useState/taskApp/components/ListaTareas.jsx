import { useState } from "react";

export default function ListaTareas({ todos, onCambiarTodo, onEliminarTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Tarea
            todo={todo}
            onCambiar={onCambiarTodo}
            onEliminar={onEliminarTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Tarea({ todo, onCambiar, onEliminar }) {
  const [estaEditando, setestaEditando] = useState(false);
  let contenidoTodo;
  if (estaEditando) {
    contenidoTodo = (
      <>
        <input
          value={todo.titulo}
          onChange={(e) => {
            onCambiar({
              ...todo,
              titulo: e.target.value,
            });
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => setestaEditando(false)}
        >
          Guardar
        </button>
      </>
    );
  } else {
    contenidoTodo = (
      <>
        {todo.titulo}
        <button
          className="btn btn-primary"
          onClick={() => setestaEditando(true)}
        >
          Editar
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.hecho}
        onChange={(e) => {
          onCambiar({
            ...todo,
            hecho: e.target.checked,
          });
        }}
      />
      {contenidoTodo}
      <button className="btn btn-primary" onClick={() => onEliminar(todo.id)}>
        Eliminar
      </button>
    </label>
  );
}
