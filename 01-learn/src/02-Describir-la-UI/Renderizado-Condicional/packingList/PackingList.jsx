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

      <h1>Lista de equipaje de Sally Ride 02</h1>
      <ul>
        <Item2 empaquetado={true} nombre="Mochila impermeable" />
        <Item2 empaquetado={true} nombre="Toalla de microfibra" />
        <Item2 empaquetado={false} nombre="Botiquín básico" />
      </ul>
    </section>
  );
};

function Item({ empaquetado, nombre }) {
  return (
    <li className="item">{empaquetado ? <del>{nombre + "✔"}</del> : nombre}</li>
  );
}

function Item2({ empaquetado, nombre }) {
  return (
    <li className="item">
      {nombre} {empaquetado && "✔"}
    </li>
  );
}
