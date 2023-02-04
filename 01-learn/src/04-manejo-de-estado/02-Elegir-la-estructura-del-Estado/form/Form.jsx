import { useState } from "react";

export const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  // const [nombreCompleto, setNombreCompleto] = useState("");

  const nombreCompleto = `${nombre} ${apellido}`;

  function handleCambiarNombre(e) {
    setNombre(e.target.value);
    // setNombreCompleto(e.target.value + " " + apellido);
  }

  function handleCambiarApellido(e) {
    setApellido(e.target.value);
    // setNombreCompleto(nombre + " " + e.target.value);
  }
  return (
    <>
      <h1>Vamos a registrarte</h1>

      <label htmlFor="">
        Nombre:{" "}
        <input value={nombre} onChange={handleCambiarNombre} type="text" />
      </label>

      <label htmlFor="">
        Apellido:{" "}
        <input value={apellido} onChange={handleCambiarApellido} type="text" />
      </label>

      <p>
        Su billete se expedirá a nombre de: <b>{nombreCompleto}</b>
      </p>
    </>
  );
};
