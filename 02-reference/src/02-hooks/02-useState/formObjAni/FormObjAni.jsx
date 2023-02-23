import { useState } from "react";

export const FormObjAni = () => {
  const [persona, setPersona] = useState({
    nombre: "Niki De Saint",
    ilustracion: {
      titulo: "Blue Nana",
      ciudad: "Hamburg",
      imagen: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleCambiarNombre(e) {
    setPersona({
      ...persona,
      nombre: e.target.value,
    });
  }

  function handleCambiarTitulo(e) {
    setPersona({
      ...persona,
      ilustracion: {
        ...persona.ilustracion,
        titulo: e.target.value,
      },
    });
  }

  function handleCambiarCiudad(e) {
    setPersona({
      ...persona,
      ilustracion: {
        ...persona.ilustracion,
        ciudad: e.target.value,
      },
    });
  }

  function handleCambiarImagen(e) {
    setPersona({
      ...persona,
      ilustracion: {
        ...persona.ilustracion,
        imagen: e.target.value,
      },
    });
  }

  const { nombre, ilustracion } = persona;

  return (
    <>
      <label htmlFor="">
        Nombre:
        <input type="text" value={nombre} onChange={handleCambiarNombre} />
      </label>
      <label htmlFor="">
        Titulo:
        <input
          type="text"
          value={ilustracion.titulo}
          onChange={handleCambiarTitulo}
        />
      </label>
      <label htmlFor="">
        Ciudad:
        <input
          type="text"
          value={ilustracion.ciudad}
          onChange={handleCambiarCiudad}
        />
      </label>
      <label htmlFor="">
        Imagen:
        <input
          type="text"
          value={ilustracion.imagen}
          onChange={handleCambiarImagen}
        />
      </label>

      <p className="mt-3">
        <i>{ilustracion.titulo}</i>
        {" por "}
        {nombre}
        <br />
        (Situado en {ilustracion.ciudad})
      </p>

      <img src={ilustracion.imagen} alt={ilustracion.titulo} />
    </>
  );
};
