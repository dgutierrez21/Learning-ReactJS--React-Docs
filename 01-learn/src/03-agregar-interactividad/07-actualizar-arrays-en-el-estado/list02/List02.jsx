import { useState } from "react";

let artistasIniciales = [
  { id: 0, nombre: "Marta Colvin Andrade" },
  { id: 1, nombre: "Lamidi Olonade Fakeye" },
  { id: 2, nombre: "Louise Nevelson" },
];

export const List02 = () => {
  const [artistas, setArtistas] = useState(artistasIniciales);

  return (
    <>
      <h1>Escultores inspiradores:</h1>

      <ul>
        {artistas.map((artista) => (
          <li key={artista.id}>
            {artista.nombre}
            <button
              onClick={() => {
                setArtistas(artistas.filter((ar) => ar.id !== artista.id));
              }}
              className="btn btn-primary w-50"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
