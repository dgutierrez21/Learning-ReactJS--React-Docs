import { useState } from "react";

const elementosIniciales = [
  { titulo: "pretzels", id: 0 },
  { titulo: "crispy seaweed", id: 1 },
  { titulo: "granola bar", id: 2 },
];

export const Menu = () => {
  const [elementos, setElementos] = useState(elementosIniciales);
  //   const [elementoSeleccionado, setElementoSeleccionado] = useState(
  //     elementos[0]
  //   );

  const [idSeleccionado, setIdSeleccionado] = useState(0);

  const elementoSeleccionado = elementos.find(
    (elemento) => elemento.id === idSeleccionado
  );

  function handleCambiarElemento(id, e) {
    setElementos(
      elementos.map((elemento) => {
        if (elemento.id === id) {
          return { ...elemento, titulo: e.target.value };
        } else {
          return elemento;
        }
      })
    );
  }

  return (
    <>
      <h1>¿Cuál es su aperitivo de viaje?</h1>

      <ul>
        {elementos.map((elemento, indice) => (
          <li className="d-block" key={elemento.id}>
            {/* {elemento.titulo}{" "} */}

            <input
              type="text"
              value={elemento.titulo}
              onChange={(e) => handleCambiarElemento(elemento.id, e)}
            />

            <button
              onClick={() => {
                // setElementoSeleccionado(elemento.id);
                setIdSeleccionado(elemento.id);
              }}
              className="btn btn-primary ms-3"
            >
              Elegir
            </button>
          </li>
        ))}
      </ul>

      <p>
        Elegiste: <b>{elementoSeleccionado.titulo}</b>
      </p>
    </>
  );
};
