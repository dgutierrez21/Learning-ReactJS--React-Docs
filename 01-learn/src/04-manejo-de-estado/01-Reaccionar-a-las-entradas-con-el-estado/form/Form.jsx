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

const Form02 = (
  // Prueba 'enviando', 'error', 'exito':
  { estado = "vacio" }
) => {
  const [respuesta, setRespuesta] = useState("");
  const [error, setError] = useState(null);

  const [esVacio, setEsVacio] = useState(true);
  const [estaEscribiendo, setEstaEscribiendo] = useState(false);
  const [seEstaEnviando, setSeEstaEnviando] = useState(false);
  const [esExitoso, setEsExitoso] = useState(false);
  const [esError, setEsError] = useState(false);

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
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          disabled={estado === "enviando"}
        ></textarea>
        <br />
        <button
          className="btn btn-primary"
          disabled={estado === "vacio" || estado === "enviando"}
        >
          Enviar
        </button>

        {estado === "error" && (
          <p className="text-danger fw-bold h5 mt-2">
            Buena suposición pero una respuesta incorrecta. Inténtalo de nuevo.
          </p>
        )}
      </form>
    </>
  );
};
