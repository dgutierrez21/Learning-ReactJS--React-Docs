import { useState } from "react";

export const Form = () => {
  const [persona, setPersona] = useState({
    nombre: "Barbara",
    apellido: "Hepworth",
    email: "barhep@barbar.com",
    mascota: {
      animal: "Perro",
      nombre: "Firu",
      color: "Negro",
      img: "https://i.imgur.com/jDimNTZ.jpeg",
    },
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

  function handleMascota(e) {
    setPersona({
      ...persona,
      mascota: {
        ...persona.mascota,
        animal: e.target.value,
      },
    });
  }

  function handleCambiarNombreMascota(e) {
    setPersona({
      ...persona,
      mascota: {
        ...persona.mascota,
        nombre: e.target.value,
      },
    });
  }

  function handleCambiarColorMascota(e) {
    setPersona({
      ...persona,
      mascota: {
        ...persona.mascota,
        color: e.target.value,
      },
    });
  }

  function handleCambiarImagenMascota(e) {
    setPersona({
      ...persona,
      mascota: {
        ...persona.mascota,
        img: e.target.value,
      },
    });
  }

  const { nombre, apellido, email, mascota } = persona;

  return (
    <>
      <label htmlFor="">
        Nombre:
        <input type="text" value={nombre} onChange={handleCambiarNombre} />
      </label>

      <label htmlFor="">
        Apellido:
        <input type="text" value={apellido} onChange={handleCambiarApellido} />
      </label>

      <label htmlFor="">
        Email:
        <input type="text" value={email} onChange={handleCambiarEmail} />
      </label>

      <label htmlFor="">
        Mascota:
        <input type="text" value={mascota.animal} onChange={handleMascota} />
      </label>

      <label htmlFor="">
        Nombre Mascota:
        <input
          type="text"
          value={mascota.nombre}
          onChange={handleCambiarNombreMascota}
        />
      </label>

      <label htmlFor="">
        Color Mascota:
        <input
          type="text"
          value={mascota.color}
          onChange={handleCambiarColorMascota}
        />
      </label>

      <label htmlFor="">
        Imagen Mascota:
        <input
          type="text"
          value={mascota.img}
          onChange={handleCambiarImagenMascota}
        />
      </label>

      <p className="h5">{`${nombre} ${apellido} (${email}) || Mascota: ${mascota.animal}, nombre: ${mascota.nombre}, color: ${mascota.color}, imagen de la mascota:`}</p>
      <img src={mascota.img} alt={mascota.nombre} />
    </>
  );
};
