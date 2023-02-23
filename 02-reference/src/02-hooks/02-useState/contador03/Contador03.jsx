import { useState } from "react";

export const Contador03 = () => {
  const [contador, setContador] = useState(0);

  function handleAumentar() {
    setContador(contador + 1);
  }
  return (
    <>
      <h1>{contador}</h1>
      <button
        onClick={() => {
          handleAumentar();
          handleAumentar();
          handleAumentar();
        }}
        className="btn btn-primary"
      >
        +3
      </button>

      <button
        onClick={() => {
          handleAumentar();
        }}
        className="btn btn-primary d-block mt-3"
      >
        +1
      </button>
    </>
  );
};
