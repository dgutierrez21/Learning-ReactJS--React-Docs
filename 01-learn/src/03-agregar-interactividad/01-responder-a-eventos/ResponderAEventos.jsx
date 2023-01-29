import React from "react";

export const ResponderAEventos = () => {
  function handleClick() {
    alert("Haz hecho click en un botón");
  }

  return (
    <>
      <button className="btn btn-primary me-3">No hago nada 01</button>

      <button className="btn btn-primary me-3" onClick={handleClick}>
        Haz click aquí 02
      </button>

      <button
        className="btn btn-primary"
        onClick={() => alert("Haz hecho click en el botón 03")}
      >
        Haz click aquí 03
      </button>
    </>
  );
};
