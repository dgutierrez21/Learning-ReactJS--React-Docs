import { useRef, useState } from "react";

export const Contador = () => {
  const [mostrar, setMostrar] = useState(true);

  const ref = useRef(null);
  return (
    <>
      <button onClick={() => setMostrar(!mostrar)} className="btn btn-primary">
        Alternar con setState
      </button>

      <button
        onClick={() => ref.current.remove()}
        className="btn btn-primary ms-3"
      >
        Eliminar del DOM
      </button>

      {mostrar && (
        <h3 className="mt-2" ref={ref}>
          Hola Mundo
        </h3>
      )}
    </>
  );
};
