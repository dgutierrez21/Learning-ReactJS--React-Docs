import { useState } from "react";

export const Form = () => {
  const [persona, setPersona] = useState({
    nombre: "Barbara",
    apellido: "Hepworth",
    email: "barhep@barbar.com",
  });

  function handleCambiarNombre(e) {
    // persona.nombre = e.target.value;

    setPersona({
      ...persona,
      nombre: e.target.value,
    });
  }

  function handleCambiarApellido(e) {
    // persona.apellido = e.target.value;

    setPersona({
      ...persona,
      apellido: e.target.value,
    });
  }

  function handleCambiarEmail(e) {
    // persona.email = e.target.value;

    setPersona({
      ...persona,
      email: e.target.value,
    });
  }
  return (
    <>
      <label htmlFor="">
        Nombre:
        <input
          type="text"
          value={persona.nombre}
          onChange={handleCambiarNombre}
        />
      </label>

      <label htmlFor="">
        Apellido:
        <input
          type="text"
          value={persona.apellido}
          onChange={handleCambiarApellido}
        />
      </label>

      <label htmlFor="">
        Email:
        <input
          type="text"
          value={persona.email}
          onChange={handleCambiarEmail}
        />
      </label>

      <p>{`${persona.nombre} ${persona.apellido} (${persona.email})`}</p>
    </>
  );
};
