import { useState } from "react";

export const FeedbackForm = () => {
  const [texto, setTexto] = useState("");
  //   const [seEstaEnviando, setSeEstaEnviando] = useState(false);
  //   const [enviado, setEnviado] = useState(false);

  const [estado, setEstado] = useState("escribiendo");

  async function handleSubmit(e) {
    e.preventDefault();

    // setSeEstaEnviando(true);

    // await enviarMensaje(texto);

    // setSeEstaEnviando(false);

    // setEnviado(true); // si olvido llamar a setEnviado, daría falso y falso y nunca mostraría el h1

    setEstado("enviando");

    await enviarMensaje(texto);

    setEstado("enviado");
  }

  const enviando = estado === "enviando";

  if (estado === "enviado") {
    return (
      <>
        <h1>Gracias por sus comentarios.</h1>

        <a href="/" className="btn btn-primary">
          Enviar otro feedback
        </a>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <p>¿Cómo fue su estancia en The Prancing Pony?</p>

        <textarea
          disabled={enviando}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>

        <br />

        <button
          className="btn btn-primary mt-2"
          disabled={enviando}
          type="submit"
        >
          Enviar
        </button>

        {enviando && <p>Enviando...</p>}
      </form>
    </>
  );
};

// Finge enviar un mensaje.
function enviarMensaje(mensaje) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
