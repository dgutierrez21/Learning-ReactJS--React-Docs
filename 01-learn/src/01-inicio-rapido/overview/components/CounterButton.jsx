import { useState } from "react";

export const CounterButton = () => {
  // estado actual | funcion para actualizar el estado

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="btn btn-primary mx-2" onClick={handleClick}>
      Pulsado {count} veces
    </button>
  );
};
