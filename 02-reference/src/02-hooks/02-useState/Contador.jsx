import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={handleClick} className="btn btn-primary">
        Aumentar
      </button>
    </>
  );
};
