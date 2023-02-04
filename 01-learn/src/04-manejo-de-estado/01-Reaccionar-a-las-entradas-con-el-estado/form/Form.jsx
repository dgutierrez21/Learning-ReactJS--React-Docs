import { useState } from "react";

export const Form = ({ estado = "vacio" }) => {
  if (estado === "exito") {
    return <h1>¡Así es!</h1>;
  }

  return (
    <>
      <h2>Quiz Ciudad</h2>

      <p>
        ¿En qué ciudad hay una valla publicitaria que convierte el aire en agua
        potable?
      </p>

      <form action="">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button className="btn btn-primary">Enviar</button>
      </form>

      <div className="separator bg-danger"></div>

      <Form02 />
    </>
  );
};

const Form02 = () => {
  const [respuesta, setRespuesta] = useState("");
  const [error, setError] = useState(null);

  const [estado, setEstado] = useState("escribiendo");

  if (estado === "exito") {
    return <h1>¡Así es!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setEstado("enviando");

    try {
      await enviarForm(respuesta);
      setEstado("exito");
    } catch (err) {
      setEstado("escribiendo");
      setError(err);
    }
  }

  function handleCambiarTextArea(e) {
    setRespuesta(e.target.value);
  }

  return (
    <>
      <h2>Quiz Ciudad</h2>

      <p>
        ¿En qué ciudad hay una valla publicitaria que convierte el aire en agua
        potable?
      </p>

      <form onSubmit={handleSubmit} action="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={respuesta}
          onChange={handleCambiarTextArea}
          disabled={estado === "enviando"}
        ></textarea>
        <br />
        <button
          className="btn btn-primary"
          disabled={respuesta.length === 0 || estado === "enviando"}
        >
          Enviar
        </button>

        {error !== null && (
          <p className="text-danger fw-bold h5 mt-2">{error.message}</p>
        )}
      </form>
    </>
  );
};

function enviarForm(respuesta) {
  // Finge que está llegando a la red.

  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      let debeError = respuesta.toLowerCase() !== "lima";

      if (debeError) {
        rechazar(
          new Error(
            "Buena suposición pero una respuesta incorrecta. Inténtalo de nuevo."
          )
        );
      } else {
        resolver();
      }
    }, 1500);
  });
}
