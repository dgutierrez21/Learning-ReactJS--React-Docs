export const PackingList = () => {
  return (
    <section>
      <h1>Lista de equipaje de sally Ride</h1>
      <ul className="p-0">
        <Item estaEmbalado={true} nombre="Traje espacial" />
        <Item estaEmbalado={true} nombre="Casco con hoja dorada" />
        <Item estaEmbalado={false} nombre="Foto de Tam" />
      </ul>
    </section>
  );
};

function Item({ estaEmbalado, nombre }) {
  return (
    <li className="item">
      {nombre} {estaEmbalado && "✔"}
    </li>
  );
}
