import { useEffect, useState } from "react";

export const PlayGroundApp = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <button onClick={() => setMostrar(!mostrar)} className="btn btn-primary">
        {mostrar ? "Desmontar" : "Montar"} el componente
      </button>

      {mostrar && <hr />}
      {mostrar && <PlayGround />}
    </>
  );
};

function PlayGround() {
  const [texto, setTexto] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + texto);
    }

    console.log("🔵 Programar registro " + `"${texto}"`);

    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log("🟡 Cancelar Registro " + `"${texto}"`);
      clearTimeout(timeoutId);
    };
  }, [texto]);

  return (
    <>
      <label htmlFor="">
        Qué hay que registrar:
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          type="text"
        />
      </label>

      <h1>{texto}</h1>
    </>
  );
}
