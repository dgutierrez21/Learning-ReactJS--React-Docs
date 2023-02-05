import { useState } from "react";

import "./style.css";

export const Contador04App = () => {
  const [enPausa, setEnPausa] = useState(false);

  return (
    <>
      <div className="d-flex">
        {enPausa ? <p>Hasta Luego!</p> : <Contador />}
      </div>

      <label htmlFor="">
        <input
          type="checkbox"
          checked={enPausa}
          onChange={(e) => setEnPausa(e.target.checked)}
        />
        Hacer una pausa
      </label>
    </>
  );
};

function Contador() {
  const [puntuacion, setPuntuacion] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "contador";

  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{puntuacion}</h1>

      <button
        className="btn btn-primary"
        onClick={() => setPuntuacion(puntuacion + 1)}
      >
        Añadir Uno
      </button>
    </div>
  );
}
