import { useState } from "react";

export function AniadirTodo({ onAniadirTodo }) {
  const [titulo, setTitulo] = useState("");
  
  return (
    <>
      <input
        placeholder="Añadir todo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          setTitulo("");
          onAniadirTodo(titulo);
        }}
      >
        Añadir
      </button>
    </>
  );
}
