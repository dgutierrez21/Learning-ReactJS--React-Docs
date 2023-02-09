import { createContext, useContext, useReducer } from "react";

export const ContextTareas = createContext(null);
export const ContextDispatchTareas = createContext(null);

const tareasIniciales = [
  { id: 0, texto: "Visit Kafka Museum", hecho: true },
  { id: 1, texto: "Watch a puppet show", hecho: false },
  { id: 2, texto: "Lennon Wall pic", hecho: false },
];

export const TareasProvider = ({ children }) => {
  const [tareas, dispatch] = useReducer(reducerTareas, tareasIniciales);

  return (
    <ContextTareas.Provider value={tareas}>
      <ContextDispatchTareas.Provider value={dispatch}>
        {children}
      </ContextDispatchTareas.Provider>
    </ContextTareas.Provider>
  );
};

function reducerTareas(tareas, accion) {
  // devuelve el siguiente estado para que React lo establezca
  switch (accion.tipo) {
    case "aniadido":
      return [
        ...tareas,
        {
          id: accion.id,
          texto: accion.texto,
          hecho: false,
        },
      ];
    case "cambiado":
      return tareas.map((t) => {
        if (t.id === accion.tarea.id) {
          return accion.tarea;
        } else {
          return t;
        }
      });
    case "eliminado":
      return tareas.filter((t) => t.id !== accion.id);
    default:
      throw Error("Acción desconocida: " + accion.tipo);
  }
}

export function useTareas() {
  return useContext(ContextTareas);
}

export function useDispatchTareas() {
  return useContext(ContextDispatchTareas);
}
