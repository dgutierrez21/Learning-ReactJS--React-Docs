import { useState } from "react";

export const Contador = () => {
  const [numero, setNumero] = useState(0);
  return (
    <>
      <h1 className="d-inline me-3">{numero}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumero(numero + 5);
          setNumero((n) => n + 1);
          setNumero(42);
        }}
      >
        Aumentar el número
      </button>
    </>
  );
};
