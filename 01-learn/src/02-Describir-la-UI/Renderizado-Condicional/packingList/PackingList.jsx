import React from "react";

export const PackingList = () => {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item empaquetado={true} nombre="Traje espacial" />
        <Item empaquetado={false} nombre="Foto de Tam" />
        <Item empaquetado={true} nombre="Casco con hoja dorada" />
      </ul>
    </section>
  );
};

function Item({ empaquetado, nombre }) {
  if (empaquetado) {
    return <li className="item">{nombre} ✔</li>;
  }

  return <li className="item">{nombre}</li>;
}
