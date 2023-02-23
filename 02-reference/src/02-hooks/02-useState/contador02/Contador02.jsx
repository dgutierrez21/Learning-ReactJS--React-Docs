import { useState } from "react";

export const Contador02 = () => {
  const [contador, setContador] = useState(0);

  function handleAumentar() {
    setContador((c) => c + 1);
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
