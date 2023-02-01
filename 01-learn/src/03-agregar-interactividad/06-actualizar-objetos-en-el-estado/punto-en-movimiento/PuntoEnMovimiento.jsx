import { useState } from "react";

export const PuntoEnMovimiento = () => {
  const [posicion, setPosicion] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setPosicion({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "blue",
          borderRadius: "50%",
          transform: `translate(${posicion.x}px, ${posicion.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      >
        <p className="ms-4">{`x: ${posicion.x} y: ${posicion.y}`}</p>
      </div>
    </div>
  );
};
