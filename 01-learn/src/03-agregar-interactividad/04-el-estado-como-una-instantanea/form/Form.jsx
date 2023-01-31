import { useState } from "react";

const Form = () => {
  const [esEnviado, setEsEnviado] = useState(false);
  const [mensaje, setMensaje] = useState("Hola");

  if (esEnviado) {
    return <h1>Su mensaje está en camino.</h1>;
  }

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();

          setEsEnviado(true);

          enviarMensaje(mensaje);
        }}
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>

        <button type="submit" className="btn btn-primary ms-3">
          Enviar
        </button>
      </form>
    </>
  );
};

function enviarMensaje(mensaje) {
  //...
}

export default Form;
