import { useState } from "react";

export const ListaTareas = ({ tareas, onCambiarTarea, onEliminarTarea }) => {
  return (
    <>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <Tarea
              tarea={tarea}
              onCambiar={onCambiarTarea}
              onEliminar={onEliminarTarea}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

function Tarea({ tarea, onCambiar, onEliminar }) {
  const [estaEditando, setEstaEditando] = useState(false);

  let contenidoTarea;

  if (estaEditando) {
    contenidoTarea = (
      <>
        <input
          type="text"
          value={tarea.texto}
          onChange={(e) => {
            onCambiar({
              ...tarea,
              texto: e.target.value,
            });
          }}
        />

        <button
          onClick={() => setEstaEditando(false)}
          className="btn btn-primary mx-2"
        >
          Guardar
        </button>
      </>
    );
  } else {
    contenidoTarea = (
      <>
        {tarea.texto}

        <button
          onClick={() => setEstaEditando(true)}
          className="btn btn-primary mx-2"
        >
          Editar
        </button>
      </>
    );
  }

  return (
    <>
      <label htmlFor="">
        <input
          checked={tarea.hecho}
          onChange={(e) => onCambiar({ ...tarea, hecho: e.target.checked })}
          type="checkbox"
        />

        {contenidoTarea}

        <button
          className="btn btn-primary"
          onClick={() => onEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </label>
    </>
  );
}
