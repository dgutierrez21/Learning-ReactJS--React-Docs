import { useState } from "react";

export const CampoTexto = () => {
  const [texto, setTexto] = useState("React");

  function handleChange(e) {
    setTexto(e.target.value);
  }
  return (
    <>
      <input type="text" value={texto} onChange={handleChange} />
      <h1>Estoy aprendiendo {texto}</h1>
      <button onClick={() => setTexto("React")} className="btn btn-primary">
        Reiniciar
      </button>
    </>
  );
};
