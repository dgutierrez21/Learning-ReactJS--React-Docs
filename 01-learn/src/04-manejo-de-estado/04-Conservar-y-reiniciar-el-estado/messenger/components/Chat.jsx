import { useState } from "react";

export const Chat = ({ contacto }) => {
  const [texto, setTexto] = useState("");
  return (
    <>
      <section className="chat d-flex flex-column align-items-center">
        <textarea
          className="p-2"
          value={texto}
          placeholder={"Chatear con " + contacto.nombre}
          onChange={(e) => setTexto(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>

        <br />

        <button className="btn btn-primary">Enviar a {contacto.email}</button>
      </section>
    </>
  );
};
