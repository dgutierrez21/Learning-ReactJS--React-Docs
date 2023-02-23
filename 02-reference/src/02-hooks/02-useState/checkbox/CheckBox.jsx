import { useState } from "react";

export const CheckBox = () => {
  const [meGusta, setMeGusta] = useState(false);

  function handleCambiar(e) {
    setMeGusta(e.target.checked);
  }

  return (
    <>
      <label htmlFor="">
        <input checked={meGusta} onChange={handleCambiar} type="checkbox" />
        Me Gusta
      </label>

      <h1>{meGusta ? "Esto te gusta" : "Esto no te gusta"}</h1>
    </>
  );
};
