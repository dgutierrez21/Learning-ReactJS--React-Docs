import { useState } from "react";
import { listaEsculturas } from "./data";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [mostraMas, setMostraMas] = useState(false);

  function handleSiguienteClick() {
    if (index === listaEsculturas.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  }

  function handleMasClick() {
    setMostraMas(!mostraMas);
  }

  let escultura = listaEsculturas[index];

  return (
    <>
      <button className="btn btn-primary me-3" onClick={handleSiguienteClick}>
        Siguiente
      </button>

      <h2>
        <i>{escultura.name}</i> por {escultura.artist}
      </h2>

      <h3>
        ({index + 1} de {listaEsculturas.length})
      </h3>

      <img src={escultura.url} alt={escultura.alt} />

      <button className="btn btn-primary d-block mt-3" onClick={handleMasClick}>
        {mostraMas ? "Ocultar" : "Mostrar"} detalles
      </button>

      {mostraMas && <p>{escultura.description}</p>}
    </>
  );
};

export default Gallery;
