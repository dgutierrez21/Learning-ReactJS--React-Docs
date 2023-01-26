import React from "react";

const hoy = new Date();

const persona = {
  nombre: "Gregorio Y. Zara",
  temaOscuro: { backgroundColor: "black", color: "pink" },
};

const { nombre, temaOscuro } = persona;

export const TodoList = () => {
  return (
    <>
      <h1>Lista de tareas de {nombre}</h1>
      <h2 className="h1">Lista de tareas del {formatearFecha(hoy)}</h2>

      <ul style={temaOscuro} className="p-3 rounded">
        <li>Mejorar el videoteléfono</li>
        <li>Preparar las clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
      </ul>
    </>
  );
};

function formatearFecha(fecha) {
  return new Intl.DateTimeFormat("es-CR", {
    weekday: "long",
  }).format(fecha);
}
