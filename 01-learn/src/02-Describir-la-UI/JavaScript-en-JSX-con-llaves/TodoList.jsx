import React from "react";

const hoy = new Date();

export const TodoList = () => {
  const nombre = "Gregorio Y. Zara";
  return (
    <>
      <h1>Lista de tareas de {nombre}</h1>
      <h2 className="h1">Lista de tareas del {formatearFecha(hoy)}</h2>
    </>
  );
};

function formatearFecha(fecha) {
  return new Intl.DateTimeFormat("es-CR", {
    weekday: "long",
  }).format(fecha);
}
