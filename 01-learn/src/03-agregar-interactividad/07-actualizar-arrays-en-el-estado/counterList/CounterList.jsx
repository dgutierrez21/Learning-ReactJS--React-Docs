import { useState } from "react";

let contadoresIniciales = [0, 0, 0];

const CounterList = () => {
  const [contadores, setcontadores] = useState(contadoresIniciales);

  function handleClickIncrementar(indice) {
    const siguientesContadores = contadores.map((contador, i) => {
      if (i === indice) {
        // Incrementa el contador de clics
        console.log(i, indice);

        return contador + 1;
      } else {
        // El resto no ha cambiado

        return contador;
      }
    });

    setcontadores(siguientesContadores);
  }
  return (
    <>
      <ul>
        {contadores.map((contador, indice) => (
          <li className="d-block" key={indice}>
            {contador}
            <button
              onClick={() => {
                handleClickIncrementar(indice);
              }}
              className="btn btn-primary ms-3"
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CounterList;
