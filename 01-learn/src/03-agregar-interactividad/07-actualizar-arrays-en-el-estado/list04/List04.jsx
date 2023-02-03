import { useState } from "react";

let siguienteId = 3;

const listaInicial = [
  { id: 0, titulo: "Big Bellies" },
  { id: 1, titulo: "Lunar Landscape" },
  { id: 2, titulo: "Terracotta Army" },
];

export const List04 = () => {
  const [lista, setLista] = useState(listaInicial);

  function handleClick() {
    const siguienteLista = [...lista];
    siguienteLista.reverse();

    setLista(siguienteLista);
  }
  return (
    <>
      <button onClick={handleClick} className="btn btn-primary">
        Inverso
      </button>
      <ul>
        {lista.map((obra) => (
          <li key={obra.id}>{obra.titulo}</li>
        ))}
      </ul>
    </>
  );
};
