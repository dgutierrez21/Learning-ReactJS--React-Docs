import { useState } from "react";

import "./style.css";

export const Contador02App = () => {
  const [mostrarB, setMostrarB] = useState(true);
  return (
    <>
      <div className="d-flex">
        <Contador />
        {mostrarB && <Contador />}
      </div>

      <label htmlFor="">
        <input
          type="checkbox"
          checked={mostrarB}
          onChange={(e) => setMostrarB(e.target.checked)}
        />
        Renderizar el segundo contador
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
