import { useState } from "react";
import { useDispatchTareas, useTareas } from "../ContextTareas";

export const ListaTareas = () => {
  const tareas = useTareas();
  return (
    <>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <Tarea tarea={tarea} />
          </li>
        ))}
      </ul>
    </>
  );
};

function Tarea({ tarea, onEliminar }) {
  const [estaEditando, setEstaEditando] = useState(false);

  const dispatch = useDispatchTareas();

  let contenidoTarea;

  if (estaEditando) {
    contenidoTarea = (
      <>
        <input
          type="text"
          value={tarea.texto}
          onChange={(e) => {
            dispatch({
              tipo: "cambiado",
              tarea: {
                ...tarea,
                texto: e.target.value,
              },
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
          onChange={(e) =>
            dispatch({
              tipo: "cambiado",
              tarea: { ...tarea, hecho: e.target.checked },
            })
          }
          type="checkbox"
        />

        {contenidoTarea}

        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              tipo: "eliminado",
              id: tarea.id,
            })
          }
        >
          Eliminar
        </button>
      </label>
    </>
  );
}
