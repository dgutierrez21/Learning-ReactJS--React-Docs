import { useState } from "react";

export const MoviendoPunto = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPosicion({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{ position: "relative", width: "100vw", height: "100px" }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${posicion.x}px, ${posicion.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      ></div>
    </div>
  );
};
