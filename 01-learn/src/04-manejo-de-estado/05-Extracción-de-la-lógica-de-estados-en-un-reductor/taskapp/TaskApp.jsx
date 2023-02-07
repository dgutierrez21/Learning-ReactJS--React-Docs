import { useState } from "react";
import { AniadirTarea } from "./components/AniadirTarea";
import { ListaTareas } from "./components/ListaTareas";

let siguienteId = 3;
const tareasIniciales = [
  { id: 0, texto: "Visit Kafka Museum", hecho: true },
  { id: 1, texto: "Watch a puppet show", hecho: false },
  { id: 2, texto: "Lennon Wall pic", hecho: false },
];

export const TaskApp = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  function handleAniadirTarea(texto) {
    // "action" object:
    dispatch({
      tipo: "aniadido",
      id: siguienteId++,
      texto,
    });
  }

  function handleCambiarTarea(tarea) {
    // "action" object:
    dispatch({
      tipo: "cambiado",
      tarea,
    });
  }

  function handleEliminarTarea(tareaId) {
    // "action" object:
    dispatch({
      tipo: "eliminado",
      id: tareaId,
    });
  }

  return (
    <>
      <h1>Itinerario de Praga</h1>

      <AniadirTarea onAniadirTarea={handleAniadirTarea} />

      <ListaTareas
        tareas={tareas}
        onCambiarTarea={handleCambiarTarea}
        onEliminarTarea={handleEliminarTarea}
      />
    </>
  );
};
