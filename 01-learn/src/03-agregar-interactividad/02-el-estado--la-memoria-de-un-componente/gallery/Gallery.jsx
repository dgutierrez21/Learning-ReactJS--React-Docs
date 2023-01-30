import { useState } from "react";
import { listaEsculturas } from "./data";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index === listaEsculturas.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  }

  let escultura = listaEsculturas[index];

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Siguiente
      </button>

      <h2>
        <i>{escultura.name}</i> por {escultura.artist}
      </h2>

      <h3>
        ({index + 1} de {listaEsculturas.length})
      </h3>

      <img src={escultura.url} alt={escultura.alt} />

      <p>{escultura.description}</p>
    </>
  );
};

export default Gallery;
