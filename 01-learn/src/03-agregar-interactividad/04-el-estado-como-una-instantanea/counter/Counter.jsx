import { useState } from "react";

export const Counter = () => {
  const [numero, setNumero] = useState(0);
  return (
    <>
      <h1 className="d-inline me-3">{numero}</h1>

      <button
        className="btn btn-primary"
        onClick={() => {
          setNumero(numero + 1);
          setNumero(numero + 1);
          setNumero(numero + 1);
        }}
      >
        +3
      </button>
    </>
  );
};
