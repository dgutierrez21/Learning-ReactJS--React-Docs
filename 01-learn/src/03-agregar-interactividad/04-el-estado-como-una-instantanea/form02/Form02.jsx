import { useState } from "react";

const Form02 = () => {
  const [to, setTo] = useState("alice");
  const [mensaje, setMensaje] = useState("Hola");

  function handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      alert(`Usted dijo ${mensaje} a ${to}`);
    }, 5000);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          A:
          <select
            name=""
            id=""
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>

        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button className="btn btn-primary ms-3" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form02;
