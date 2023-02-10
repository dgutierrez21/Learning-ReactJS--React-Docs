import { useRef } from "react";

import "./style.css";

export const AmigosGatunos = () => {
  const primerGatoRef = useRef(null);
  const segundoGatoRef = useRef(null);
  const tercerGatoRef = useRef(null);

  function handleDesplazarseHastaElPrimerGato() {
    primerGatoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleDesplazarseHastaElSegundoGato() {
    segundoGatoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleDesplazarseHastaElTercerGato() {
    tercerGatoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <>
      <nav className="nav-gatos">
        <button
          className="btn btn-primary"
          onClick={handleDesplazarseHastaElPrimerGato}
        >
          Tom
        </button>
        <button
          className="btn btn-primary"
          onClick={handleDesplazarseHastaElSegundoGato}
        >
          Maru
        </button>
        <button
          className="btn btn-primary"
          onClick={handleDesplazarseHastaElTercerGato}
        >
          Misu
        </button>
      </nav>

      <div className="contenedor-gatos">
        <ul className="lista-gatos">
          <li>
            <img
              className="img-gatos"
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={primerGatoRef}
            />
          </li>
          <li>
            <img
              className="img-gatos"
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={segundoGatoRef}
            />
          </li>
          <li>
            <img
              className="img-gatos"
              src="https://placekitten.com/g/250/200"
              alt="Misu"
              ref={tercerGatoRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
