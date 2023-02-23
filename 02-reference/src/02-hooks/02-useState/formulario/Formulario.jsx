import { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("Esteban");
  const [edad, setEdad] = useState(25);

  function handleCambiarNombre(e) {
    setNombre(e.target.value);
  }

  return (
    <>
      <input type="text" value={nombre} onChange={handleCambiarNombre} />

      <button
        onClick={() => setEdad(edad + 1)}
        className="btn btn-primary d-block my-3"
      >
        Aumentar Edad
      </button>

      <h1>
        Hola, {nombre}. Tu edad es {edad}.
      </h1>
    </>
  );
};
