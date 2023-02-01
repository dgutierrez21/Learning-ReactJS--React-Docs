import { useState } from "react";

export const Counter02 = () => {
  const [numero, setNumero] = useState(0);
  return (
    <>
      <h1 className="d-inline me-3">{numero}</h1>

      <button
        className="btn btn-primary"
        onClick={() => {
          setNumero(numero + 5);
          alert(numero);

          tempAlert(numero);
        }}
      >
        +5
      </button>
    </>
  );

  function tempAlert(numero) {
    setTimeout(() => {
      alert(numero);
    }, 3000);
  }
};
