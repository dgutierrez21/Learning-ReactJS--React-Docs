import { useState } from "react";

export const Marcador = () => {
  const [esJugadorA, setesJugadorA] = useState(true);

  return (
    <>
      {esJugadorA ? (
        <Contador key="Taylor" persona={"Taylor"} />
      ) : (
        <Contador key="Sarah" persona={"Sarah"} />
      )}

      <button
        onClick={() => setesJugadorA(!esJugadorA)}
        className="btn btn-primary"
      >
        Siguiente Jugador!
      </button>
    </>
  );
};

function Contador({ persona }) {
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
      <h1>
        Puntuación de {persona}: {puntuacion}
      </h1>

      <button
        onClick={() => setPuntuacion(puntuacion + 1)}
        className="btn btn-primary"
      >
        Añadir Uno
      </button>
    </div>
  );
}
