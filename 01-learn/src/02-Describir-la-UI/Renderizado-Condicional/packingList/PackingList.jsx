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

      <h1>Lista de equipaje de Sally Ride 03</h1>
      <ul>
        <Item3 empaquetado={false} nombre="Mochila impermeable" />
        <Item3 empaquetado={true} nombre="Toalla de microfibra" />
        <Item3 empaquetado={true} nombre="Botiquín básico" />
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

function Item3({ empaquetado, nombre }) {
  let itemContent = nombre;

  if (empaquetado) {
    itemContent = <del>{nombre + "✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}
