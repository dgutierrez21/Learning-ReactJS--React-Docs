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
    setTareas([
      ...tareas,
      {
        id: siguienteId++,
        texto,
        hecho: false,
      },
    ]);
  }

  function handleCambiarTarea(tarea) {
    setTareas(
      tareas.map((t) => {
        if (t.id === tarea.id) {
          return tarea;
        } else {
          return t;
        }
      })
    );
  }

  function handleEliminarTarea(tareaId) {
    setTareas(tareas.filter((t) => t.id !== tareaId));
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
