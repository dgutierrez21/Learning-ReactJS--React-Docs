import { useContext, useState } from "react";
import { ContextDispatchTareas } from "../ContextTareas";

let siguienteId = 3;

export const AniadirTarea = () => {
  const [texto, setTexto] = useState("");
  const dispatch = useContext(ContextDispatchTareas);
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
          dispatch({
            tipo: "aniadido",
            id: siguienteId++,
            texto: texto,
          });
        }}
        className="btn btn-primary ms-2"
      >
        Añadir
      </button>
    </>
  );
};
