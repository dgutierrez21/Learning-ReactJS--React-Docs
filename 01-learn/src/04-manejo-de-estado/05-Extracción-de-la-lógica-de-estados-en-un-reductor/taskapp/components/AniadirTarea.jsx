import { useState } from "react";

export const AniadirTarea = ({ onAniadirTarea }) => {
  const [texto, setTexto] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Añadir Tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        onClick={() => {
          setTexto("");
          onAniadirTarea(texto);
        }}
        className="btn btn-primary ms-2"
      >
        Añadir
      </button>
    </>
  );
};
