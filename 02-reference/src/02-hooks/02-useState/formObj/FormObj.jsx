import { useState } from "react";

export const FormObj = () => {
  const [formulario, setFormulario] = useState({
    nombre: "Barbara",
    apellido: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const { nombre, apellido, email } = formulario;
  
  return (
    <>
      <label htmlFor="" className="d-block">
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              nombre: e.target.value,
            })
          }
        />
      </label>

      <label htmlFor="" className="d-block my-3">
        Apellido:
        <input
          onChange={(e) =>
            setFormulario({
              ...formulario,
              apellido: e.target.value,
            })
          }
          type="text"
          value={apellido}
        />
      </label>

      <label htmlFor="">
        Email:
        <input
          onChange={(e) =>
            setFormulario({
              ...formulario,
              email: e.target.value,
            })
          }
          type="text"
          value={email}
        />
      </label>

      <h1>
        {nombre + " " + apellido}({email})
      </h1>
    </>
  );
};
