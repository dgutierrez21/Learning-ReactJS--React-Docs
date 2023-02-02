import { useState } from "react";

let siguienteId = 0;

export const List = () => {
  const [nombre, setnombre] = useState("");
  const [artistas, setArtistas] = useState([]);

  return (
    <>
      <h1>Escultores inspiradores:</h1>
      <div className="d-flex">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setnombre(e.target.value)}
        />

        <button
          onClick={() => {
            // artistas.push({
            //   id: siguienteId++,
            //   nombre,
            // });

            setArtistas([...artistas, { id: siguienteId++, nombre }]);

            console.log(artistas);
          }}
          className="btn btn-primary ms-3"
        >
          Añadir
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
