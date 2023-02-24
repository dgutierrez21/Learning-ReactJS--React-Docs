import { useState } from "react";

export const KeyReset = () => {
  const [version, setVersion] = useState(0);

  function handleReiniciar() {
    setVersion(version + 1);
  }
  return (
    <>
      <button
        className="btn btn-primary d-block mb-3"
        onClick={handleReiniciar}
      >
        Reiniciar
      </button>
      <Form key={version} />
    </>
  );
};

function Form() {
  const [nombre, setNombre] = useState("Elon Musk");

  return (
    <>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <h1>Hola, {nombre}</h1>
    </>
  );
}
