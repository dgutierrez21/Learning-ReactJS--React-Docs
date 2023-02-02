import { useState } from "react";

let formasIniciales = [
  { id: 0, tipo: "circulo", x: 50, y: 100 },
  { id: 1, tipo: "cuadrado", x: 150, y: 100 },
  { id: 2, tipo: "circulo", x: 250, y: 100 },
];

export const ShapeEditor = () => {
  const [formas, setFormas] = useState(formasIniciales);

  function handleClick() {
    const siguienteForma = formas.map((forma) => {
      if (forma.tipo === "cuadrado") {
        // no cambia
        return forma;
      } else {
        // Devuelve un nuevo círculo 50px abajo
        return {
          ...forma,
          y: forma.y + 50,
        };
      }
    });

    // Vuelve a renderizar con el nuevo _array_
    setFormas(siguienteForma);
  }
  return (
    <div style={{ position: "relative", height: "150px" }}>
      <button onClick={handleClick} className="btn btn-primary">
        ¡Mueve los círculos hacia abajo!
      </button>

      {formas.map((forma) => (
        <div
          key={forma.id}
          style={{
            background: "purple",
            position: "absolute",
            left: forma.x,
            top: forma.y,
            borderRadius: forma.tipo === "circulo" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        ></div>
      ))}
    </div>
  );
};
