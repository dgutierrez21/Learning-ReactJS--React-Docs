import { useState } from "react";

import "./style.css";

export const ContadorApp = () => {
  //   const contador = <Contador />;
  return (
    <div className="d-flex">
      {/* {contador}
      {contador} */}
      <Contador />
      <Contador />
    </div>
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
