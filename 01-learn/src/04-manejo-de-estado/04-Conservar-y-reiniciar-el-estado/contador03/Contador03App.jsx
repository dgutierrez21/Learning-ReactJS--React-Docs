import { useState } from "react";

import "./style.css";

export const Contador03App = () => {
  const [esElegante, setEsElegante] = useState(false);

  return (
    <>
      <div className="d-flex">
        {esElegante ? (
          <Contador esElegante={true} />
        ) : (
          <Contador esElegante={false} />
        )}
      </div>

      <label htmlFor="">
        <input
          type="checkbox"
          checked={esElegante}
          onChange={(e) => setEsElegante(e.target.checked)}
        />
        Usar estilo elegante
      </label>
    </>
  );
};

function Contador({ esElegante }) {
  const [puntuacion, setPuntuacion] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "contador";

  if (hover) {
    className += " hover";
  }

  if (esElegante) {
    className += " elegante";
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
