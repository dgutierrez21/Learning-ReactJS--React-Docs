import { useRef, useState } from "react";

export const Contador = () => {
  console.log("Renderizado");

  let ref = useRef(0);

  const [contador, setContador] = useState(0);

  function handleClickRef() {
    ref.current = ref.current + 1;
    alert("Haz hecho clic " + ref.current + " veces");
  }

  function handleClickEstado() {
    setContador(contador + 1);
  }

  return (
    <>
      <div className="d-flex gap-4">
        <div className="p-2 border border-3 border-primary">
          <h1>{ref.current}</h1>
          <button onClick={handleClickRef} className="btn btn-primary">
            Clic Aquí
          </button>
        </div>

        <div className="p-2 border border-3 border-danger">
          <h1>{contador}</h1>
          <button onClick={handleClickEstado} className="btn btn-primary">
            Clic Aquí 02
          </button>
        </div>
      </div>
    </>
  );
};
