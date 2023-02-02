import { useState } from "react";

let siguienteID = 3;

const artistasIniciales = [
  { id: 0, nombre: "Marta Colvin Andrade" },
  { id: 1, nombre: "Lamidi Olonade Fakeye" },
  { id: 2, nombre: "Louise Nevelson" },
];

export const List03 = () => {
  const [nombre, setNombre] = useState("");
  const [artistas, setArtistas] = useState(artistasIniciales);

  console.log(artistas);

  function handleClick() {
    const insertarAt = 1; // podría ser cualqiuer indice

    const siguientesArtistas = [
      // elementos antes del punto de insercción:

      ...artistas.slice(0, insertarAt),

      // nuevo elemento:
      { id: siguienteID++, nombre },

      // Elementos después del punto de inserción:

      ...artistas.slice(insertarAt),
    ];

    setArtistas(siguientesArtistas);
    setNombre("");
  }

  return (
    <>
      <h1>Escultores inspiradores:</h1>
      <div className="d-flex gap-3">
        <input
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

        <button onClick={handleClick} className="btn btn-primary">
          Insertar
        </button>
      </div>

      <ul>
        {artistas.map((artista) => (
          <li key={artista.id}>{artista.nombre}</li>
        ))}
      </ul>
    </>
  );
};
