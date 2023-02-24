import { useState } from "react";

export const CountLabelApp = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <button
        className="btn btn-primary me-3"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setContador(contador - 1)}
      >
        Decrementar
      </button>

      <CountLabel contador={contador} />
    </>
  );
};

function CountLabel({ contador }) {
  const [prevContador, setPrevContador] = useState(contador);

  const [tendencia, setTendencia] = useState(null);

  if (prevContador !== contador) {
    setPrevContador(contador);
    setTendencia(contador > prevContador ? "Aumentando" : "Disminuyendo");
  }

  return (
    <>
      <h1>{contador}</h1>
      {tendencia && <p>La cuenta esta {tendencia} </p>}
    </>
  );
}
