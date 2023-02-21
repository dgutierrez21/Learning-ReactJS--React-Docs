import { useEffect, useState } from "react";

export const SaveButton = () => {
  const [estaEnlinea, setEstaEnlinea] = useState(true);

  useEffect(() => {
    function handleEnLinea() {
      setEstaEnlinea(true);
    }

    function handleDesconectado() {
      setEstaEnlinea(false);
    }

    window.addEventListener("online", handleEnLinea);
    window.addEventListener("offline", handleDesconectado);

    return () => {
      window.removeEventListener("online", handleEnLinea);
      window.removeEventListener("offline", handleDesconectado);
    };
  }, []);

  function handleGuardarClick() {
    console.log("✅ Progreso Guardado.");
  }

  return (
    <>
      <button
        disabled={!estaEnlinea}
        onClick={handleGuardarClick}
        className="btn btn-primary"
      >
        {estaEnlinea ? "Guardar Progreso" : "Reconectando..."}
      </button>
    </>
  );
};
